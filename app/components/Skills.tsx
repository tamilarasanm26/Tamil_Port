"use client";
import React from 'react';
import { motion } from 'framer-motion';

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
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Using the latest tech this world has to offer
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 mt-16 md:mt-20">
        {[
          { src: '/c.jpeg', alt: 'C' },
          { src: '/ja.png', alt: 'Java' },
          { src: '/html.png', alt: 'HTML' },
          { src: '/css.png', alt: 'CSS' },
          { src: '/js.jpeg', alt: 'JavaScript' },
          { src: '/react.png', alt: 'React' },
          { src: '/mongo.jpg', alt: 'MongoDB' },
          { src: '/mys.jpeg', alt: 'MySQL' },
          { src: '/framer.png', alt: 'Framer' },
          { src: '/next.png', alt: 'Next.js' },
          { src: '/ts.png', alt: 'TypeScript' },
          { src: '/ang.png', alt: 'Angular' },
          { src: '/tailwind.png', alt: 'Tailwind CSS', style: { backgroundColor: 'white' } },
        ].map(({ src, alt, style }) => (
          <motion.div
            key={alt}
            initial={{ y: -200, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center"
          >
            <img
              src={src}
              alt={alt}
              className="rounded-full border border-gray-300 object-cover"
              style={{
                width: '4rem',
                height: '4rem',
                minWidth: '50px',
                minHeight: '50px',
                borderRadius: '50%',
                padding: '5px',
                ...style,
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
