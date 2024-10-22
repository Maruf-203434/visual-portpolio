"use client"

import { animate, motion } from "framer-motion"

const RotatingShape = ({content,direction,duration}) => {
    // define the retation animation
    const rotationAnimation = {
        animate:{
            // rotate 360 degree based on the direction
            rotate:direction === "right" ? 360 :direction === "left" ? -360 : 0,
            transition:{
                duration:duration, 
                ease:"linear",
                repeat:Infinity 
            }
        }
    }
  return (
    <motion.div variants={rotationAnimation} animate="animate" >
      {content}
    </motion.div>
  )
}

export default RotatingShape
