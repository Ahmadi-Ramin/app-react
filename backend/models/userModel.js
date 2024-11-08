const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
});

const Users = model("User", userSchema);
module.exports = Users;