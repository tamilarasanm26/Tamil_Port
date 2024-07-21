'use client';
import { SocialIcon } from 'react-social-icons';
// Change import statement
// import "./style.module.css";
import { motion } from 'framer-motion';
import Link from 'next/link';
//import { Social } from '../../../typings';


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
         /> {/* Make sure to add http:// or https:// */}
        <SocialIcon
        fgColor='gray'
        bgColor='transparent'
        url="http://linkedin.com/in/tamilarasan-murugan-0b74a0248"
         /> {/* Make sure to add http:// or https:// */}
        <SocialIcon
        fgColor='gray'
        bgColor='transparent'
        url="https://www.instagram.com/___tamill____/"
         /> {/* Make sure to add http:// or https:// */}
        <SocialIcon
        fgColor='gray'
        bgColor='transparent'
        url="https://www.facebook.com/profile.php?id=100036620281385"
         /> {/* Make sure to add http:// or https:// */}
         <a className='text-2xl font-bold uppercase  md:inline-flex text-lg text-gray-500 ' download href="/TAMILARASAN Resume.pdf">
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
