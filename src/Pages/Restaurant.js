import React, { Component } from 'react';
 import axios from 'axios';
 import { Table, Button } from 'react-bootstrap';
 // To use routing functionalities
 import { Link } from 'react-router-dom';
 //import 'bootstrap/dist/css/bootstrap.min.css';
 import '../Stylesheets/table.css';
 import img1 from '../Images/cinnamon.jpg';
 import img2 from '../Images/darikhana.jpg';
 import img3 from '../Images/suvarna_mahal.jpg';
 import img4 from '../Images/risala.jpg';
 import img5 from '../Images/sunset_pavilion.jpg';
 
 class Restaurant extends Component {
 
 constructor(props) {
 super(props);

 this.state = {
 restaurants: []
 }
 
 }
 
 componentDidMount = () => {
 this.getRestaurantList();
 }
 
 // To get all the restaurants
 getRestaurantList() {
 axios.get('http://localhost:4000/restaurants')
 .then((response) => {
 console.log(response);
 this.setState({
 restaurants: response.data
 });
 })
 .catch((error) => {
 console.log(error);
 })
 }
 
 
 render() {
 const { restaurants } = this.state;
console.log(restaurants);
 return (
 
 <div class="table-responsive-sm">
 <br/>
 <br/>
 <br/>
  <button class="btn">Best Restaurants in Rajasthan</button>
 <br/>
 <br/>
 <br/>
 <Table striped bordered hover variant="dark">
 <thead>
 <tr >
 <th>Sl No</th>
 <th>Name</th>
 <th>Type</th>
 <th>Address</th>
 <th>Pincode</th>
 <th>City</th>
 <th>Picture</th>
 <th>Description</th>
 </tr>
 </thead>
 <tbody>
 {
 restaurants && restaurants.map((restaurant, i) => {
 return (
 <tr key={i}>
 <td>{i}</td>
 <td>{restaurant.dest_name}</td>
 <td>{restaurant.dest_type}</td>
 <td>{restaurant.dest_ad}</td>
 <td>{restaurant.dest_pin}</td>
 <td>{restaurant.dest_city}</td>
  <td><img src={[img1,img2, img3, img4, img5][i]}width="400px" height="400px"/></td>
 <td>{restaurant.dest_desc}</td>
 
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
 
 export default Restaurant;