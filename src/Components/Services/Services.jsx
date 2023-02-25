import React from 'react'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import './Services.css'
import Card from '../Card/Card'
import Resume from '../../img/Resume.pdf'
function Services() {
  return (
    <div className='services'>
    {/* /*Left side */ }
    <div className='awesome'>
    <span>My Awesome</span>
    <span>Services</span>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod 
    tempor incididunt ut labor. </span>
    <a href={Resume} download>
    <button className='button s-button'>Download CV</button>

    </a>
    <div className='blur s-blur-1' style={{background:'#ABF1FF94'}}></div>
    </div>
    {/* Right Side */}
    <div className='cards'>
     <div style={{left:'14rem'}}>
     <Card 
        emoji={HeartEmoji}
        heading={'Design'}
        details={'Adobe,Photoshop'}
      />
     </div>
     <div style={{left:'-4rem', top:'12rem'}}>
     <Card 
        emoji={Glasses}
        heading={'Developer'}
        details={'Html,Css,JavaScripts,React'}
      />
     </div>
     <div style={{left:'12rem', top:'19rem'}}>
     <Card 
        emoji={Humble}
        heading={'UI/UX'}
        details={'Html,Css,JavaScripts,React'}
      />
     </div>
     <div className='blur s-blur-2' style={{background:"var(--purple)"}}></div>

    </div>

    </div>
  )
}

export default Services
