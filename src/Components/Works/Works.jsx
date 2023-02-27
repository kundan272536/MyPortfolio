import React,{useContext} from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context'
import {motion} from 'framer-motion'
function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
    {/* Left Side */}
      <div className='awesome'>
    <span style={{ color: darkMode ? "white" : "" }}>Works for All these</span>
    <span>Brands & Clients</span>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod 
    tempor incididunt ut labor.<br></br>
    consectetur adipiscing elit, remote login
     </span>
    <button className='button s-button'>Hire! me</button>
    <div className='blur s-blur-1' style={{background:'#ABF1FF94'}}></div>
    </div>
    {/* Right Side */}
    <div className='w-right'>
    <motion.div 
      initial={{ rotate: 45 }}
      whileInView={{ rotate: 0 }}
      viewport={{ margin: "-40px" }}
      transition={{ duration: 3.5, type: "spring" }}
    className='w-mainCircle'>
    <div className='w-secCircle'>
     <img src={Upwork} alt=""/>
    </div>
    <div className='w-secCircle'>
     <img src={Fiverr} alt=""/>
    </div>
    <div className='w-secCircle'>
     <img src={Amazon} alt=""/>
    </div>
    <div className='w-secCircle'>
     <img src={Shopify} alt=""/>
    </div>
    <div className='w-secCircle'>
     <img src={Facebook} alt=""/>
    </div>
    </motion.div>
    {/* Background Circle */}
    <div className='w-backCircle blueCircle'></div>
    <div className='w-backCircle yellowCircle'></div>

    </div>
    </div>
  )
}

export default Works
