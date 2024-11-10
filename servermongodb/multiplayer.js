require('dotenv').config();
const WebSocket = require('ws');
const mongoose = require('mongoose');
const { User, SharedState } = require('./models'); // Define necessary models
const winston = require('winston');
const { v4: uuidv4 } = require('uuid'); // Import UUID library

// Logger setup
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => logger.info("Connected to MongoDB"))
  .catch((err) => logger.error("MongoDB connection error:", err));

// WebSocket server setup
const wss = new WebSocket.Server({ port: 8081 }, () => {
  logger.info("WebSocket server running on ws://localhost:8081");
});

// UUID Maps for tracking active sessions and connections
const activeSessions = new Map();

// Initialize shared state from the database
const initializeSharedState = async () => {
  try {
    const state = await SharedState.findOne();
    if (!state) {
      // Initialize state in DB if it doesn't exist
      const newState = new SharedState({ documents: {} });
      await newState.save();
      logger.info("Initialized new shared state in the database.");
    }
  } catch (error) {
    logger.error("Error initializing shared state:", error);
  }
};

// Call initialize function to ensure shared state exists
initializeSharedState();

// WebSocket connection handling
wss.on('connection', (ws, req) => {
  const urlParams = new URLSearchParams(req.url.split('?')[1]);
  const sessionId = urlParams.get('session') || uuidv4(); // Get session ID from URL or generate a new one

  // Initialize session if it's a new one
  if (!activeSessions.has(sessionId)) {
    activeSessions.set(sessionId, new Map()); // Store a new Map for each session
    logger.info(`Created new session: ${sessionId}`);
  }

  // Store the connection for this session
  const clientId = uuidv4(); // Unique client ID
  activeSessions.get(sessionId).set(clientId, ws);
  logger.info(`New client connected: ${clientId} to session: ${sessionId}`);

  // Send initial message to the client (optional)
  ws.send(JSON.stringify({
    type: 'session_info',
    payload: { sessionId, clientId },
  }));

  // Handle incoming messages from clients
  ws.on('message', async (message) => {
    try {
      const parsedMessage = JSON.parse(message);
      const { type, payload } = parsedMessage;

      switch (type) {
        case 'update_document':
          await handleDocumentUpdate(payload, sessionId);
          broadcastToSession(sessionId, { type: 'document_update', payload });
          break;
        case 'user_joined':
          logger.info(`User joined: ${payload.username} in session ${sessionId}`);
          broadcastToSession(sessionId, { type: 'user_joined', payload });
          break;
        default:
          logger.warn(`Unknown message type: ${type}`);
      }
    } catch (error) {
      logger.error("Error processing message:", error);
    }
  });

  // Handle WebSocket close
  ws.on('close', () => {
    activeSessions.get(sessionId).delete(clientId);
    logger.info(`Client disconnected: ${clientId} from session: ${sessionId}`);
    // If no more clients in the session, remove the session
    if (activeSessions.get(sessionId).size === 0) {
      activeSessions.delete(sessionId);
      logger.info(`Session ${sessionId} is now empty and removed.`);
    }
  });
});

// Broadcast to all clients in a specific session
const broadcastToSession = (sessionId, message) => {
  const session = activeSessions.get(sessionId);
  if (session) {
    const messageString = JSON.stringify(message);
    session.forEach((ws) => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(messageString);
      }
    });
  }
};

// Handle updating the document in the database
const handleDocumentUpdate = async (payload, sessionId) => {
  const { docId, content } = payload;

  try {
    const updatedDocument = await SharedState.findOneAndUpdate(
      { 'documents.docId': docId },
      { $set: { 'documents.$.content': content } },
      { new: true, upsert: true }
    );
    logger.info("Document updated in DB:", updatedDocument);
  } catch (error) {
    logger.error("Error updating document in DB:", error);
  }
};

// Handle graceful shutdown and cleanup
process.on('SIGINT', () => {
  wss.close(() => {
    logger.info("WebSocket server closed.");
    mongoose.disconnect().then(() => {
      logger.info("MongoDB disconnected.");
      process.exit(0);
    });
  });
});
