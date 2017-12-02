var express       = require('express');
var app           = express();
var myRouter      = express.Router();
var jwt           = require('express-jwt');
var multer        = require('multer');
var path          = require('path');

var User          = require('../models/User'); //For news letter

module.exports = function (app, passport) {

    app.get('/', function(req, res){
        res.render('index');            
    });
};

function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}