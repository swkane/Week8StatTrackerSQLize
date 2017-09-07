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


router.use('/api', router);
module.exports = router;
