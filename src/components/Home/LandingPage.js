import React from 'react'
import logo from '../../images/marksman_log.png'
import { motion } from "framer-motion"


const varients = {
    initial:{
        opacity: 0,
        scale: 0
    },
    animate:{
        opacity: 1,
        scale: 1,
        transition:{
            duration: 1.6
        }   
    }
}

const LandingPage = () => {

    
  return (
    <div className='landing_wrapper'>
         <motion.img 
            variants={varients}
            initial='initial'
            animate='animate'
            src={logo} alt="logo" 
        />
    </div>
  )
}

export default LandingPage