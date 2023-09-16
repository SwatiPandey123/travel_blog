// Importing important packages
 const express = require('express');
 // Using express and routes
 const app = express();
 const restaurantRoute = express.Router();
 
 // Restaurant module which is required and imported
 let restaurantModel = require('C:/Users/anish/travel-website/src/Model/Tourist_dest');
 
 // To Get List Of Restaurants
 restaurantRoute.route('/').get(function (req, res) {
 restaurantModel.find({'dest_type':'Restaurant'},function (err, restaurant) {
 if (err) {
 console.log(err);
 }
 else {
 res.json(restaurant);

 }
 });
 
 });
 
 module.exports = restaurantRoute;