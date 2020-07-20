const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

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
