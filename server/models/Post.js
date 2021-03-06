const mongoose = require("mongoose");
const postschema = mongoose.Schema({
  username: String,

  postpost: String,
});
module.exports = mongoose.model("post", postschema);
