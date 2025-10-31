"use client";
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col  relative h-screen text-center md:text-left md:flex-row max-w-7xl px-4 md:px-10 justify-evenly mx-auto items-center '>
       <h3 className='absolute top-24 md:top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl '>
      About  
      </h3>
      <br />
          <motion.img 
          initial={{
            x:-200,
            opacity:0,
          }}
          transition={{
            duration:1.2,
          }}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
          className="-mb-16 md:mb-0 flex-shrink-0 w-44 h-44 md:w-56 md:h-56 rounded-full object-cover md:rounded-lg md:mt-8" src="/tamil_3.png" alt="Your Image" />
        
        <div className='space-y-5 px-0 md:px-10'>
        <h5 className='text-lg md:text-2xl font-semibold'>
                Here is a{" "} 
            <span className='underline' style={{ textDecorationColor: '#F7AB0A' }}>little</span>{" "}
            story</h5>
            <p className='text-sm md:text-base text-justify'>
            
            I’m Tamil, a passionate software developer who loves turning ideas into meaningful digital experiences. I’m driven by curiosity and the desire to create things that make a difference. I enjoy learning, exploring new concepts, and solving problems through creative thinking. Beyond coding, I’m someone who values growth, teamwork, and continuous learning as I strive to improve and contribute to something impactful. </p>
        </div>
      
    </motion.div>
  )
}

export default Experience
