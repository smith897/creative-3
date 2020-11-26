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


//FIXME working on
app.put('/session/create.php', async (req, res) => {
  try {
    //FIXME for when you add to database
    console.log("Putting something in the db");
    const session = new HelpSession({
      id: "Test",
      name: "Test",
      ta: null,
      question: "Test",
      location: "Test"
    });
    await session.save();
    console.log("Did it!");
    res.send(session);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
})

//Make endpoints
app.put('/session/join.php/', async (req, res) => {
  try {
    console.log("Joining a session!");
    console.log(req.body);
    let session = await HelpSession.findOne({id: "Test"});
    let ta = await TA.findOne({id: req.body.TaID}); //Real one

    //TA database won't be altered through this website, the back end will just
    //get information from it, so for this project I'll just use a dummy TA
    let ta = new TA({
      id: "ROKU",
      name: "Roku",
      zoom_link: "join.me"
    })
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
