const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const users = require('./api/routes/users');
const form = require('./api/routes/form');
const portal = require('./api/routes/portal');
const passport = require('passport');

const app = express();

// passport requirement
require('./config/passport-conf')

// Bodyparser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// DB Config (MongoDB)
const db = require('./config/keys').mongoURI

// Connect to Mongo

mongoose.connect(db, { useCreateIndex: true,useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Routes
app.use('/api/users', users)
app.use('/api/form', form)
app.use('/api/portal',portal)


// Serve Static assets if in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.join('client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client','build', 'index.html'));
    })
}

// Error catching middleware
app.use(function(err,res,req,next){
    console.log(err)
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`)); 