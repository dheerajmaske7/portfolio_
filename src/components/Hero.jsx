import React from 'react';
import HeroImg from '../assets/heroimg.svg';
import { socialIcons } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Hero = () => {
  return (
    <motion.div
      className='flex md:flex-row flex-col-reverse justify-evenly items-center w-[100vw] gap-10'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeIn', duration: '1', type: 'spring' }}
      exit={{ x: '-100%' }}
    >
      <Helmet>
        <title>Dheeraj Maske - Genralist</title>
        <meta
          name='description'
          content="Hi, I'm Dheeraj maske, a web developer passionate about creating innovative web solutions. Connect with me to discuss web development and explore my projects."
        />
        {/* Open Graph tags */}
        <meta property='og:title' content="Dheeraj Maske -" />
        <meta property='og:description' content="Hi, I'm Dheeraj Maske." />
        <meta property='og:image' content={HeroImg} />
        <meta property='og:url' content='' />
        <meta property='og:type' content='website' />
        {/* Twitter Card tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content="Dheeraj Maske" />
        <meta name='twitter:description' content="Hi, I'm "/>
        <meta name='twitter:url' content='https://twitter.com/Dheeraj_maske' />
      </Helmet>

      <div className='welcome-text'>
        <h1 className='md:text-5xl text-3xl text-center font-bold text-white'>
          Hi, I'm{' '}
          <span className={`text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#EF4444] text-ellipsis`}>
            Dheeraj Maske
          </span>
        </h1>
        <div className='flex flex-row justify-evenly mt-10'>
          {socialIcons.map((item) => (
            <a href={item.link} key={item.name} target='_blank' rel='noopener noreferrer'>
              <div className='grid place-items-center rounded-[50%] w-10 h-10 cursor-pointer hover:bg-[#ef4444]'>
                <i className={`${item.class} text-white`} aria-label={item.name}></i>
              </div>
            </a>
          ))}
        </div>

        <div className='flex flex-row justify-around md:mt-10 mt-5 '>
          <Link to='/contact'>
            <button className='outline-2 text-white border-spacing-x-1  bg-[#1f1f1f] hover:bg-[#252525] rounded-lg px-3 py-2'>
              Let's Talk
            </button>
          </Link>
          <a href='https://drive.google.com/file/d/1rrxpjXe35Km6kDsbqtx0gvaiND0q05to/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
            <button className='outline-2 text-white bg-[#1f1f1f] rounded-lg hover:bg-[#252525] px-3 py-2'>
              Resume
            </button>
          </a>
        </div>
      </div>
      {/* <div className='self-img'>
        <img className='w-[70vw] lg:w-96' src={HeroImg} alt='Dheeraj Maske' />
      </div> */}
    </motion.div>
  );
};

export default Hero;
