'use client'

import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from "framer-motion"
import { fadeIn } from "./variants"

const services = [
  {
    name: 'Backend Development',
    description: 'I can help you build a backend for your website or mobile app. I can also help you with the design of your backend.',
  },
  {
    name: 'Frontend Development',
    description: 'I can help you build a frontend for your website or mobile app. I can also help you with the design of your frontend.',
  },
  {
    name: 'DevOps',
    description: 'I can help you deploy your website and host it.',
  },
];

const Services = () => {
  return (
    <div id='services' className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I am a Developer with over 2 years of experience.
            </h3>
            <button className="btn btn-sm">
              <a href="#contact" className="">See my work</a>
            </button>
          </motion.div>
          <motion.div 
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 ">
            <div className="">
              {services.map((service, index) => {
                const { name, description } = service;
                return <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                </div>
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services;