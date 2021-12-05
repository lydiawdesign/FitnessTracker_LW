const Workout = require("../models/workoutModel.js");
const router = require('express').Router();
// const mongoose = require("mongoose");

// create a new workout
router.post("/", ({body}, res) => {
    Workout.create(body)
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  // router.post("/api/transaction/bulk", ({ body }, res) => {
  //   Transaction.insertMany(body)
  //     .then(dbTransaction => {
  //       res.json(dbTransaction);
  //     })
  //     .catch(err => {
  //       res.status(400).json(err);
  //     });
  // });
  
  router.get("/", (req, res) => {
    Workout.find({})
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;