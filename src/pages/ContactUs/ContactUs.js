import React, {Component,useState } from "react";
import Header from "../../components/Header/header";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./ContactUs.scss";
// const fetch =require('node-fetch'); 
// const axios = require("axios");

class ContactUs extends Component {
   constructor(props) {

      super(props); 
      this.handleSubmit = this.handleSubmit.bind(this) 
      this.state = {
         number : "+1", 
         email : '', 
         fullName : '', 
         message: ''  
      }
   }

   async handleSubmit(event) { 
     event.preventDefault(); 
     console.log("I am reqested to submit"); 
     console.log();

     let uuid = Math.random();
     // var axios = require('axios');
     var data = {
       collection: "Task",
       database: "todo",
       dataSource: "Digitalytics",
       document: {
        _id: uuid, 
        full_name: this.state.fullName, 
        email: this.state.email, 
        phone: this.state.phone, 
        message: this.state.message     
      } 
    };
  

  const url = 'http://data.mongodb-api.com/app/data-gltzg/endpoint/data/v1/action/insertOne'; 
  // var config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Request-Headers': '*',
  //     'Access-Control-Allow-Origin': '*', 
  //     'api-key': '3bZEHHTzZsI4FxUmcokCocvYMbjxgOEngh6Yymj9l0kb0x6blvekomhYmzoBADxd',
  //   }
  // };

  // const a = await axios.post(url, data, config);

  // Default options are marked with *
  fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json',
          'api-key': '3bZEHHTzZsI4FxUmcokCocvYMbjxgOEngh6Yymj9l0kb0x6blvekomhYmzoBADxd',
          'Access-Control-Allow-Origin': '*', 
          'Access-Control-Request-Headers': '*',
        },

        body: data // body data type must match "Content-Type" header
    }).then((response) => { console.log(response.json()) } )
    .catch((error) => console.log(error));

  return; 
  }

  render() {

    return (
     <div>
     <Header background={true} />

     <div>
     <div className='contact_us_divider'>
     <div>
     <h1>CONTACT US</h1>
     <h2>Do you have any questions in mind? 
     Sure, Let's talk 
     </h2>
     </div>

     <div className=' form'>
     <form onSubmit={this.handleSubmit}>
     <div className='center_align_div'>
     <h3>REQUEST CALLBACK</h3>
     </div>
     <div>
     <input
     name="fullName"
     className='form-control'
     type='text'
     placeholder='Full Name *'
     value={this.state.fullName}
     onChange={(e) => this.setState({fullName: e.target.value}) }
     required
     />
     </div>
     <div>
     <input
     name="email"
     className='form-control'
     type='email'
     placeholder='Email *'
     value={this.state.email}
     onChange={(e) => this.setState({email: e.target.value}) }
     required
     />
     </div>
     <div className={`input_wrapper input_tel_wrapper `}>
      <ReactPhoneInput
           inputClass='phone_input_field'
                id='my-input'
                name='phone'
                defaultCountry='pk'
                enableAreaCodeStretch
                value={this.state.number}
                onChange={(e) => this.setState({number: e}) }
       />
      </div>
     <div className='input_wrapper'>
     <textarea
     name="message"
     className='block'
     type='text'
     placeholder='Message *'
     value={this.state.message}
     onChange={(e) => this.setState({message: e.target.value}) }
     required
     />
     </div>
     <div className='submit'>
     <button type="submit">SUBMIT</button>
     </div>
     </form> 
     </div>
     </div>
     </div>
     </div>
     );
 }

}
export default ContactUs; 