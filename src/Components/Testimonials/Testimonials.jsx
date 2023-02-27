import React from 'react'
import './Testimonials.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import {Pagination} from "swiper"
import 'swiper/css/pagination'
import 'swiper/css'
function Testimonials() {
  const  clients=[
        {
        img:profilePic1,
        review:"Lorem ipsum dolor sit amet.Quo similique illo eos neque iste ut quas dolor? Eos quibusdam enim est commodi dolores ut quisquam consequatur est nisi libero et pariatur consequatur est minus voluptatem et omnis optio.",
        },
        {
            img:profilePic2,
            review:"Lorem ipsum dolor sit amet.Quo similique illo eos neque iste ut quas dolor? Eos quibusdam enim est commodi dolores ut quisquam consequatur est nisi libero et pariatur consequatur est minus voluptatem et omnis optio.",
        },
        {
            img:profilePic3,
            review:"Lorem ipsum dolor sit amet.Quo similique illo eos neque iste ut quas dolor? Eos quibusdam enim est commodi dolores ut quisquam consequatur est nisi libero et pariatur consequatur est minus voluptatem et omnis optio.",
        },
        {
            img:profilePic4,
            review:"Lorem ipsum dolor sit amet.Quo similique illo eos neque iste ut quas dolor? Eos quibusdam enim est commodi dolores ut quisquam consequatur est nisi libero et pariatur consequatur est minus voluptatem et omnis optio.",
        },
    ]
  return (
    <div className='t-wrapper' id='Testimonials'>
      <div className='t-heading'>
      <span>Client always get </span>
      <span>Exceptional Work </span>
      <span>from me...</span>
      <div className='blur t-blur1' style={{background:'var(--purple)'}}></div>
      <div className='blur t-blur2' style={{background:'skyblue'}}></div>
      </div>
      {/* Slider */}
      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable:true}}
      >
        {clients.map((client,index)=>{
            return(
                <SwiperSlide key={index}>
                <div className='testimonials'>
                <img src={client.img} alt=""/>
                <span>{client.review}</span>
                </div>
                </SwiperSlide>
            );
        })}
      </Swiper>
    </div>
  )
}

export default Testimonials
