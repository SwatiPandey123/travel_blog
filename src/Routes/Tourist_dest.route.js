// Importing important packages
 const express = require('express');
 // Using express and routes
 const app = express();
 const tourist_destRoute = express.Router();
 
 // Tourist module which is required and imported
 let tourist_destModel = require('../Model/Tourist_dest');
 
 // To Get List Of Tourists
 tourist_destRoute.route('/').get(function (req, res) {
 tourist_destModel.find(function (err, tourist_dest) {
 if (err) {
 console.log(err);
 }
 else {
 res.json(tourist_dest);

 }
 });
 
 });

 module.exports = tourist_destRoute;