// Importing important packages
 const express = require('express');
 // Using express and routes
 const app = express();
 const viewRoute = express.Router();
 
 // Review module which is required and imported
 let viewModel = require('C:/Users/anish/travel-website/src/Model/Review');
 
 // To Get List Of Reviews
 viewRoute.route('/').get(function (req, res) {
 viewModel.find(function (err, review) {
 if (err) {
 console.log(err);
 }
 else {
 res.json(review);

 }
 });
 
 });
 
 module.exports = viewRoute;