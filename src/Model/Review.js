const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Review schema
 let Feedback = new Schema({
 name: {
 type: String
 },
 destination: {
 type: String
 },
 review:
 {
	 type: String
 },
 date: {
 type: Date
}
},{
 collection: 'feedbacks'
 });
 
 module.exports = mongoose.model('Feedback', Feedback);