import React, { useEffect } from 'react'
import image1 from '../../images/Layer 5.png'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation} from "framer-motion"


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};
const titleVarient = {
  hidden: { opacity: 0,x:-300 },
  visible: { opacity: 1, x:0, transition: { duration: 0.5 } }
}

const Container2 = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <motion.p className='title'
        variants={titleVarient}
        initial="hidden"
        animate={control}
        ref={ref}
        >
          About Us
        </motion.p>
      <motion.div className='container2_wrapper'
        variants={boxVariant}
        initial="hidden"
        animate={control}
        ref={ref}
      >
          <motion.p>
            Marksman Studios is a digital media company that goes beyond the norm. They specialize in crafting enthralling tales and life-changing encounters that make a lasting impact on their clients and their target audience. Their broad range of services, including VFX, XR development, educational content, game development, and 3D printing, cater to diverse industries. Their team of imaginative creators and tech experts are motivated by their zeal for innovation and commitment to high standards. They can help you realize your aspirations and produce an extraordinary experience that distinguishes you from others.
          </motion.p>
          {/* <img src={image1} alt='layer' /> */}
          <div className='about_image'></div>
      </motion.div>
    </>
    
  )
}

export default Container2