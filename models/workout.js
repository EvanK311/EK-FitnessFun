const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "You must enter a name of the workout."
    },
    type: {
        type: String,
        trim: true,
        required: "Please input the type of workout."
    },
    weight: {
        type: Number,
        required: "Please input a used weight."
    },
    sets: {
        type: Number,
        required: "Please input a number of sets."
    },
    reps: {
        type: Number,
        required: "Please input a number of reps."
    },
    duration: {
        type: Number,
        required: "Please input a duration length."
    },
})