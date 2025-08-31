import React, { useState, useEffect } from 'react'
import assets from '../assets/assets'

export default function Navbar({ theme, setTheme }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => (document.body.style.overflow = '')
  }, [sidebarOpen])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      {/* Logo */}
      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        alt="Logo"
        className={theme === 'dark' ? 'w-45 h-11' : 'w-45 h-10'}
      />

      {/* Sidebar / Nav links */}
      <nav
        className={[
          // base
          'text-gray-700 dark:text-white sm:text-sm flex gap-8 transition-transform duration-300',
          // desktop inline
          'sm:static sm:items-center sm:translate-x-0 sm:z-auto',
          // mobile drawer
          'max-sm:fixed max-sm:right-0 max-sm:top-0 max-sm:bottom-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:pt-20 max-sm:z-40',
          // background for sidebar
          'max-sm:bg-primary max-sm:text-white',
          // slide toggle
          sidebarOpen
            ? 'max-sm:w-60 max-sm:pl-10 max-sm:translate-x-0'
            : 'max-sm:w-60 max-sm:pl-10 max-sm:translate-x-full',
        ].join(' ')}
      >
        {/* Close button (mobile only, inside sidebar) */}
        {sidebarOpen && (
          <button
            type="button"
            aria-label="Close menu"
            className="absolute right-4 top-4 sm:hidden cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" />
            </svg>
          </button>
        )}

        <a
          onClick={() => setSidebarOpen(false)}
          href="#"
          className="sm:border-b-2 sm:border-transparent hover:border-red-500 pb-0.5 transition-colors duration-300"
        >
          Home
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#about"
          className="sm:border-b-2 sm:border-transparent hover:border-red-500 pb-0.5 transition-colors duration-300"
        >
          About us
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#products"
          className="sm:border-b-2 sm:border-transparent hover:border-red-500 pb-0.5 transition-colors duration-300"
        >
          Our Products
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#contact"
          className="sm:border-b-2 sm:border-transparent hover:border-red-500 pb-0.5 transition-colors duration-300"
        >
          Contact Us
        </a>
      </nav>

      {/* Right section */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Theme toggle with Sun/Moon */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-full border border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            // Sun icon
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
              viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="4" strokeWidth="2" />
              <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.64 5.64l-1.41-1.41M19.78 19.78l-1.41-1.41M5.64 18.36l-1.41 1.41M19.78 4.22l-1.41 1.41" strokeWidth="2" />
            </svg>
          ) : (
            // Moon icon
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
              viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeWidth="2" />
            </svg>
          )}
        </button>

        {/* Mobile: Hamburger (open menu) */}
        {!sidebarOpen && (
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
            className="w-8 sm:hidden cursor-pointer p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"
              viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" />
            </svg>
          </button>
        )}

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
