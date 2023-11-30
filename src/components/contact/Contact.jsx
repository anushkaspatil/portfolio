import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dy21mc3', 'template_81lyid7', form.current, 'ClkW1D-_y22-cunm9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
           <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>anushkapatil1511@gmail.com</h5>
            <a href="mailto:anushkapatil1511@gmail.com" target='_blank' rel="noreferrer">Send a Message</a>
           </article>

           <article className='contact_option'>
            <FaTwitter className='contact_option-icon'/>
            <h4>Twitter</h4>
            <h5>@Anushkaspatil</h5>
            <a href="https://twitter.com/intent/tweet?recipient_id=Anushkaspatil" target='_blank' rel="noreferrer">Send a Message</a>
           </article>

           <article className='contact_option'>
           <FaWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Only for important purpose</h5>
            <a href="https://wa.me/+919579285836  " target='_blank' rel="noreferrer">Send a Message</a>
           </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="10" placeholder='Your message'required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact