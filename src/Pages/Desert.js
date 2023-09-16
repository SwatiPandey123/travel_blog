import React, { Component } from 'react';
 import axios from 'axios';
 import { Table, Button } from 'react-bootstrap';
 // To use routing functionalities
 import { Link } from 'react-router-dom';
 //import 'bootstrap/dist/css/bootstrap.min.css';
 import '../Stylesheets/table.css';
 import img1 from '../Images/mahabar-sand-dunes.jpg';
 import img2 from '../Images/Khuri-Sand-Dunes.jpg';
 import img3 from '../Images/Osian-sand-dunes.jpg';
 
 
 class Desert extends Component {
 
 constructor(props) {
 super(props);

 this.state = {
 deserts: []
 }
 
 }
 
 componentDidMount = () => {
 this.getDesertList();
 }
 
 
 getDesertList() {
 axios.get('http://localhost:4000/deserts')
 .then((response) => {
 console.log(response);
 this.setState({
 deserts: response.data
 });
 })
 .catch((error) => {
 console.log(error);
 })
 }
 
 
 render() {
 const { deserts } = this.state;
console.log(deserts);
 return (
 
 <div class="table-responsive-sm">
 <br/>
 <br/>
 <br/>
  <button class="btn">Best Deserts in Rajasthan</button>
 <br/>
 <br/>
 <br/>
 <Table striped bordered hover variant="dark">
 <thead>
 <tr >
 <th>SNo</th>
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
 deserts && deserts.map((desert, i) => {
 return (
 <tr key={i}>
 <td>{i}</td>
 <td>{desert.dest_name}</td>
 <td>{desert.dest_type}</td>
 <td>{desert.dest_ad}</td>
 <td>{desert.dest_pin}</td>
 <td>{desert.dest_city}</td>
  <td><img src={[img1,img2, img3][i]}width="400px" height="400px"/></td>
 <td>{desert.dest_desc}</td>
 
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
 
 export default Desert;