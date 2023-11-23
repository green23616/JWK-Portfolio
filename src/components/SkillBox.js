import React from 'react'

function SkillBox({skill, color, detail}) {
  return (
    <li className='relative mb-3'>
      <img src={`/images/${skill}.png`} alt={`${skill}`} className='w-16 inline-block mr-10'/>
      <span className='text-xl mr-10'>‣ {skill}</span>
      <div className={`inline-block absolute top-1 w-5 h-5 ${color} rounded-full`}></div>
      <p className='text-sm m-2'>{detail}</p>
    </li>
  )
}

export default SkillBox