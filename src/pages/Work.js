import { faUsers, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'

function Work() {
  const navigate = useNavigate();
  const location = useLocation();
  const showOutlet = location.pathname === '/work/cloning'
  const showTeam = location.pathname === '/work/team'
  const showToy = location.pathname === '/work/toy'
  const hideContent = showOutlet || showTeam || showToy
  return (
    <>
    {
    !hideContent &&
    <div className="container 2xl:top-48 mx-auto max-w-[697px] md:max-w-[1200px] h-[665px] md:h-[652px] relative md:flex gap-x-6 cursor-pointer">
      <div className="border basis-[31%] md:basis-1/3 h-[31%] md:h-full mb-4 md:mb-0 hover:scale-105 transition-all duration-200" onClick={()=>navigate('/work/team')}>
        <div className="h-1/3 md:h-full text-center text-4xl ">
          <p className='-translate-x-[8%] md:translate-x-0 translate-y-[220%] md:translate-y-[820%]' style={{fontFamily:"GmarketSansBold"}}>
           Project
          </p>
          <FontAwesomeIcon icon={faUsers} size='xl md:2xl' className='mt-11 md:mt-20 ml-40 md:ml-0'></FontAwesomeIcon>
        </div>
      </div>
      <div className="border basis-[31%] md:basis-1/3 h-[31%] md:h-full mb-4 md:mb-0 hover:scale-105 transition-all duration-200" onClick={()=>navigate('/work/cloning')}>
      <div className="h-1/3 md:h-full text-center text-4xl cursor-pointer">
          <p className='-translate-x-[8%] md:translate-x-0 translate-y-[220%] md:translate-y-[820%]' style={{fontFamily:"GmarketSansBold"}}>
            Cloning
          </p>
          <FontAwesomeIcon icon={faDesktop} size='xl md:2xl' className='mt-11 md:mt-20 ml-40 md:ml-0'></FontAwesomeIcon>
        </div>
      </div>
      
    </div>
    }
    <Outlet/>
      <div className="navv hidden md:block absolute text-base xl:text-base top-[102px] 2xl:top-[620px] left-[55%] 2xl:left-[168px]">
        <ul className='flex 2xl:block gap-x-6'>  
          <li className='team text-md cursor-pointer pb-1' onClick={()=>navigate('/work/team')} style={{ fontFamily: showTeam && 'GmarketSansBold'}}> ▻ Project</li>
          <li className='cloning text-md cursor-pointer pb-1' onClick={()=>navigate('/work/cloning')} style={{ fontFamily: showOutlet && 'GmarketSansBold' }}>▻ Cloning</li>
        </ul>
      </div>
    </>
  )
}

export default Work
