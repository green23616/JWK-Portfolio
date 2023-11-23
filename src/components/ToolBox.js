import React from 'react'

function ToolBox({skill, color , num}) {
  return (
    <div className="relative">
      <img src={`/images/${skill}.svg`} alt={`${skill}`} className='w-7 mr-10'/>
      <p className={`-left-[4px] text-xs absolute`}>{skill}</p>
      <div className={`inline-block w-2 h-2 ${color} rounded-full absolute ${num} -bottom-3`}></div>
    </div>
    
  )
}

export default ToolBox