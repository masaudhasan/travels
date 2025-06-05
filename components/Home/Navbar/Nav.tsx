"use client";
import { navLinks } from '@/constant/constant'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { TbAirBalloon } from 'react-icons/tb'

type Props={
  openNav:()=>void
}

const Nav = ({openNav}:Props) => {

  const [navBg, setNavBg]=useState(false);
  useEffect(()=>{
    const handler=()=>{
      if(window.scrollY >= 90) setNavBg(true);
      if(window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener('scroll' , handler);
    return ()=> window.removeEventListener('scroll' , handler);
  }, []);
  
  return (
    <div className={`${navBg ? "bg-blue-950 shadow-md" : "fixed"} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
        <div className='flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto'>
            {/* Logo  */}
            <div className='flex items-center space-x-2'>
                <div className='h-10 w-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
                    <TbAirBalloon className='h-6 w-6 text-white'/>
                </div>
                <h1 className='text-xl md:2xl text-white uppercase font-bold'>tripi</h1>
            </div>
            {/* Nav links */}
            <div className='hidden lg:flex items-center space-x-10'>
              {navLinks.map((link)=>{
                return (<a href={link.url} key={link.id}>
                  <p className='relative text-white text-base font-medium w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right'>{link.label}</p>
                </a>);
              })}
            </div>
            {/* Book Now button */}
            <div className='flex items-center space-x-4'>
              <button className='md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white  hover:bg-gray-200 transition-all duration-200 rounded-lg'>
                Book Now
              </button>

              {/* Burger Menu */}
              <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden '/>
            </div>
        </div>
    </div>
  )
}

export default Nav