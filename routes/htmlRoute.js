const router = require("express").Router();
const Workout = require("../models/workoutModel.js");

//get the homepage
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//get the exercise page
router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//get the stats page
router.get('/stats', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;