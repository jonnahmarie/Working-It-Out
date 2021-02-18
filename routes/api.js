const router = require("express").Router();
const Workout = require("../models/workout-model.js");

router.get("/api/workout", (req, res) =>{
    Workout.find({})
        .sort({day:1})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/api/workout", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workout:id", (req, res) => {
    Workout.update({
        _id: req.params.id
    }, {
        $set: {
            exercises: req.body
        }
    }).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workout/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

// router.post("/api/workout/bulk", ({ body }, res) => {
//   Workout.insertMany(body)
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/workout", (req, res) => {
//   Workout.find({})
//     .sort({ date: -1 })
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;
