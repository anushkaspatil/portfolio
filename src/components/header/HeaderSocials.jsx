import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiMedium} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/anushkaspatil/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/anushkaspatil" target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href="https://medium.com/@anushkapatil1511" target='_blank' rel="noreferrer"><SiMedium /></a>
    </div>
  )
}

export default HeaderSocials