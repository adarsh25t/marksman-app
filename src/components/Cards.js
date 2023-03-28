import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Cards = ({title}) => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 3000, min: 1600 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 1400, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <>
        <h3 className='text-center mt-5'>{title}</h3>
        <Carousel 
            responsive={responsive} 
            className="carousel_wrapper">
            <div className='carousel_item'>Item 1</div>
            <div className='carousel_item'>Item 2</div>
            <div className='carousel_item'>Item 3</div>
            <div className='carousel_item'>Item 4</div>
            <div className='carousel_item'>Item 3</div>
            <div className='carousel_item'>Item 4</div>
            <div className='carousel_item'>Item 3</div>
            <div className='carousel_item'>Item 4</div>
        </Carousel>
    </>
  )
}

export default Cards