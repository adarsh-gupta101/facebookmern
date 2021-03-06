const express = require("express");
const posts = require("../models/Post");
const router = express.Router();

router.get("/posts", (req, res) => {
  posts.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

router.post("/posts", (req, res) => {
  const body = req.body;
  posts.create(body, (err, data) => {
    if (err) {
      console.log("dberror");
    } else {
      res.send(data);
    }
  });
});
module.exports = router;
