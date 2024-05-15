"use client";
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col  relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-4 md:px-10 justify-evenly mx-auto items-center '>
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
          className="-mb-16 md:mb-0 flex-shrink-0 w-44 h-44 md:w-56 md:h-56 rounded-full object-cover
          md:rounded-lg md:mt-8" src="/tamil2.jpg" alt="Your Image" />
        
        <div className='space-y-5 px-0 md:px-10'>
        <h5 className='text-lg md:text-2xl font-semibold'>
                Here is a{" "} 
            <span className='underline decoration-[#F7AB0A]'>little</span>{" "}
            story</h5>
            <p className='text-sm md:text-base text-justify'>
            
            I'm Tamilarasan, a software developer with a long-standing passion for technology. Despite being an average student, I've always been driven by my love for coding and problem-solving.

In 2023, I had the honor of being a finalist in Kavach, a testament to my dedication and skills in the field. Through my journey, I've developed expertise in various programming languages and technologies.

I believe in the transformative power of technology to shape the world for the better. Every line of code I write is infused with the desire to create impactful solutions that make a difference.

Outside of coding, I enjoy exploring the latest trends in tech, diving into new projects, and continuously learning to stay ahead of the curve. </p>
        </div>
    </motion.div>
  )
}

export default About
