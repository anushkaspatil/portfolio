import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/image1.webp'
import IMG2 from '../../assets/image2.jpg'
import IMG3 from '../../assets/image3.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: IMG1,
    name: "Computer Engineering at PVG's COET Pune",
    review: "Pursuing Computer Engineering at Pune Vidyarthi Griha's College of Engineering and Technology at Pune under the SPPU curriculum. The cummulative SGPA for 1st and 2nd year is 8.91. Currently in the third year studying for the 6th sem." 
  },
  {
    image: IMG2,
    name: 'HSC at SP College Pune',
    review: "Completed my highschool (11th & 12th) from Sir Parashurambhau College Pune. Secured a rank of 4946 in MHT-CET Examination along with 96.7 percentile. In HSC boards, aggregate percentage was 90.67. Was also a part of SPC's Art Circle."
  },
  {
    image: IMG3,
    name: 'CBSE at SSDPS Pune',
    review: 'Complete my secondary school from Sinhagad Spring Dale Public School Vadgaon with 89.2 percentage in 10th CBSE. While in school, partcipated and won various debate completitions, and one of my favorite was street plays.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Swipe left</h5>
      <h2>Education</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        
        {
          data.map(({ image, name, review }, index) => {
            return (
              <SwiperSlide className="testimonials">
                <div className="image">
                  <img src={image} alt='img' />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials