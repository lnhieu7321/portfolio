import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Imgg from '../assets/avata.png'

const skill = [
  {
    name: 'Web frontend',
    description:
      'html,css'
  },
  {
    name: 'Programming language',
    description:
      'js, java, android java, php'
  },
  {
    name: 'Database',
    description:
      'mysql,sqlserver'
  },
  {
    name: 'Tools',
    description:
      'figma, photoshop, git'
  },
  {
    name: 'Language',
    description:
      'Basic English reading and comprehension skills.'
  }
]

const Services = () => {
  return <section className='section' id='services'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
        mix-blend-lighten lg:mb-0 max-w-3xl'>
          <h2 className='h2 text-accent '>Skills I Know</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
            I am a new graduate who knows basic skills.
          </h3>
        </motion.div>
        <motion.div variants={fadeIn('left', 0.3)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}>
          {skill.map((skill, index) => {
            const { name, description } = skill;
            return (
              <div className='border-b border-white/20 h-auto mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
