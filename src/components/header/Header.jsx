import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-img1.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
       <div className='container header_container'>
          <h5>Hello I'm</h5>
          <h1>Anushka Patil</h1>
          <h5 className="text-light">Machine Learning Practitioner</h5>
          <CTA/>
          <HeaderSocial/>

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll_down'>Scroll Down</a>
       </div>
    </header>
  )
}

export default Header