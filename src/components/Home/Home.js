import React from 'react'
import Cards from '../Cards'
import Header from '../Layout/Header'
import Container1 from './Container1'
import bgimage from '../../images/7041414.jpg'
import Container2 from './Container2'
import Container3 from './Container3'
import Container5 from './Container5'

const Home = () => {
  return (
    <div style={{backgroundImage:`url(${bgimage}`}} className="homepage">
        <Header/>
        <Container1/>
        <Container2/>
        <Container3/>
        <Container5/>
        {/* <Cards title={'the stuff wed id'}/>
        <Cards title={'All Projects'}/> */}
    </div>
   
  )
}

export default Home