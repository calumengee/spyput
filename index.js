require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));
mongoose.connect('mongodb://localhost:27017/morseDB', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);
const morseSchema = new mongoose.Schema ({
  morse: String
});

app.get('/', function(req, res){
res.render('index');
})

app.listen(process.env.PORT || 3000, function(){
console.log('Port is running...');
})

app.post('/', function(req, res){
  const msg = 'This content could be sensitive. For your protection, please discard after each use. {START} '+req.body.textarea+' {FINISH}';
  res.send(msg);
})
