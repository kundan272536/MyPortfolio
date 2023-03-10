import React,{useContext} from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
function Intro() {
  const transition={duration:2,type:"spring",};
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
      <div className='i-left'>
        <div className='i-name'>
            <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
            <span>Kundan Kumar</span>
            <span>Frontent Developer with high level
            of experience in web designing and development,
            producting the Quality work</span>
        </div>
            <button className='button i-button'>Hire! me</button>
            <div className='i-icons'>
            <a href='https://github.com/kundan272536'>              
            <img src={Github} alt="" />
            </a>
            <a href='https://www.linkedin.com/in/kundan-kumar-3524a7227/'>
            <img src={LinkedIn} alt="" />
            </a>
            <a href='https://www.instagram.com/kundan_kumar252736/'>
            <img src={Instagram} alt="" />
            </a>
            </div>
      </div>
      <div className='i-right'>
      <img src={Vector1} alt="" />
      <img src={Vector2} alt="" />
      <img src={boy} alt="" />
      <motion.img 
      initial={{ left: "-50%" }}
      whileInView={{ left: "-35%" }}
      transition={transition}
      className='floating-div'
      src={glassesimoji} alt="" />
      <motion.div 
      initial={{ top:"-4%",left: "74%" }}
      whileInView={{ left: "68%" }}
      transition={transition}
      className='floating-div'
      style={{top:'-4%' ,left:'68%'}}  >
        <FloatingDiv image={Crown } txt1='Web' txt2='Developer'/>
      </motion.div>
      <motion.div 
      initial={{ left: "9rem",top:"18rem" }}
      whileInView={{ left: "0rem" }}
      transition={transition}
      className='floating-div'
      style={{top:'18rem',left:'1rem'}} >
        <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
      </motion.div>
       { /*Blur div */ }
       <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
       <div className='blur' style={{background:"#C1F5FF",top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
      </div>
    </div>
  )
}

export default Intro
