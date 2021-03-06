const express = require("express");
const env = require("dotenv");
env.config();
const cors = require("cors");

const mongoose = require("mongoose");

const app = express();
app.use(cors());

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
app.use(express.json());
db.once("open", () => {
  console.log("db connected");
});

app.use("/api", require("./routes/Post"));

app.listen(4000, () => {
  console.log("server running on 4000");
});
