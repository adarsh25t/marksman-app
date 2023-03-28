import React from 'react'
import Cards from '../Cards'
import Header from '../Layout/Header'
import Container1 from './Container1'
import bgimage from '../../images/7041414.jpg'
import Container2 from './Container2'
import Container3 from './Container3'
import Container5 from './Container5'
import Container4 from './Container4'
import Container6 from './Container6'
import { motion, useScroll } from "framer-motion"

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div style={{backgroundImage:`url(${bgimage}`}} className="homepage">
        <Header/>
        <main className='container'>
          <Container1/>
          <Container2/>
          <Container3/>
          <Container4/>
          <Cards title={'the stuff wed id'}/>
          {/* <Cards title={'All Projects'}/> */}
          <Container5/>
        </main>
        <Container6/>
        
    </motion.div>
   
  )
}

export default Home