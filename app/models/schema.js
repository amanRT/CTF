const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  teamname: {
    type: String,
    required: true,
  },

  leadername: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  player2: {
    type: String,
  },
  player3: {
    type: String,
  },

  score: {
    type: Number,
    default: 0,
  },
  scorearr: [{ type: Number }],
  questionArr: [{ type: Number }],
  is_Selected: {
    type: Boolean,
    default: false,
  },
  lastUpdated: {
    type: String,
    default: () => {
      const timestampInMilliseconds = Date.now();
      const date = new Date(timestampInMilliseconds);
      const hours = ("0" + date.getHours()).slice(-2);
      const minutes = ("0" + date.getMinutes()).slice(-2);
      return `${hours}:${minutes}`;
    },
  },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = {
  UserModel,
};
