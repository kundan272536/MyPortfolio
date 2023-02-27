import React,{useContext} from 'react'
import './Experience.css'
import { themeContext } from '../../Context'
function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='experience' id='Experience'>
    <div className='achievement'>
    <div className='circle' style={{color: darkMode?'var(--orange)':''}}>0+</div>
    <span style={{ color: darkMode ? "white" : "" }}>Years</span>
    <span>Experience</span>
    </div>
    <div className='achievement'>
    <div className='circle'style={{color: darkMode?'var(--orange)':''}} >5+</div>
    <span style={{ color: darkMode ? "white" : "" }}>Completed</span>
    <span>Project</span>
    </div>
    <div className='achievement'>
    <div className='circle' style={{color: darkMode?'var(--orange)':''}}>0+</div>
    <span>Companies</span>
    <span>Work</span>
    </div>  
    </div>
  )
}

export default Experience
