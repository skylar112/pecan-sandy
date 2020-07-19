const router = require("express").Router();
const Workout = require("../models/workouts");

router.post("/api/workout", (req, res) => {
  Workout.create({})
    .then((dbWorkout) => {
      res.send(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workout/:id", (req, res) => {
  Workout.findOneAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true} )
    .then((dbWorkout) => {
      res.send(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workout/range", (req, res) => {
    Workout.find({}).limit(7)
      .then((dbWorkouts) => {
        res.send(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  router.get("/api/workout", (req, res) => {
    Workout.find()
      .then((dbWorkouts) => {
        res.send(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  router.delete("/api/workouts", ({body}, res) => {
    Workout.findByIdAndDelete(body.id)
      .then(() => {
        res.json(true)
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  


//comeback to make routes
module.exports = router;
