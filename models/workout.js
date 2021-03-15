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
        type: String,
        weight: Number,
        sets: Number,
        reps: Number,
        duration: Number,
        distance: Number
    }] 
})

const workout = mongoose.model("workout", workoutSchema)
module.exports = workout;