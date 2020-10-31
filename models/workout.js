const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true
       
    },
    type: {
        type: String,
        trim: true
       
    },
    weight: {
        type: Number
        
    },
    sets: {
        type: Number
        
    },
    reps: {
        type: Number
       
    },
    duration: {
        type: Number
        
    },
})

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout