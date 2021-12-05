const Workout = require("../models/workoutModel.js");
const router = require('express').Router();

// get previous workouts
// router.get("/api/workouts", (req, res) => {
//   db.Workout.find({})
//   .then(Workout => {
//     Workout.forEach(Workout => {
//       const total = 0;
//       Workout.exercises.forEach (e => {total += e.duration;});
//       Workout.totalDuration = total;
//     })
//     res.json(Workout);
//   })
//   .catch(err => {
//      res.status(400).json(err);
//   });
// });

// create a new workout
router.post("/", ({body}, res) => {
  db.Workout.create(body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

// add exercises

// get workout summary 
  router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(Workout => {
        res.json(Workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;