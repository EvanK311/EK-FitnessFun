const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessplanSchema = new Schema({
    name: {
        type: String,

    },
    workout: [
        {
            type: Schema.Types.ObjectId,
            ref: "workout"
        }
    ]
})

const fitnessplan = mongoose.model("fitnessplan", fitnessplanSchema);

module.exports = fitnessplan;