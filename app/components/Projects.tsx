import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Props = {};

type Project = {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Book App',
    description: 'Platform for book lovers to search for books based on genres, add favorite books, get the book buy link, and access the e-book.',
    imgSrc: '/book.png',
    link: 'https://github.com/tamilarasanm26/Bookapp.git',
  },
  {
    id: 2,
    title: 'Language Learning App',
    description: 'A web application designed to help children to learn languages through interactive lessons and practices.',
    imgSrc: '/lang.png',
    link: 'https://github.com/tamilarasanm26/Language_Learning_application',
  },
  {
    id: 3,
    title: 'Simple Keyboard',
    description: 'A simple keyboard app for Android devices, offering customization and to protect device from fileless malware.',
    imgSrc: 'key.png',
    link: 'https://github.com/tamilarasanm26/Simple-keyboard',
  },
  {
    id: 4,
    title: 'FITX Application',
    description: 'A fitx application is website for manage gym equipment and  that helps admin to monitor gym equipment.',
    imgSrc: 'fit.png',
    link: 'https://github.com/tamilarasanm26/FITX',
  },
  {
    id: 5,
    title: 'Dairy Lush Website',
    description: 'A website developed for a dairy business to manage their products and customer orders efficiently.',
    imgSrc: 'DL.png',
    link: 'https://github.com/VigneshKandasamyOfficial/dairy_lush',
  },
  {
    id: 6,
    title: 'Classification of Dementia Disease',
    description: 'Research and development project for classifying different stage dementia using deep learning techniques.',
    imgSrc: 'dementia.png',
    link: 'https://github.com/tamilarasanm26/Classification-of-dementia-disease-using-deep-learning-techniques',
  },
];

function Projects({}: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleImageClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseCard = () => {
    setSelectedProject(null);
  };

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
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-10 md:mt-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '>
        {projects.map((project) => (
          <div
            key={project.id}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ maxWidth: '300px', maxHeight: '100%' }}
              src={project.imgSrc}
              alt={project.title}
              onClick={() => handleImageClick(project)}
              className='cursor-pointer animate-pulse'
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              
                <h5 className='text-1xl font-semibold text-center'>
                  <span className='underline decoration-[#F7AB0A]/50'>Project {project.id} of 6:</span> {project.title}
                </h5>
             
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-1/2 transform -translate-y-1/2 bg-[#F7AB0B]/10 left-0 h-[200px] -skew-y-12 mt-15' />

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-30'
          >
            <div className='bg-[#F7AB0A] bg-opacity-30 backdrop-filter backdrop-blur-lg p-5 rounded-lg shadow-lg max-w-md w-full relative border border-[#F7AB0A] border-opacity-30'>
              <button
                className='absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center'
                onClick={handleCloseCard}
              >
                &times;
              </button>
              <h3 className='text-2xl font-semibold mb-2 mt-2.5'>{selectedProject.title}</h3>
              <p className='mb-4'>{selectedProject.description}</p>
              <a href={selectedProject.link} className='inline-block bg-[#F7AB0A] text-white py-2 px-4 rounded-lg shadow hover:bg-[#e39a00]'>
                View Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Projects;
