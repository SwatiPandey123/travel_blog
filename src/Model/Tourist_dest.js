const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 
 let Tourist_dest = new Schema({
 dest_id: {
 type: Number
 },
 dest_name: {
 type: String
 },
 dest_type: {
 type: String
 },
 dest_ad: {
 type: String
 },
  dest_city: {
 type: String
 },
 dest_pin: {
 type: Number
 },
 dest_desc: {
 type: String
 }
 
 },
 {
 collection: 'tourist_dests'
 });
 
 module.exports = mongoose.model('Tourist_dest', Tourist_dest);