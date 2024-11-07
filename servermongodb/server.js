require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { User, Question } = require('./models'); 
const winston = require('winston');

const app = express();
app.use(bodyParser.json());
app.use(cors()); 

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
  ],
});

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => logger.info("Connected to MongoDB"))
  .catch(err => logger.error("MongoDB connection error:", err));

const userUUIDMap = new Map();
const questionUUIDMap = new Map();

const initializeUUIDMaps = async () => {
  try {
    const users = await User.find({}, 'uuid');
    users.forEach(user => userUUIDMap.set(user.uuid, true));

    const questions = await Question.find({}, 'uuid');
    questions.forEach(question => questionUUIDMap.set(question.uuid, true));

    logger.info("Existing Users from DB:", users);
    logger.info("Existing Questions from DB:", questions);
  } catch (error) {
    logger.error("Error initializing UUID maps:", error);
  }
};

initializeUUIDMaps();


const validateQuestionData = (data) => {
  const { title, username, uuid, answers } = data;
  return (
    title &&
    username &&
    uuid &&
    Array.isArray(answers) &&
    answers.every(answer => validateAnswerData(answer)) 
  );
};

const validateAnswerData = (answer) => {
  return true;
};


const errorHandler = (err, req, res, next) => {
  logger.error(err.message, err); 
  res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
};

app.post('/api/updatequestions', async (req, res, next) => {
  const data = req.body;

  logger.info("Received data for updating/replacing question:", JSON.stringify(data, null, 2));

  if (!validateQuestionData(data)) {
    return next({ status: 400, message: "Invalid question data" });
  }

  const { uuid } = data;

  try {
    const updatedQuestion = await Question.findOneAndReplace({ uuid }, data, { new: true, upsert: true });

    if (updatedQuestion) {
      logger.info("Question replaced successfully:", updatedQuestion);
      res.status(200).json({ message: "Question replaced successfully", question: updatedQuestion });
    } else {
      logger.info("New question added successfully:", data);
      res.status(201).json({ message: "New question added successfully", question: data });
    }
  } catch (error) {
    logger.error("Error updating or replacing question:", error);
    next({ status: 500, message: "Error updating or replacing question" });
  }
});

app.post('/api/questions', async (req, res, next) => {
  const data = req.body;

  if (!validateQuestionData(data)) {
    return next({ status: 400, message: "Invalid question data" });
  }

  const { uuid } = data;

  try {
    // Use findOneAndUpdate to upsert (update if exists, insert if not)
    const updatedQuestion = await Question.findOneAndUpdate(
      { uuid },        // Find question by uuid
      data,            // Update with new data
      { new: true, upsert: true } // Options: return updated document and create if not found
    );

    // Logging success
    logger.info("Question added or updated successfully:", updatedQuestion);
    res.status(200).json(updatedQuestion);

  } catch (error) {
    logger.error("Error adding or updating question:", error);
    next({ status: 500, message: "Error adding or updating question" });
  }
});


app.post('/api/users', async (req, res, next) => {
  const data = req.body;

  // Validate required fields: uuid, username, and optional profilePic
  const { uuid, username, profilePic } = data;

  if (!uuid || !username) {
    return next({ status: 400, message: "UUID and Username are required" });
  }

  // Validate the profilePic, if provided
  if (profilePic && typeof profilePic !== 'string') {
    return next({ status: 400, message: "Profile picture must be a valid string (URL or base64)" });
  }

  // Check if user already exists based on uuid
  if (userUUIDMap.has(uuid)) {
    logger.warn(`User with uuid ${uuid} already exists, skipping insertion.`);
    return next({ status: 409, message: "User already exists" });
  }

  logger.info("Received user data:", data);

  try {
    // Create a new User instance with the data
    const newUser = new User({
      uuid,
      username,
      profilePic: profilePic || null, // If no profilePic is provided, store null or a default value
    });

    // Save the new user to the database
    await newUser.save();

    // Add the uuid to the userUUIDMap to prevent future duplicates
    userUUIDMap.set(uuid, true);

    logger.info("User added successfully:", newUser);
    res.status(201).json(newUser);
  } catch (error) {
    logger.error("Error adding user:", error);
    next({ status: 500, message: "Error adding user" });
  }
});


app.get('/api/questions', async (req, res, next) => {
  try {
    const questions = await Question.find(); 
    res.status(200).json(questions);
  } catch (error) {
    logger.error("Error fetching questions:", error);
    next({ status: 500, message: "Error fetching questions" });
  }
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});

