const express = require("express");

// storyRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /stories.
const storyRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the stories.
storyRoutes.route("/stories").get(function (req, res) {
  let db_connect = dbo.getDb("storyDatabase");
  db_connect
    .collection("stories")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

storyRoutes.route("/space").get(function (req, res) {
  let db_connect = dbo.getDb("storyDatabase");
  db_connect
    .collection("space")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

storyRoutes.route("/fairytale").get(function (req, res) {
  let db_connect = dbo.getDb("storyDatabase");
  db_connect
    .collection("fairytale")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single story by id
storyRoutes.route("/stories/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("stories").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = storyRoutes;
