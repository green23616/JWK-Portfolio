import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logo() {

  const navigate = useNavigate();

  return (
    <>
    <div className="logo fixed left-10 md:left-9 xl:left-28 top-[72px] md:top-[70px] xl:top-20 cursor-pointer" onClick={() =>navigate('/')}>
      <span className=''>재완</span>
      <span className=''>()</span>
    </div>
    </>
  )
}

export default Logo