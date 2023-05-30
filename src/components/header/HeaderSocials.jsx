import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si' 
import './header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href ="https://linkedin.com" target='blank'><BsLinkedin/></a>
        <a href ="https://github.com" target='blank'><BsGithub/></a>
        <a href ="https://leetcode.com" target='blank'><SiLeetcode/></a>
      
    </div>
  )
}

export default HeaderSocials
