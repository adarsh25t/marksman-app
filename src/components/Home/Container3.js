import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../images/Layer 3.png'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation} from "framer-motion"


const titleVarient = {
  hidden: { opacity: 0,x:-300 },
  visible: { opacity: 1, x:0, transition: { duration: 0.5 } }
}
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};
const link1Variant = {
  visible: { opacity: 1,x:0, transition: { delay:1,duration: 0.5 } },
  hidden: { opacity: 0,x:300 }
};
const link2Variant = {
  visible: { opacity: 1,x:0, transition: { delay:1.2,duration: 0.5 } },
  hidden: { opacity: 0,x:300 }
};
const link3Variant = {
  visible: { opacity: 1,x:0, transition: { delay:1.4,duration: 0.5 } },
  hidden: { opacity: 0,x:300 }
};
const link4Variant = {
  visible: { opacity: 1,x:0, transition: { delay:1.6,duration: 0.5 } },
  hidden: { opacity: 0,x:300 }
};
const link5Variant = {
  visible: { opacity: 1,x:0, transition: { delay:1.8,duration: 0.5 } },
  hidden: { opacity: 0,x:300 }
};
const link6Variant = {
  visible: { opacity: 1,x:0, transition: { delay:2,duration: 0.5 } },
  hidden: { opacity: 0,x:300 }
};

const Container3 = () => {

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
      <div className='container3_wrapper'>
          {/* <img src={image1} alt='layer' /> */}
          <motion.div className='about_image'
            variants={boxVariant}
            initial="hidden"
            animate={control}
            ref={ref}
          ></motion.div>
          <div>
              <motion.div variants={link1Variant} initial="hidden" animate={control} ref={ref}><Link>VFX</Link></motion.div>
              <motion.div variants={link2Variant} initial="hidden" animate={control} ref={ref}><Link>XR Development</Link></motion.div>
              <motion.div variants={link3Variant} initial="hidden" animate={control} ref={ref}><Link>Education Content</Link></motion.div>
              <motion.div variants={link4Variant} initial="hidden" animate={control} ref={ref}><Link>Metaverse</Link></motion.div>
              <motion.div variants={link5Variant} initial="hidden" animate={control} ref={ref}><Link>Game development</Link></motion.div>
              <motion.div variants={link6Variant} initial="hidden" animate={control} ref={ref}><Link>3D printing</Link></motion.div>
          </div>
      </div>
    </>
  )
}

export default Container3