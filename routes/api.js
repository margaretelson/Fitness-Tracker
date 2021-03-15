const db = require("../models");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
    });
  });

  app.put("/api/workouts/:id", ({ params, body }, res) => {
    db.Workout.findByIdAndUpdate(
        params.id, 
        {$push:{exercises: body} }, 
        { new: true, runValidators: true }
    ).then(data => res.json(data))
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then((newWorkout) => {
      res.json(newWorkout);
    });
  });
};
