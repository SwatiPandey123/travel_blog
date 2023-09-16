// Importing important packages
 const express = require('express');
 // Using express and routes
 const app = express();
 const desertRoute = express.Router();
 
 // Desert module which is required and imported
 let desertModel = require('../Model/Tourist_dest');
 
 // To Get List Of Deserts
 desertRoute.route('/').get(function (req, res) {
 desertModel.find({'dest_type':'Desert'},function (err, desert) {
 if (err) {
 console.log(err);
 }
 else {
 res.json(desert);

 }
 });
 
 });
 
 module.exports = desertRoute;