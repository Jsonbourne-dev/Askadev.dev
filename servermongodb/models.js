const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  uuid: { type: String, required: true },
  user: { type: String, default: '' },
  answerMessage: { type: String, required: true },
  votes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const UserSchema = new mongoose.Schema({
  username: { type: String, default: '' },
  email: { type: String, default: '', unique: true },
  password: { type: String, default: '' },
  token: { type: String, default: '' },
  profilePic: { type: String, default: '' },
  isSignedIn: { type: Boolean, default: false },
  uuid: { type: String, default: '', unique: true },
});

const QuestionSchema = new mongoose.Schema({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  username: { type: String, default: '' },
  userUuid: { type: String, required: true },
  flags: { type: [String], default: [] },
  code: { type: String, default: '' },
  views: { type: Number, default: 0 },
  votes: { type: Number, default: 0 },
  answers: { type: [AnswerSchema], default: [] },
  createdAt: { type: Date, default: Date.now },
  uuid: { type: String, default: '', unique: true },
});

// SharedState schema for collaborative documents or shared content
const SharedStateSchema = new mongoose.Schema({
  documents: [
    {
      docId: { type: String, required: true, unique: true },
      content: { type: String, required: true },
      lastUpdatedBy: { type: String, default: '' },  // User ID or username
      lastUpdatedAt: { type: Date, default: Date.now },
    }
  ]
});

const User = mongoose.model('User', UserSchema);
const Question = mongoose.model('Question', QuestionSchema);
const SharedState = mongoose.model('SharedState', SharedStateSchema);

module.exports = {
  User,
  Question,
  SharedState,
};
