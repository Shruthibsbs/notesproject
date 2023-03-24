import React from 'react'
import { HiHome } from 'react-icons/hi'
import {FcContacts  } from 'react-icons/fc'
import {AiOutlineMail } from 'react-icons/ai'
import {SiFacebook } from 'react-icons/si'
 import {SiTwitter } from 'react-icons/si'
import {SiInstagram } from 'react-icons/si'
import {SiLinkedin } from 'react-icons/si'



function Footer() {
  return (
    <div>
      <h4>CONTACT</h4>
      <div className='pf'>
      <p><span><HiHome/></span>  Chandigarh,India</p>
        <p><span><AiOutlineMail/></span> info@codeoffun.com</p>
        <p><span><FcContacts/></span> +91 7015393351</p>
      </div>
      <div className='solo'>
        <SiFacebook color={'blue'} size={'25'}/>
        <SiTwitter color={'blue'} size={'25'}/>
        <SiInstagram color={'blue'} size={'25'}/>
        <SiLinkedin color={'blue'} size={'25'}/>
      </div>
      <p >© 2019-2023 Copyright Roadixo Industries LLP : Codeoffun.com</p>
       
    </div>
  )
}

export default Footer
