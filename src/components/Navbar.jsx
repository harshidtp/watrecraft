import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { style } from 'framer-motion/client'

export default function Navbar({ theme, setTheme }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      {/* Logo */}
      <img 
  src={theme === 'dark' ? assets.logo_dark : assets.logo} 
  alt="Logo"  
  className={theme === 'dark' ? 'w-45 h-11' : 'w-45 h-10'} 
/>

      {/* Sidebar / Nav links */}
      <div
        className={[
          // base
          'text-gray-700 dark:text-white sm:text-sm flex gap-8 transition-transform duration-300',
          // desktop (inline)
          'sm:static sm:items-center sm:translate-x-0 sm:z-auto',
          // mobile drawer
          'max-sm:fixed max-sm:right-0 max-sm:top-0 max-sm:bottom-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:pt-20 max-sm:z-40',
          // background color for sidebar (blue)
          'max-sm:bg-primary max-sm:text-white',
          // slide toggle
          sidebarOpen
            ? 'max-sm:w-60 max-sm:pl-10 max-sm:translate-x-0'
            : 'max-sm:w-60 max-sm:pl-10 max-sm:translate-x-full',
        ].join(' ')}
      >
        {/* Close button (mobile only) */}
        <img
          src={assets.close_icon}
          alt="Close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />
<a onClick={()=> setSidebarOpen(false)} href="#" className="sm:border-b-2 sm:border-transparent hover:border-red-500 pb-0.5 transition-colors duration-300">
  Home
</a>
<a onClick={()=> setSidebarOpen(false)} href="#about" className="sm:border-b-2 sm:border-transparent hover:border-red-500 pb-0.5 transition-colors duration-300">
About us
</a>
<a onClick={()=> setSidebarOpen(false)} href="#products" className="sm:border-b-2 sm:border-transparent hover:border-red-500 pb-0.5 transition-colors duration-300">
  Our Products
</a>
<a onClick={()=> setSidebarOpen(false)} href="#contact" className="sm:border-b-2 sm:border-transparent hover:border-red-500 pb-0.5 transition-colors duration-300">
  Contact Us
</a>


      </div>

      {/* Right section */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Open button (mobile) */}

         <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
        <img
          src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
          alt="Menu"
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden cursor-pointer"
        />

        {/* Connect button (desktop only) */}
        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-transform"
        >
          Connect <img src={assets.arrow_icon} width={14} alt="Arrow" />
        </a>
      </div>
    </div>
  )
}
