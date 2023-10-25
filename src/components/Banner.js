import React from 'react';



import { FaGithub, FaFacebook, FaYoutube, FaGoogleDrive, FaFacebookMessenger, FaVoicemail, FaGg } from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';
import image from '../assets/avata.png';


const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12' >


        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 variants={fadeIn('up', 0.3)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className=' text-[40px] font-bold leading-[0.8] lg:text-[90px] pb-5'>
            Le Ngoc Hieu
          </motion.h1>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-[36px] lg:text-[60] font-secondary font-semibold uppercase leading-[1] '>
            <span className='text-white mi-4'>
              I am a
            </span>
            <TypeAnimation sequence={[
              ' Application(Intern)', 2000,
              ' Frontend(Intern)', 2000,
              ' Backend(Intern)', 2000,
            ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity} />
          </motion.div>

          <motion.p
            variants={fadeIn('up', 0.6)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-8 max-x-lg mx-auto lg:mx-0'>
            - Continuously learn to improve programming knowledge
            to develop professional skills. Accumulate more
            experience during internship.<br />
            - Working in a professional environment, being able to
            develop capacity most effectively, and being able to stick
            with it for a long time.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.7)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg' >
              Contact me
              </button>
            {/*<button className='btn btn-lg' >Download CV</button>*/}
            <a href="#" className='text-gradient btn-link'>My Portfolio</a>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.8)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] max-w-max gap-x-6 mx-auto lg:mx-0'>
            <a href="https://www.facebook.com/ngochieu7321"><FaFacebook /></a>
            <a href="https://github.com/lnhieu7321"><FaGithub /></a>
            <a href="https://drive.google.com/drive/folders/13YtPYn1XUW1wnp6_-XTFuC3oz3FKlGxs?usp=sharing"><FaGoogleDrive /></a>

          </motion.div>
        </div>


        <motion.div
          variants={fadeIn('down', 0.5)}
          initial={'hidden'}
          whileInView={'show'} className='hidden lg:flex items-center flex-1 max-w-[320px] lg:max-w-[428px]'>
          <img src={image} alt="" width={250} height={250} />

        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
