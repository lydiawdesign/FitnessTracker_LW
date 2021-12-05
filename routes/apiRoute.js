const Workout = require("../models/workoutModel");
const router = require('express').Router();
const mongoose = require("mongoose");

// create a new workout
router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
//   router.post("/api/transaction/bulk", ({ body }, res) => {
//     Transaction.insertMany(body)
//       .then(dbTransaction => {
//         res.json(dbTransaction);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });
  
//   router.get("/api/transaction", (req, res) => {
//     Transaction.find({})
//       .sort({ date: -1 })
//       .then(dbTransaction => {
//         res.json(dbTransaction);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

module.exports = router;