 
 // Importing important packages
 const express = require('express');
 
 // Using express and routes
 const app = express();
 const feedbackRoute = express.Router();
 
 // Review module which is required and imported
 let feedbackModel = require('../Model/Review');
 
 // To Add New Review
 feedbackRoute.route('/addFeedback').post(function (req, res) {
 let feedback = new feedbackModel(req.body);
 feedback.save()
 .then(game => {
 res.status(200).json({ 'feedback': 'Feedback Added Successfully' });
 })
 .catch(err => {
 res.status(400).send("Something Went Wrong");
 });
 });

 module.exports = feedbackRoute;