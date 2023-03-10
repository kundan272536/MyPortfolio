import React,{useContext} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import './Portfolio.css'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import Music from '../../img/musicapp.png'
import 'swiper/css'
import { themeContext } from '../../Context'
function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='Portfolio'>
    <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
    <span>Portfolio</span>
    {/* Side */}
    <Swiper
    spaceBetween={30}
    slidesPerView={3}
    grabCursor={true}
    className='portfolio-slider'
    >
       <SwiperSlide>
        <img src={Sidebar} alt=''/>
       </SwiperSlide>
       <SwiperSlide>
        <img src={Ecommerce} alt=''/>
       </SwiperSlide>
       <SwiperSlide>
        <img src={HOC} alt=''/>
       </SwiperSlide>
       <SwiperSlide>
        <img src={Music} alt=''/>
       </SwiperSlide>
    </Swiper>
      
    </div>
  )
}

export default Portfolio
