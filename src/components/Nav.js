import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  
  const [isClass, setIsClass] = useState('');

  useEffect(() => {
    const checkViewportWidth = () => {
      if (window.innerWidth <= 1280) {
        setIsClass('1');
      }
      else{
        setIsClass('')
      }
    }
    checkViewportWidth();
    window.addEventListener('resize', checkViewportWidth);
    return () => {
      window.removeEventListener('resize', checkViewportWidth);
    }
  },[]);

  return (
    <>
    <div className={`header 2xl:fixed text-2xl md:text-3xl 2xl:text-4xl 2xl:p-5 2xl:mt-48 2xl:ml-24 2xl:border-t 2xl:border-b max-w-[700px] md:max-w-[1200px] mx-auto 2xl-[652px]`}>
      <ul className="flex 2xl:flex-col justify-around 2xl:h-[512px] my-12">
        <li className={`2xl:absolute 2xl:-top-[110px] text-3xl md:text-5xl xl:text-6xl`} style={{fontFamily: "GmarketSansBold"}}><Link to="/">재완()</Link></li>
        <li className={`about${isClass}`}><NavLink to="/about">About</NavLink></li>
        <li className={`skill${isClass}`}><NavLink to="/skill">Skill</NavLink></li>
        <li className={`work${isClass}`}><NavLink to="/work">Work</NavLink></li>
        <li className={`contact${isClass}`}><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </div>
    </>
  )
}

export default Nav