import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section id='work' className="section w-full ">
      <div className="flex flex-col w-full h-full relative p-10">
        <div className='flex flex-row w-full px-48'>
          <motion.div 
          variants={fadeIn('right', 0.4)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='w-[50%]'>
            <h2 className='h2 leading-tight text-accent'>My latest<br />
              work</h2>
            <p className='max-w-sm mb-10'>lorem ipsum </p>
          </motion.div>
          <motion.div 
          variants={fadeIn('left', 0.4)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='w-[50%] pb-10'>
            <button className='btn btn-sm float-right'>View all projects</button>
          </motion.div>


        </div>

        <motion.div
        variants={fadeIn('up', 0.4)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className=' w-full flex px-[100px] '>
          <div className='w-[400px] px-8'>
            <div className='group relative overflow-hidden border-2 boreder-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className=' h-[210px] w-full group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-gradient'>UX/UI Design</span>

              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Camping</span>
              </div>
            </div>

            <div className=' p-5'>
              <button className='btn btn-sm' ><a href='https://www.figma.com/file/0k6VOo1JoJwqyAguC860nj/Untitled?type=design&node-id=0-1&mode=design&t=wwzzsRWb6nsyk2og-0'>Review</a></button>
              <button className='btn btn-sm float-right'>Source code</button>
            </div>
          </div>
          <div className='w-[400px] px-8'>
            <div className='group relative overflow-hidden border-2 boreder-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className=' h-[210px] w-full group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-gradient'>Website</span>

              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Support management website</span>
              </div>
            </div>

            <div className=' p-5'>
              <button className='btn btn-sm'>Review</button>
              <button className='btn btn-sm float-right'><a href='https://github.com/lnhieu7321/Doan'>Source code</a></button>
            </div>
          </div>
          <div className='w-[400px] px-8'>
            <div className='group relative overflow-hidden border-2 boreder-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className=' h-[210px] w-full group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-gradient'>Application</span>

              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>social networking application</span>
              </div>
            </div>

            <div className=' p-5'>
              <button className='btn btn-sm'>Review</button>
              <button className='btn btn-sm float-right'><a href='https://github.com/lnhieu7321/Tikkey/tree/main/IntagramApp/'>Source code</a></button>
            </div>
          </div>
          
        </motion.div>

      </div>

    </section>
  );
};

export default Work;
