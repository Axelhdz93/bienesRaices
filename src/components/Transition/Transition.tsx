'use client'

import { TransitionProps } from './TransitionTypes'
import { motion } from 'motion/react'
import { fadeIn } from './TransitionFramer'


const Transition = (props: TransitionProps ) => {

    const { children, className } = props
  

  return (
    <div>
      <motion.div  
      variants={fadeIn()} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} 
      className={className}
      >
          {children}
          
      </motion.div>
    </div>
  )
}

export default Transition
