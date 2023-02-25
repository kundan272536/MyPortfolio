import React from 'react'
import './Card.css'
function Card({emoji,heading,details}) {
  return (
    <div className='card'>
    
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{details}</span>
            <button className='c-button'>MORE LEARN</button>
    </div>
  )
}

export default Card
