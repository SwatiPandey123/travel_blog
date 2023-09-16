import React, { Component } from 'react';
 import axios from 'axios';
 import { Table, Button } from 'react-bootstrap';
 // To use routing functionalities
 import { Link } from 'react-router-dom';
 //import 'bootstrap/dist/css/bootstrap.min.css';
 import '../Stylesheets/table.css';
 
 class Review_view extends Component {
 
 constructor(props) {
 super(props);

 this.state = {
 reviews: []
 }
 
 }
 
 componentDidMount = () => {
 this.getReviewList();
 }
 
 // To get all the employees
 getReviewList() {
 axios.get('http://localhost:5000/reviews')
 .then((response) => {
 console.log(response);
 this.setState({
 reviews: response.data
 });
 })
 .catch((error) => {
 console.log(error);
 })
 }
 
 
 render() {
 const { reviews } = this.state;
console.log(reviews);
 return (
 
 
 
 <div class="table-responsive-sm">

 <br/>
 <br/>
 <br/>
 
  <button class="btn">Reviews</button>
  <br/>
 <br/>
 <br/>
 <Table striped bordered hover variant="dark">
 <thead>
 <tr >
 <th>SNo</th>
 <th>Review By</th>
 <th>Date</th>
 <th>Destination</th>
 <th>Review</th>
 </tr>
 </thead>
 <tbody>
 {
 reviews && reviews.map((review, i) => {
 return (
 <tr key={i}>
 <td>{i}</td>
 <td>{review.name}</td>
 <td>{review.date}</td>
 <td>{review.destination}</td>
 <td>{review.review}</td>
 
 
 </tr>
 )
 })
 }
 </tbody>
 </Table>
 </div>
 );
 } 
 }
 
 export default Review_view;