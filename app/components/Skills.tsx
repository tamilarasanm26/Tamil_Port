"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill';
type Props = {
  directionLeft?: boolean;
};

const Skills = ({ directionLeft }: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className='absolute top-24 md:top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl'>
        Skills
      </h3>
      <h3 className="absolute top-36 upper tracking-[3px] text-gray-500 text-sm">
        Using the latest tech this world has to offer
      </h3>
      <br />
      <br />
      <div className="grid grid-cols-4 gap-5"
      style={{marginBottom: '-1rem', marginTop: '3rem' }}
      >
        <div style={{  borderRadius: '50%', padding: '5px',}}

        >
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='/c.jpeg'
            className='rounded-full border border-gray-300 object-cover'
            style={{ width: '4rem', height: '4rem', minWidth: '50px', minHeight: '50px', borderRadius: '50%' }}
          />
        </div>
        <div style={{ borderRadius: '50%', padding: '5px' }}>
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='/ja.png'
            className='rounded-full border border-gray-300 object-cover '
            style={{ width: '4rem', height: '4rem', minWidth: '50px', minHeight: '50px', borderRadius: '50%' }}
          />
        </div>
        <div style={{ borderRadius: '50%', padding: '5px' }}>
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='/html.png'
            className='rounded-full border border-gray-300 object-cover '
            style={{ width: '4rem', height: '4rem', minWidth: '50px', minHeight: '50px', borderRadius: '50%' }}
          />
        </div>
        <div style={{ borderRadius: '50%', padding: '5px' }}>
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='/css.png'
            className='rounded-full border border-gray-300 object-cover '
            style={{ width: '4rem', height: '4rem', minWidth: '50px', minHeight: '50px', borderRadius: '50%' }}
          />
        </div>
        <div style={{ borderRadius: '50%', padding: '5px' }}>
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='/js.jpeg'
            className='rounded-full border border-gray-300 object-cover '
            style={{ width: '4rem', height: '4rem', minWidth: '50px', minHeight: '50px', borderRadius: '50%' }}
          />
        </div>
        <div style={{ borderRadius: '50%', padding: '5px' }}>
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='/react.png'
            className='rounded-full border border-gray-300 object-cover '
            style={{ width: '4rem', height: '4rem', minWidth: '50px', minHeight: '50px', borderRadius: '50%' }}
          />
        </div>
        <div style={{ borderRadius: '50%', padding: '5px' }}>
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='/mongo.jpg'
            className='rounded-full border border-gray-300 object-cover '
            style={{ width: '4rem', height: '4rem', minWidth: '50px', minHeight: '50px', borderRadius: '50%' }}
          />
        </div>
        <div style={{ borderRadius: '50%', padding: '5px' }}>
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='/mys.jpeg'
            className='rounded-full border border-gray-300 object-cover '
            style={{ width: '4rem', height: '4rem', minWidth: '50px', minHeight: '50px', borderRadius: '50%' }}
          />
        </div>
        <div style={{ borderRadius: '50%', padding: '5px' }}>
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='/framer.png'
            className='rounded-full border border-gray-300 object-cover '
            style={{ width: '4rem', height: '4rem', minWidth: '50px', minHeight: '50px', borderRadius: '50%' }}
          />
        </div>
        <div style={{ borderRadius: '50%', padding: '5px' }}>
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='/next.png'
            className='rounded-full border border-gray-300 object-cover '
            style={{ width: '4rem', height: '4rem', minWidth: '50px', minHeight: '50px', borderRadius: '50%' }}
          />
        </div>
        <div style={{ borderRadius: '50%', padding: '5px' }}>
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='/ts.png'
            className='rounded-full border border-gray-300 object-cover '
            style={{ width: '4rem', height: '4rem', minWidth: '50px', minHeight: '50px', borderRadius: '50%' }}
          />
        </div>
        <div style={{ borderRadius: '50%', padding: '5px' }}>
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='/ang.png'
            className='rounded-full border border-gray-300 object-cover '
            style={{ width: '4rem', height: '4rem', minWidth: '50px', minHeight: '50px', borderRadius: '50%' }}
          />
        </div>
        <div style={{ borderRadius: '50%', padding: '5px' }}>
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='/tailwind.png'
            className='rounded-full border border-gray-300 object-cover '
            style={{ width: '4rem', height: '4rem', minWidth: '50px', minHeight: '50px', borderRadius: '50%', backgroundColor: 'white'  }}
          />
        </div>
        {/* Add similar code blocks for other images */}
      </div>
    </motion.div>
  )
}

export default Skills
