import React, { useState } from 'react'
import Home from '../components/Home/Home';
import LandingPage from '../components/Home/LandingPage';

const HomePage = () => {
    const [isLoading,setLoading] = useState(false)

    setTimeout(() => setLoading(true),2500);

  return (
    <>
        {isLoading ? <Home/> : <LandingPage/>}
    </>
  )
}

export default HomePage