import React from 'react'
import {AiFillFacebook, AiFillInstagram, TiSocialTwitter} from "react-icons/all"


export default function footer() {
  return (
    <div className='socials'>
        <p>Check out our social media</p>
        <AiFillFacebook/>
        <AiFillInstagram/>
        <TiSocialTwitter/>
    </div>
  )
}
