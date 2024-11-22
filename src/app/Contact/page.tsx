"use client"

import "@/styles/contact.css"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contactpage = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,   
    });
  }, []);

  return (
    <section className='top1-section'>

<form  className='form' data-aos="flip-left">

<fieldset className='fieldset'>

<legend>Contact us</legend>
<br />
<p>

<label htmlFor="name"> Name: </label>
<input type="text" placeholder='Enter your Name' />



</p>
<br />

<p>
<label htmlFor="email">Email: </label>
<input type="email" placeholder='Enter your Email here' />


</p>
<br />

<p>
<label htmlFor="number">PH:No: </label>
<input type="number"placeholder='Enter your Phone Number' />


</p>
<button className='Button'>Send Message</button>
</fieldset>



</form>



    </section>
  )
}

export default Contactpage