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
      Experience  
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
          className="-mb-16 md:mb-0 flex-shrink-0 w-44 h-44 md:w-56 md:h-56 rounded-full object-cover md:rounded-lg md:mt-8" src="/exp.png" alt="Your Image" />
        
        <div className='space-y-5 px-0 md:px-10'>
        <h5 className='text-lg md:text-2xl font-semibold'>
                Here is a{" "} 
            <span className='underline' style={{ textDecorationColor: '#F7AB0A' }}>little</span>{" "}
            story</h5>
            <p className='text-sm md:text-base text-justify'>
            
            I worked as a Software Developer at Hexagram Fintech, where I was responsible for developing and automating PDF generation systems for financial reports. My role involved using Go for backend development, Typst for designing dynamic and structured PDF layouts, and MySQL for managing and retrieving data efficiently. This experience helped me strengthen my problem-solving skills and gain a deeper understanding of building reliable, data-driven applications. </p>
        </div>
      
    </motion.div>
  )
}

export default Experience
