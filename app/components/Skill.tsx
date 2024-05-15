// "use client";
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuANvhcmXlP_41PL4VxP38Vcsted42ZY5TBQ&s'
        className='rounded-full border border-gray-300 object-cover'
        style={{ width: '4rem', height: '4rem', minWidth: '50px', minHeight: '50px' }} // Adjust size here
      />
    </div>
  );
}

export default Skill;
