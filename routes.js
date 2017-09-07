const express = require('express');
const router = express.Router();
const models = require('./models');

// Index Action
router.route('/activities')
  .get((req, res) => {
    models.Activity.findAll().then(function(err, activity) {
      if (err) {
        res.send(err)
      } else {
        res.json({activity: exercise})
        console.log(activity);
      }
    });
  });

// Post a new activity
router.route('/activities')
  .post((req, res) => {
    let newExercise = {
      exercise: req.body.exercise,
      amount: req.body.amount
    };
    models.Activity.create(newExercise).then(function(err, activity) {
      if (err) {
        res.send(err)
      } else {
        res.json({message: "You successfully added a new exercise"})
      }
    });
  });

// Get a specific activity
router.route('/activities/:id')
  .get((req, res) => {
    let id = req.params.id;
    models.Activity.findById(id).then(function(err, activity) {
      if (err) {
        res.send(err)
      } else {
        res.json({activity});
        console.log(activity);
      }
    })
  });



// PUT /activities/:id
// Update one activity I am tracking, changing attributes such as name or type. Does not allow for changing tracked data.

router.route('/activities/:id/:exercise')
  .put((req, res) => {
    models.Activity.update({
      exercise: req.params.exercise
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(err, activity) {
      if (err) {
        res.send(err)
      } else {
        res.json({activity})
      }
    });
  });

// Delete 1 activity Works!!
router.route('/activities/:id')
  .delete((req ,res) => {
    models.Activity.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(act) {
      res.json(act);
    });
  });

  // Delete all for a certain date
  // switched a req.params for req.query just make sure the http request is a delete for
  // /stats?key=value
  router.route('/stats')
    .delete((req ,res) => {
      models.Activity.destroy({
        where: req.query
      }).then(function(act) {
        res.json(act);
      });
    });


  // Post a new activity where User Specifies date
  router.route('/activities')
    .post((req, res) => {
      let newExercise = {
        exercise: req.body.exercise,
        amount: req.body.amount,
        date: req.body.date
      };
      models.Activity.create(newExercise).then(function(err, activity) {
        if (err) {
          res.send(err)
        } else {
          res.json({message: "You successfully added a new exercise"})
        }
      });
    });




router.use('/api', router);
module.exports = router;
