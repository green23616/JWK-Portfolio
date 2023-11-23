import React from 'react'

function MobileBox({basis, skill, iconw, color, num, num2, num3, ttop}) {
  return (
    <div className={`relative ${num3} flex justify-center ${basis} group`}>
      <img src={`/${skill}.png`} alt={`${skill}`} className={`${iconw}`}/>
      <div className={`inline-block w-4 h-4 ${color} rounded-full absolute left-[152px] ${ttop}`}></div>
      <p className={`absolute ${num} ${num2}`}>{skill}</p>
      <div className={`absolute top-[12px] -right-[24px] lg:right-[1px] w-20 h-12 bg-blue-300/75 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-200`}>
        <p className='absolute text-sm top-3 ml-2'>{skill}</p>
      </div>
    </div>
  
  )
}

export default MobileBox