import React, { useState } from 'react'

function CloneBox({title, skill, skill2, skill3, skill4, left2, left3, left4, contribution, worktime, detail, detail2, detail3, imgurl,vercel, git,imgurl2}) {
  
  const [isBlur, setIsBlur] = useState(false);

  return (
    <div>
      <div className="relative group mb-[22px]">
        <div className={`relative transition-all duration-[250] border text-2xl text-center ${isBlur ? 'lg:scale-105 lg:contrast-[0.25] lg:blur-sm' : ''}`} onMouseOver={()=>setIsBlur(true)} onMouseOut={()=>setIsBlur(false)}>
          <p className='p-4 font-bold hidden lg:block border-b'>{title}</p>
          <img src={`/${imgurl}.png`} alt={`${imgurl}`} className='hidden lg:block'/>
          <img src={`/${imgurl2}.png`} alt={`${imgurl2}`} className='lg:hidden'/>
        </div>
        <div className="mobilegit lg:hidden absolute text-lg flex top-0 w-[400px] h-full text-left items-center ml-64">
          <p className='mobiletitle text-[28px] basis-1/2 mr-12'>{title}</p>
          <a href={`https://${vercel}.vercel.app`} target='_blank' rel="noreferrer" className="basis-1/4">Page</a>
          <a href={`https://github.com/${git}`}  target='_blank' rel="noreferrer" className='basis-1/4'>Git</a>
        </div>
        <div className={`worktext2 w-[390px] hidden lg:block absolute top-0 z-50 opacity-0 ${isBlur && 'group-hover:opacity-100'} transition-all duration-200 text-center text-2xl`} onMouseOver={()=>setIsBlur(true)}>
          <div className={`w-full absolute text-left top-[70px]`} onMouseOut={()=>setIsBlur(false)}>
            <div className="flex w-full h-auto justify-around">
              <div className="relative">
                <img src={`/${skill}.png`} alt={`${skill}`} className='w-12'/>
                <p className='absolute top-12 text-sm left-1'>{skill}</p>
              </div>
              <div className="relative">
                <img src={`/${skill2}.png`} alt={`${skill2}`} className='w-12'/>
                <p className={`absolute top-12 text-sm ${left2}`}>{skill2}</p>
              </div>
              {
                skill3
                && <div className="relative">
                <img src={`/${skill3}.png`} alt={`${skill3}`} className='w-12 h-auto'/>
                <p className={`absolute top-12 text-sm ${left3}`}>{skill3}</p>
              </div>
              }
              {
                skill4
                && <div className="relative">
                    <img src={`/${skill4}.png
                    
                    `} alt={`${skill4}`} className='w-12 h-auto'/>
                    <p className={`absolute top-12 text-sm ${left4}`}>{skill4}</p>
                  </div>
              }
            </div>
            <div className="mt-[12px] lg:mt-8 text-center">
              <p>기여도 : {contribution}%</p>
              <p>작업기간 : {worktime}주</p>
              <p>작업내용: {detail}</p>
              <p>{detail2}</p>
              <p>{detail3}</p>
            </div>
             
          </div>
          <div className={`absolute flex justify-between w-full text-base transition-all duration-200`} onMouseOut={()=>setIsBlur(false)}>
          <a href={`https://${vercel}.vercel.app`} target='_blank' rel="noreferrer" className={`p-1 border-black hover:scale-110 transition-all duration-200 underline2`}>Page</a>
          <a href={`https://github.com/${git}`} target='_blank' rel="noreferrer" className='p-1 border-black hover:scale-110 transition-all duration-200 underline2'>Git</a>
          </div>      
        </div>
      </div>
    </div>
  )
}

export default CloneBox