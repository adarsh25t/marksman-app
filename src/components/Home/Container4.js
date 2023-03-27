import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../images/Layer 8.png'
import image2 from '../../images/Layer 9.png'
import image3 from '../../images/Layer 10.png'
import image4 from '../../images/Layer 11.png'
import image5 from '../../images/Layer 12.png'
import image6 from '../../images/Layer 13.png'

const Container4= () => {
  return (
    <div className='container4_wrapper'>
        <div className='section_1'>
            <img src={image1} alt="img1"/>
            <img src={image2} alt="img2"/>
        </div>
        <div className='section_2'>
            <img src={image3} alt="img3"/>
            <img src={image4} alt="img4"/>
        </div>
        <div className='section_3'>
          <img src={image5} alt="img5"/>
        </div>
        <div className='section_4'>
          <img src={image6} alt="img6"/>
        </div>
    </div>
  )
}

export default Container4