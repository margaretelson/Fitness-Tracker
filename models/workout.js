const mongoose = require('mongoose');

const Schema = mongoose.Schema

const workoutSchema = new Schema({
   day: {
       type: Date, 
       default: () => new Date()
   },
    exercises: [{
        name: {
            type: String,
            require: true,
            trim: true,
        },
        type: {type: String},
        weight: Number,
        sets: Number,
        reps: Number,
        duration: Number,
        distance: Number
    }],
    // totalDuration: {
    //     type: Number,
    //     default: 0
    // }   
},
    {
        toJSON: {
        virtuals: true
        }
    } 
);

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
});

const workout = mongoose.model("workout", workoutSchema)
module.exports = workout;