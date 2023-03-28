import React from 'react'
import image1 from '../../images/digital.png'
import image2 from '../../images/revolution.png'
import image3 from '../../images/fist-01.png'
import { motion } from "framer-motion"

const img1 = {
  hidden: { opacity: 0,x:-400 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring", stiffness: 500, delay: 0.5
    }
  }
}
const img2 = {
  hidden: { opacity: 0,x: 400 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring", stiffness: 500, delay: 0.5,
    }
  }
}

const img3 = {
  hidden: { opacity: 0,y: 1000 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", stiffness: 200, delay: 0.8
    }
  }
}

const Container1 = () => {

  return (
    <motion.div className='container1_wrapper'>
        <motion.img src={image1} alt='digital'
          variants={img1} 
          initial={img1.hidden}
          animate={img1.show}
        />
        <motion.img src={image2} alt='revolution'
          variants={img2} 
          initial={img2.hidden}
          animate={img2.show}
        />
        <motion.img src={image3} alt='revolution' className='first_image'
          ivariants={img3} 
          initial={img3.hidden}
          animate={img3.show}
        />
    </motion.div>
  )
}

export default Container1