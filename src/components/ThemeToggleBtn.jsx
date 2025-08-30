import React, { useEffect } from 'react'
import assets from '../assets/assets'

function ThemeToggleBtn({theme, setTheme}) {
   useEffect(()=>{
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
   }, [])
   useEffect(()=>{
    if(theme ===  'dark'){
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')
    }
   }, [theme])


  return (
    <>
      <button>
        {theme === 'dark' ? (
            <img onClick={()=> setTheme('light')} src={assets.sun_icon} className='size-8.5 p-1.5 border border-gray-500  rounded-full' alt="" />
        ) : (
            <img onClick={()=> setTheme('dark')} src={assets.moon_icon} alt="" className='size-8.5 p-1.5 border border-gray-500  rounded-full' />
        )}
      </button>
    </>
  )
}

export default ThemeToggleBtn
