import React from 'react'
import './Slidercmp.css'
import banner from "../../Assets/Images/banner-img.png";

export default function Slidercmp() {
  return (
      <div className='SlidercmpContainer'>
          <div className='SlidercmpParent'>
        <div className='SlidercmpImage'>
          <img src={banner}></img>
        </div>
        <div className='SlidercmpText'>

        </div>

          </div>  
    </div>
  )
}
