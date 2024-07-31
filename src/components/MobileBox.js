import React from 'react'

function MobileBox({basis, skill, iconw, color, num, num2, num3, ttop}) {
  return (
    <div className={`relative ${num3} flex justify-center ${basis} group`}>
      <img src={`/${skill}.png`} alt={`${skill}`} className={`${iconw}`}/>
      <div className={`inline-block w-4 h-4 ${color} rounded-full absolute left-[152px] ${ttop}`}></div>
      <p className={`absolute ${num} ${num2}`}>{skill}</p>
    </div>
  
  )
}

export default MobileBox