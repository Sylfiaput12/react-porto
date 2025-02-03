import React from 'react'
import { FaBootstrap, FaLaravel, FaPhp } from 'react-icons/fa'
import { RiJavascriptFill, RiReactjsLine } from 'react-icons/ri'
import { SiMysql } from 'react-icons/si'
import {motion} from 'framer-motion'

const iconVariants =(duration) => ({
  initial: {y:-10},
  animate:{
    y: [10, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "linear",
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <motion.h1
      whileInView= {{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className='my-20 text-center text-3xl'>Technologies</motion.h1>
      <motion.div
      whileInView= {{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className='text-4xl text-cyan-400' />
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaPhp className='text-4xl text-blue-400' />
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaBootstrap className='text-4xl text-purple-400' />
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiMysql  className='text-4xl text-blue-700' />
        </motion.div>
        <motion.div
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiJavascriptFill className='text-4xl text-green-400' />
        </motion.div>
        <motion.div
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaLaravel className='text-4xl text-orange-400' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
