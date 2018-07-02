// module imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
// var user = require('./user');

// from signin tutorial
app.post('/signin', function (req, res) {
    var user_name=req.body.email;
    var password=req.body.password;
    if(user_name=='admin' && password=='admin'){
        res.send('success');
    }
    else{
      res.send('Failure');
    }
  })

  app.post('/signup', function (req, res) {
    var name=req.body.name;
    var email=req.body.email;
    var password=req.body.password;
   
    if(name && email && password){
        user.signup(name, email, password)
    }
    else{
      res.send('Failure');
    }
  })


  
// end of signin tutorial

app.use(express.static(path.join(__dirname, 'client/build')));

// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

module.exports = app;