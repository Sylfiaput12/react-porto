import { HERO_CONTENT } from '../constants/index';
import profilePic from "../assets/sylfiaProfile.jpg"
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const container =(delay) => ({
  hidden: {x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration: 0.5, delay: delay},
  }
})

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

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                variants={container(0)}
                initial='hidden'
                animate='visible'
                className="pb-9 text-5xl  tracking-tight lg:mt-10 lg:text-6xl ">
                    Sylfia Putri
                </motion.h1>
                <motion.h2 
                variants={container(0.5)}
                initial='hidden'
                animate='visible'
                className="bg-gradient-to-r from-pink-400 via-slate-300 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                    
               <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Front End Developer"
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </motion.h2>
                <motion.p
                variants={container(1)}
                initial='hidden'
                animate='visible'
                className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex justify-center'>
            <motion.img 
            // initial={{ x:100, opacity:0, }}
            // animate={{ x:0, opacity:1 }}
            transition={{ duration: 1 ,delay:1.2 }}
            src={profilePic} 
            variants={iconVariants(1)}
        initial="initial"
        animate="animate"
            alt='profile' className='rounded-3xl'/>
        </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;