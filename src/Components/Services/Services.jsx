import React from 'react'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import './Services.css'
import Card from '../Card/Card'
import Resume from '../../img/Resume.pdf'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
function Services() {
  const transition={duration:1,type:"spring",};
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
    {/* /*Left side */ }
    <div className='awesome'>
    <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
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
     <motion.div 
     initial={{ left: "14rem" }}
      whileInView={{ left: "25rem" }}
      transition={transition}
     style={{left:'14rem'}}>
      <Card 
        emoji={HeartEmoji}
        heading={'Design'}
        details={'Adobe,Photoshop'}
      />
     </motion.div>
     <motion.div
     initial={{ left: "-11rem", top: "12rem" }}
     whileInView={{ left: "-4rem" }}
     transition={transition} 
     style={{left:'-4rem', top:'12rem'}}>
     <Card 
        emoji={Glasses}
        heading={'Developer'}
        details={'Html,Css,JavaScripts,React'}
      />
     </motion.div>
     <motion.div 
     initial={{ top: "19rem", left: "25rem" }}
     whileInView={{ left: "12rem" }}
     transition={transition}
     style={{left:'12rem', top:'19rem'}}>
     <Card 
        emoji={Humble}
        heading={'UI/UX'}
        details={'Html,Css,JavaScripts,React'}
      />
     </motion.div>
     <div className='blur s-blur-2' style={{background:"var(--purple)"}}></div>

    </div>

    </div>
  )
}

export default Services
