//Setup
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/queue', {
  useNewUrlParser: true
});



//Make models
const taSchema = new mongoose.Schema({
  id: String,
  name: String,
  zoom_link: String
})
const TA = mongoose.model('TA', taSchema);

const helpSessionSchema = new mongoose.Schema({
  id: String,
  name: String,
  ta: [taSchema],
  question: String,
  location: String
})
const HelpSession = new mongoose.model('HelpSession', helpSessionSchema);



//Make endpoints
app.put('/session/join.php/', async (req, res) => {
  try {
    console.log("Joining a session!");
    // let session = await HelpSession.findOne({id: req.params.student.id});
    // let ta = await TA.findOne({id: req.params.taId});
    // session.ta = ta;
    // session.markModified('ta');
    // ta.save();
    // res.sendStatus(200);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
});



//Finally, start the server
app.listen(3001, () => console.log('Server listening on port 3001!'));
