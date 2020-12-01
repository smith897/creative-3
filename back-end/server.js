//Setup
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/queue', {
  useNewUrlParser: true
});



//Models
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



//Endpoints
//Delete operation
app.delete('/api/session/leave.php/:id', async (req, res) => {
  try {
    await HelpSession.deleteOne({
      id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

//Read operation
app.get('/api/foobar/get-public-sessions.php', async (req, res) => {
  try {
    let sessions = await HelpSession.find();
    res.send(sessions);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Create operation
app.put('/api/session/create.php', async (req, res) => {
  try {
    const session = new HelpSession({
      id: req.body.id,
      name: req.body.name,
      ta: null,
      question: req.body.question,
      location: req.body.location
    });
    await session.save();
    res.send(session);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
})

//Update operation
app.put('/api/session/join.php/', async (req, res) => {
  try {
    let session = await HelpSession.findOne({id: req.body.StudentID});

    //TA database won't be altered through this website, the back end will just
    //get information from it, so for this project I'll just use a dummy TA
    let ta = new TA({
      id: req.body.TaID,
      name: "TestTA",
      zoom_link: "join.me"
    })
    //let ta = await TA.findOne({id: req.body.TaID}); //Real one
    ta.save();

    session.ta = ta;
    session.markModified('ta');
    session.save();
    res.sendStatus(200);

  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Finally, start the server
app.listen(3001, () => console.log('Server listening on port 3001!'));
