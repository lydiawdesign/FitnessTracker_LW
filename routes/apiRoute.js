const Workout = require("../models/workoutModel");
const router = require('express').Router();

// get previous workouts
router.get("/api/workouts", (req, res) => {
 Workout.find({})
  .then(Workout => {
    Workout.forEach(Workout => {
      const total = 0;
      Workout.exercises.forEach (e => {total += e.duration;});
      Workout.totalDuration = total;
    })
    res.json(Workout);
  })
  .catch(err => {
     res.status(400).json(err);
  });
});

// create a new workout
router.post("/", ({body}, res) => {
  Workout.create(body)
    .then(Workout => {
      res.json(Workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

// add exercises
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true, runValidators: true })
  .then(Workout => {
    res.json(Workout);
  }).catch(err => {
    res.json(err);
  });
});

// get workout summary 
  router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([{
      $addfields: {
        totalDuration: {$sum: '$exercises.duration'},
        totalWeight: {$sum:'$exercises.weight'},
      }
    }])
    .limit(7)
    .then(Workout => {
      res.json(Workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

module.exports = router;