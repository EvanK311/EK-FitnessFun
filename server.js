const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

db.fitnessplan.create({ name: "fitnessplan" })
    .then(dbfitnessplan => {
        console.log(dbfitnessplan);
    })
    .catch(({ message }) => {
        console.log(message);
    });

app.get("/workout", (req, res) => {
    db.workout.find({})
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.json(err);
        });
});

app.get("/fitnessplan", (req, res) => {
    db.fitnessplan.find({})
        .then(dbfitnessplan => {
            res.json(dbfitnessplan);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post("/submit", ({ body }, res) => {
    db.workout.create(body)
      .then(({ _id }) => db.workout.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
