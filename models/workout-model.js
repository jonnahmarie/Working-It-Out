const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
      name: {
          type: String,
          trim: true,
          required: "Please enter the name of your exercise."
      },
      type: {
          type: String,
          trim: true,
          required: "Please enter the type of exercise you're doing."
      },
      weight: {
          type: Number,
          trim: true,
          required: "Please enter the amount of weight you will/have use/d."
      },
      sets: {
          type: Number,
          trim: true,
          required: "Please enter the amount of sets you will/have do/done."
      },
      reps: {
          type: Number,
          trim: true,
          required: "Please enter the amount of reps you will/have do/done."
      },
      duration: {
          type: Number,
          trim: true,
          required: "Please enter the duration of your exercise (in minutes)."
      }
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;