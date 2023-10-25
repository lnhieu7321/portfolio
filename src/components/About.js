import React from 'react';


import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return <section className='section' id='about' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row'>
        <motion.div variants={fadeIn('down', 0.3)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }} className="flex-1 bg-about bg-contain bg-no-repeat h-[600px] mix-blend-lighten bg-top">

        </motion.div>
        <div className='flex-1'>
          <motion.h2 
          variants={fadeIn('up', 0.3)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }} className='h2 text-accent'>About me.</motion.h2>
          <motion.h3 
          variants={fadeIn('up', 0.4)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }} className='h3 mb-4'>INTEREST</motion.h3>
          <motion.p variants={fadeIn('up', 0.5)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}>- Listening to music<br />
            - Read adventure books, fantasy, comics.<br />
            - Play games, travel.
          </motion.p>
          <motion.h3 variants={fadeIn('up', 0.6)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }} className='h3 mb-4'>INFORMATION</motion.h3>
          <motion.p variants={fadeIn('up', 0.7)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}>- Birth-of-day: 07/03/2001<br />
            - Education: University of Technical Education - Danang University<br/>
            - Email: lengochieu732001@gmail.com<br />
            - Phone: +84-785-406-231<br />
            - Address: Hoa Bac- Hoa Vang - Da Nang
          </motion.p>

          <motion.div
            variants={fadeIn('up', 0.8)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }} className='flex mt-2 max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact me</button>
            <a href="#" className='text-gradient btn-link'>My Portfolio</a>
          </motion.div>
        </div>

      </div>
    </div>
  </section>;
};

export default About;
