import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

function Footer() {
  return (
    <div className='footer'>
     <img src={Wave} alt='' style={{width:'100%'}}/> 
     <div className='f-content'>
     <span>Email :- kundankumar252736@gmail.com</span>
     <span>Contact no:- +91 8709792521</span>

     <div className='f-icons'>
     <a href='https://www.instagram.com/kundan_kumar252736/'>
     <Insta color='white' size='3rem'/>
     </a>
     <a href='https://www.facebook.com/profile.php?id=100011095779348'>
     <Facebook color='white' size='3rem'/>

     </a>
     <a href='https://github.com/kundan272536'>
     <Github color='white' size='3rem'/>
     </a>
      
     </div>
     </div>
    </div>
  )
}

export default Footer
