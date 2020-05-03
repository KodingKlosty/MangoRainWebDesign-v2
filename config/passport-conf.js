const passport = require('passport')
const LocalStrategy = require('passport-local')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = require('../api/models/User');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
            User.findOne({username: username})
                .then(user => {
                    if(!user) {
                        return done(null, false, {msg: "Invalid Login Information"});
                    }

                    //match password with bcrypt
                    bcrypt.compare(password,user.password, (err, isMatch) => {
                        if(err) throw err;

                        if(isMatch){
                            return done(null, user)
                        }
                        else{
                            return done (null, false, {msg: 'Please check your password and try again'})
                        }
                    })
                })
                .catch(err => console.log(err))
        })
    ); // end of LocalStrategy 

    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
      
      passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
          done(err, user);
        });
      });
}