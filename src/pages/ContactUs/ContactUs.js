import React, { useState } from "react";
import Header from "../../components/Header/header";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./ContactUs.scss";
import founder1 from "../../Images/placeholderImage.jpeg";
// import { Router, Route, Switch } from "react-router";

export default function ContactUs() {
  const [number, setNumber] = useState("+1");

  return (
    <div>
      <Header background={true} />

      <div className='body '>
        <div className='contact_us_divider'>
          <div>
            <h1>CONTACT US</h1>
          </div>
          <div className=' form'>
            <div className='center_align_div'>
              <h2>REQUEST CALLBACK</h2>
            </div>
            <div>
              <input
                className='form-control'
                type='text'
                placeholder='Full Name *'
                required
              />
            </div>
            <div>
              <input
                className='form-control'
                type='email'
                placeholder='Email *'
                required
              />
            </div>
            <div className={`input_wrapper input_tel_wrapper `}>
              <ReactPhoneInput
                inputClass='phone_input_field'
                id='my-input'
                defaultCountry='pk'
                enableAreaCodeStretch
                value={number}
              />
            </div>
            <div className='input_wrapper'>
              <textarea
                className='block'
                type='text'
                placeholder='Message *'
                required
              />
            </div>
            <div className='submit'>
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
