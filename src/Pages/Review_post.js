import React, { Component } from 'react';
//import { Dropdown,Checkbox } from 'semantic-ui-react';
import { TextArea,Button } from 'semantic-ui-react';
import axios from 'axios' ;

class Review_post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: "",
            destination: "",
            name:"",
			review:""
         }
    }



   
        handleSubmit = (event) => {
            event.preventDefault();
            const { date, destination, name, review } = this.state;
            axios.post('http://localhost:5000/feedback/addFeedback', {
            date: date,
            destination: destination,
            name: name,
			review:review
            })
            .then((response) => {
            console.log(response);
            this.props.history.push('/');
            })
            .catch((error) => {
            console.log(error);
            });
            }

    myChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() { 
	
        return ( 
            <form onSubmit = {this.handleSubmit}>
			<br/>
			<br/>
			<br/>
                <h1 align="center">FEEDBACK</h1>
				<br/>
				<br/>
                <div class= "ui center aligned grid">
            <div class="ui form">
                <div>
                    <label style={{color:'white'}}>Enter your name:</label>
                    <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange= {this.myChangeHandler}
                    />
                </div>
                <br/><br/>

                <div>
                    <label style={{color:'white'}}>Destination Name</label>
                    <input 
                    type="text"
                    name="destination"
                    placeholder="Destination Name"
                    onChange={this.myChangeHandler}
                    />
                </div>
                <br/>
					<label style={{color:'white'}}>Review:</label>
                <TextArea
                    placeholder= 'Review'
                    name= 'review'
                    onChange= {this.myChangeHandler}
                />
                <div>
				<br/>
                    <label style={{color:'white'}}>Date</label>
                    <input 
                    type="date"
                    name="date"
                    placeholder="Date"
                    onChange={this.myChangeHandler}
                    />
                </div>
                <br/>
                
                <Button type="Submit">
                    POST
                </Button>
                <br/>
				<br/>
                <Button type="Reset">
                    RESET
                </Button>
				<br/>
				<br/>
				<br/>
            </div>
            </div>
            </form>
         );
    }
}
 
export default Review_post;