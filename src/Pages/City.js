import React, { Component } from 'react';
 import axios from 'axios';
 import { Table, Button } from 'react-bootstrap';
 // To use routing functionalities
 import { Link } from 'react-router-dom';
 //import 'bootstrap/dist/css/bootstrap.min.css';
 import '../Stylesheets/table.css';
 import img1 from '../Images/bikaner.jpg';
 import img2 from '../Images/jaipur.jpg';
 import img3 from '../Images/jodhpur.jpg';
 import img4 from '../Images/udaipur.jpg';
 import img5 from '../Images/mount_abu.jpg';
 
 class City extends Component {
 
 constructor(props) {
 super(props);

 this.state = {
 cities: []
 }
 
 }
 
 componentDidMount = () => {
 this.getCityList();
 }
 
 
 getCityList() {
 axios.get('http://localhost:4000/cities')
 .then((response) => {
 console.log(response);
 this.setState({
 cities: response.data
 });
 })
 .catch((error) => {
 console.log(error);
 })
 }
 
 
 render() {
 const { cities } = this.state;
console.log(cities);
 return (
 
 
 
 <div class="table-responsive-sm">

 <br/>
 <br/>
 <br/>
 
  <button class="btn">Best Cities in Rajasthan</button>
  <br/>
 <br/>
 <br/>
 <Table striped bordered hover variant="dark">
 <thead>
 <tr >
 <th>SNo</th>
 <th>Name</th>
 <th>Type</th>
 <th>Picture</th>
 <th>Description</th>
 </tr>
 </thead>
 <tbody>
 {
 cities && cities.map((city, i) => {
 return (
 <tr key={i}>
 <td>{i}</td>
 <td>{city.dest_name}</td>
 <td>{city.dest_type}</td>
 <td><img src={[img1,img2, img3, img4, img5][i]}width="400px" height="400px"/></td>
 <td>{city.dest_desc}</td>
 
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
 
 export default City;