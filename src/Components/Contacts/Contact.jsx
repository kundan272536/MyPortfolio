import React,{useContext} from 'react'
import   { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { themeContext } from '../../Context';
function Contact() {

    const form = useRef();
    const [done,setDone]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9fyersl', 'template_6tm9sr4', form.current, 'daz1YRMJmweqa4MmE')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='contact-form' id='Contact'>
      <div className='w-left'>
       <div className='awesome'>
        <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
        <span>Contact me</span>
        <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
       </div>
      </div>
      <div className='c-right'>
       <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" className='user' placeholder='enter your name...'/>
        <input type="email" name="user_mail" className='user' placeholder='enter your email...'/>
        <textarea name='message' className='user' placeholder='enter your message...'/>
        <input type="submit" value="Send" className='button'/> 
        <span>{done && "Thanks for Contacting me"}</span>
        <div 
        className='blur c-blur1'
        style={{background:'var(--purple)'}}>
         
        </div>

       </form>
      </div>
    </div>
  )
}

export default Contact
