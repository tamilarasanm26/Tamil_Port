import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 md:top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl'>
        Projects
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-10 md:mt-20  scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ maxWidth: '300px', maxHeight: '100%' }}
            src='/lang.png'
            alt='Language learning app'
          />
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h5 className='text-1xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>Project 1 of 5:</span>{" "}
              Language Learning App
            </h5>
          </div>
        </div>

        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ maxWidth: '300px', maxHeight: '100%' }}
            src='key.png'
            alt='keyboard app'
          />
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h5 className='text-1xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>Project 2 of 5:</span>{" "}
              Simple Keyboard
            </h5>
          </div>
        </div>
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ maxWidth: '300px', maxHeight: '100%' }}
            src='fit.png'
            alt='Fitx app'
          />
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h5 className='text-1xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>Project 3 of 5:</span>{" "}
              FITX Application
            </h5>
          </div>
        </div>
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ maxWidth: '250px', maxHeight: '100%' }}
            src='DL.png'
            alt='Fitx app'
          />
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h5 className='text-1xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>Project 4 of 5:</span>{" "}
              Dairy Lush
            </h5>
          </div>
        </div>
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ maxWidth: '280px', maxHeight: '100%' }}
            src='dementia.png'
            alt='Fitx app'
          />
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h5 className='text-1xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>Project 5 of 5:</span>{" "}
              Dairy Lush
            </h5>
          </div>
        </div>

        {/* Add more image tags for other projects */}

      </div>
      <div className='w-full absolute top-1/2 transform -translate-y-1/2 bg-[#F7AB0A]/10 left-0 h-[200px] -skew-y-12 mt-15' />
    </motion.div>
  );
}

export default Projects;
