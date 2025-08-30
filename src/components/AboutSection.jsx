import React from 'react'
import { motion } from 'framer-motion'
import assets from '../assets/assets'

const AboutSection = () => {
  return (
    <div id='about' className="flex flex-col md:flex-row items-center md:items-start md:gap-x-10 
      px-4 sm:px-6 md:px-10 
      my-10 sm:my-14 md:my-20 lg:my-50 
      mx-0 sm:mx-6 md:mx-10 lg:mx-50 
      ml-0 sm:ml-6 md:ml-10 lg:ml-70">
      
      {/* Picture on the left (centered on small screens) */}
      <motion.img
        src={assets.about_img}
        alt="WaterCraft Mineral Water"
        className="w-60 sm:w-1/2 md:w-80 lg:w-90 
        h-auto mb-6 md:mb-0 
        rounded-xl shadow-md 
        mx-auto md:mx-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      {/* Text on the right */}
      <div className="flex-1 
        mt-6 md:mt-0 
        md:ml-10 lg:ml-20 
        text-center md:text-left">
        
        <motion.h2
          className="text-4xl sm:text-3xl md:text-5xl 
          font-bold 
          mb-6 sm:mb-8 md:mb-10 
          text-gray-800 dark:text-white/80"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Watercraft Mineral Water
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg 
          mb-4 text-gray-700 leading-relaxed dark:text-white/45"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <span className="font-extrabold">WaterCraft Mineral Water</span> 
          water supply company dedicated to delivering safe, great-tasting packaged drinking water to homes, offices, and businesses across Calicut, Mukkam, and Areekode. From source to seal, every drop passes through multi-stage purification and rigorous quality checks, so you enjoy pure, consistent hydration—every time.
We’re proudly community-driven: fast deliveries, responsive support, and reliable service schedules that keep your day flowing. With a focus on clean processes and responsible packaging, we aim to keep both our customers and our environment refreshed.
Whether it’s daily drinking needs, events, or bulk orders, count on Watercraft for purity you can taste and reliability you can trust.
<br/> 
<a
  href="tel:+919037747010"
  className="inline-block mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded-full shadow-lg hover:bg-red-700 transition duration-300"
>
  📞 Call: +91 90 3774 7010
</a>

        </motion.p>
      </div>
    </div>
  )
}

export default AboutSection
