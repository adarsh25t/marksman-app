import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../images/Layer 3.png'

const Container3 = () => {
  return (
    <div className='container3_wrapper'>
        <img src={image1} alt='layer' />
        <div>
            <Link>VFX</Link>
            <Link>XR Development</Link>
            <Link>Education Content</Link>
            <Link>Metaverse</Link>
            <Link>Game development</Link>
            <Link>3D printing</Link>
        </div>
    </div>
  )
}

export default Container3