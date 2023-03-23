import React from 'react'
import image1 from '../../images/digital.png'
import image2 from '../../images/revolution.png'
import image3 from '../../images/fist-01.png'

const Container1 = () => {
  return (
    <div className='container1_wrapper'>
        <img src={image1} alt='digital'/>
        <img src={image2} alt='revolution'/>
        <img src={image3} alt='revolution' className='first_image'/>
    </div>
  )
}

export default Container1