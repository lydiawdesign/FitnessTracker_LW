const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
      },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: 'You must enter a type to proceed',
        },
        name: {
          type: String,
          trim: true,
          required: 'You must enter a name to proceed',
        },
      },
    ]
  });
  
  const Workout = mongoose.model("workout", workoutSchema);
  
  module.exports = Workout;