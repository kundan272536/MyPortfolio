import React,{useContext} from 'react'
import './Card.css'
import { themeContext } from '../../Context';
function Card({emoji,heading,details}) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='card'>
    
            <img src={emoji} alt="" />
            <span style={{ color: darkMode ? "white" : "" }}>{heading}</span>
            <span style={{ color: darkMode ? "white" : "" }}>{details}</span>
            <button className='c-button'>MORE LEARN</button>
    </div>
  )
}

export default Card
