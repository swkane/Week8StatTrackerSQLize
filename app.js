const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const models = require('./models');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// models.Activity.create({
//   exercise: 'walk',
//   amount: 2,
//   date: '09-07-2017'
// }).then(function() {
//   return models.Activity.findAll();
// }).then(function(act){
//   console.log(act.map(function(act) {
//     return act.exercise;
//   }));
// });

app.use(routes);

app.listen(3000, () => {console.log("You are running a stat Tracker")});
