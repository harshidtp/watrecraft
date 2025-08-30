import React from 'react'
import assets from '../assets/assets'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <div
      id='hero'
      className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'
    >
      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='inline-flex items-center gap-2 border border-gray-300 p-2 pl-4 pr-4 rounded-full shadow-xl dark:shadow-slate-500 dark:shadow-md hover:animate-ping cursor-pointer'
      >
        <p className='text-xs font-medium'>Mineral Water 💧</p>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className='text-4xl sm:text-5xl md:text-6xl xl:-text-[84px] font-medium'
      >
        Hydration you can trust.{" "}
        <span className='bg-gradient-to-r from-[#d23505] to-[#e65609] bg-clip-text text-transparent'>
          Purity
        </span>{" "}
        you can taste.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'
      >
        From nature to your bottle, we deliver water as it’s meant to be. Pure.
        Refreshing. Essential — Water for life.
      </motion.p>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className='relative'
      >
        <img
          src={assets.hero_img}
          alt=''
          className='w-full max-w-6xl rounded-3xl'
        />
        <motion.img
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1 }}
          src={assets.bgImage1}
          alt=''
          className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden'
        />
      </motion.div>
    </div>
  )
}

export default Hero
