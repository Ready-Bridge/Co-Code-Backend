const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    maxlegth: 15,
    unique: true,
  },
  password: {
    type: String,
    maxlength: 100, // bcrypt로 암호화이슈 때문에 늘려놓음
  },
  nickname: {
    type: String,
    maxlength: 45,
    unique: true,
  },
  email: {
    type: String,
    maxlength: 45,
    unique: true,
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = { userModel };
