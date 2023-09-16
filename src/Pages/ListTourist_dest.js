import React, { Component } from 'react';
 import axios from 'axios';
 import { Table, Button } from 'react-bootstrap';
 // To use routing functionalities
 import { Link } from 'react-router-dom';
 //import 'bootstrap/dist/css/bootstrap.min.css';
 import '../Stylesheets/table.css';
 import img1 from '../Images/Hawa-Mahal.jpg';
 import img2 from '../Images/jaisalmer_fort.jpg';
 import img3 from '../Images/ranthambore-national-park.jpg';
 import img4 from '../Images/bikaner.jpg';
 import img5 from '../Images/jaipur.jpg';
 import img6 from '../Images/jodhpur.jpg';
 import img7 from '../Images/udaipur.jpg';
 import img8 from '../Images/mount_abu.jpg';
 import img9 from '../Images/jantar_mantar.jpg';
 import img10 from '../Images/lake-pichola.jpg';
  import img11 from '../Images/cinnamon.jpg';
 import img12 from '../Images/darikhana.jpg';
 import img13 from '../Images/suvarna_mahal.jpg';
 import img14 from '../Images/risala.jpg';
 import img15 from '../Images/sunset_pavilion.jpg';
  import img16 from '../Images/mahabar-sand-dunes.jpg';
 import img17 from '../Images/Khuri-Sand-Dunes.jpg';
 import img18 from '../Images/Osian-sand-dunes.jpg';
 
 
 class ListTourist_dest extends Component {
 
 constructor(props) {
 super(props);

 this.state = {
 tourist_dests: []
 }
 
 }
 
 componentDidMount = () => {
 this.getTourist_destList();
 }
 
 
 getTourist_destList() {
 axios.get('http://localhost:4000/tourist_dests')
 .then((response) => {
 console.log(response);
 this.setState({
 tourist_dests: response.data
 });
 })
 .catch((error) => {
 console.log(error);
 })
 }
 
 
 render() {
 const { tourist_dests } = this.state;
console.log(typeof(tourist_dests));
 return (
 
 <div class="table-responsive-sm">
 <br/>
 <br/>
 <br/>
  <button class="btn">Top Tourist Destinations in Rajasthan</button>
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
 <th>Image</th>
 <th>Description</th>
 <th></th>
 </tr>
 </thead>
 <tbody>
 {
 tourist_dests && tourist_dests.map((tourist_dest, i) => {
 return (
 <tr key={i}>
 <td>{i}</td>
 <td>{tourist_dest.dest_name}</td>
 <td>{tourist_dest.dest_type}</td>
 <td>{tourist_dest.dest_ad}</td>
 <td>{tourist_dest.dest_pin}</td>
 <td>{tourist_dest.dest_city}</td>
 <td><img src={[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18][i]}width="400px" height="400px"/></td>
 <td>{tourist_dest.dest_desc}</td>

 <td>
 
 </td>
 <td>
 
 </td>
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
 
 export default ListTourist_dest;