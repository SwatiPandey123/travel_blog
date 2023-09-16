// Importing important packages
 const express = require('express');
 // Using express and routes
 const app = express();
 const cityRoute = express.Router();
 
 // City module which is required and imported
 let cityModel = require('../Model/Tourist_dest');
 
 // To Get List Of Cities
 cityRoute.route('/').get(function (req, res) {
 cityModel.find({'dest_type':'City'},function (err, city) {
 if (err) {
 console.log(err);
 }
 else {
 res.json(city);

 }
 });
 
 });
 
 module.exports = cityRoute;