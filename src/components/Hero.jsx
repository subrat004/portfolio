import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import Socials from './Socials';

const ResumeLink = () => (
  <motion.div
    className="mt-5"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <a
      href="https://drive.google.com/file/d/1IzgxBPb_-tuSUb2d5ZIk9trqGal5fNpl/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 text-lg font-semibold text-white bg-[#915EEF] rounded-full shadow-lg hover:bg-[#7C4DFF] transition-colors duration-300 ease-in-out"
    >
      <span className="mr-2">📄</span>
      View My Resume
    </a>
  </motion.div>
);

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EEF]'>SUBRAT </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
          <div className="mt-5">
            <p className="text-lg text-gray-300 max-w-3xl">
              As a passionate developer, I specialize in creating immersive digital solutions that push the boundaries of what's possible on the web. My expertise spans:
            </p>
            <ul className="mt-3 list-disc list-inside text-gray-300 space-y-2">
              <li><span className="text-[#915EEF] font-semibold">3D Visuals:</span> Bringing depth and interactivity to web experiences</li>
              <li><span className="text-[#915EEF] font-semibold">User Interfaces:</span> Designing intuitive and beautiful interfaces that users love</li>
              <li><span className="text-[#915EEF] font-semibold">Web Applications:</span> Building robust, scalable applications that solve real-world problems</li>
            </ul>
          </div>
          <ResumeLink />
          <h1 className={`${styles.heroHeadText} text-white mt-10`}>
            <span className='text-[#915EEF]'>Let's Connect </span>
          </h1>
          <div>
            <Socials/>
          </div>
        </div>
      </div>
      <div>
        <p className='text-[#915EEF] pt-10'>Reach out on</p>
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;