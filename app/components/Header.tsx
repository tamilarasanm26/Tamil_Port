'use client';
import { SocialIcon } from 'react-social-icons';


import { motion } from 'framer-motion';
import Link from 'next/link';



type Props = {
  
};

export default function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x:0,
            opacity:1,
            scale:1
          }}
          transition={{
            duration: 1.5
          }}
      className='flex flex-row items-center'>
        <SocialIcon
        fgColor='gray'
        bgColor='transparent'
        url="http://github.com/tamilarasanm26"
         /> 
        <SocialIcon
        fgColor='gray'
        bgColor='transparent'
        url="http://linkedin.com/in/tamilarasan-murugan-0b74a0248"
         /> 
        <SocialIcon
        fgColor='gray'
        bgColor='transparent'
        url="https://www.instagram.com/___tamill____/"
         /> 
        <SocialIcon
        fgColor='gray'
        bgColor='transparent'
        url="https://www.facebook.com/profile.php?id=100036620281385"
         /> 
         <a className='text-2xl font-bold uppercase  md:inline-flex text-lg text-gray-500 ' href="https://firebasestorage.googleapis.com/v0/b/website-f58e6.appspot.com/o/TAMILARASAN_M_.pdf?alt=media&token=a40d1532-140a-4df5-80d4-4ade1feb9424">
        CV
      </a>
      </motion.div>

<Link href="#contact">
      <motion.div 
       initial={{
        x: 500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration: 1.5
      }}
      className='flex flex-row items-center text-gray-300 cursor-pointer'>
      <SocialIcon
        className='cursor-pointer'
        fgColor='gray'
        bgColor='transparent'
        network='email'
         />
         <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
      </motion.div>
      </Link>
    </header>
  );
}
