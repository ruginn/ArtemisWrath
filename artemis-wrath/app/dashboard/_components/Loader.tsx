'use client';

import { Variants, motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className='grid place-content-center px-4 py-24'>
      <BarLoader />
    </div>
  );
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 1,
      ease: 'circIn',
    },
  },
} as Variants;

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial='initial'
      animate='animate'
      className='flex gap-1'
    >
      <motion.div
        variants={variants}
        className='h-24 w-8 bg-gray-400 flex justify-center items-center'
      >
        W
      </motion.div>
      <motion.div
        variants={variants}
        className='h-24 w-8 bg-gray-400 flex justify-center items-center'
      >
        R
      </motion.div>
      <motion.div
        variants={variants}
        className='h-24 w-8 bg-gray-400 flex justify-center items-center'
      >
        A
      </motion.div>
      <motion.div
        variants={variants}
        className='h-24 w-8 bg-gray-400 flex justify-center items-center'
      >
        T
      </motion.div>
      <motion.div
        variants={variants}
        className='h-24 w-8 bg-gray-400 flex justify-center items-center'
      >
        H
      </motion.div>
    </motion.div>
  );
};

export default Loader;
