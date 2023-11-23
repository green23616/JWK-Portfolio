import React, { useState } from 'react'

function TeamBox() {

  const [isBlur, setIsBlur] = useState(false);

  return (
    <>
      <div className="container ml-5 basis-[48%] md:basis-[35%] h-full relative group ">
        <div className={`transition-all duration-[250] border w-full top-0 text-3xl text-center ${isBlur ? 'scale-105 blur-sm' : ''}`} onMouseOver={()=>setIsBlur(true)} onMouseOut={()=>setIsBlur(false)}>
          <p className='p-4 font-bold'>Hello Vanilla</p>
          <img src="https://via.placeholder.com/400x280" alt="hellovanilla"/>
          <div className="w-full h-[45%] mt-20 text-left p-5 relative">
            <img src="/images/react.svg" alt="react" className='w-20 h-12 absolute top-[-60px] left-2'/>
            <img src="/images/firebase.png" alt="firebase" className='w-24 md:w-[114px] h-7 md:h-9 absolute -top-12 md:-top-14 left-[87px] z-50'/>
            <p className='absolute -top-[46px] md:-top-[50px] right-20 md:right-[98px] text-lg md:text-2xl'>JS</p>
            <img src="/images/styled.svg" alt="styled" className='w-16 h-16 absolute top-[-68px] right-2'/>
            <div className="worktext ml-5 md:ml-5">
              <p>기여도 : 30%</p>
              <p>작업기간 : 4주</p>
              <p>작업내용: 외부 라이브러리 구현</p>
              <p>페르소나 및 컨텐츠 제작</p>
              <p>Detail 페이지 제작</p>
            </div>
          </div>
        </div>
        <div className={`absolute top-0 left-12 md:left-[75px] z-50 opacity-0 
        ${isBlur && 'group-hover:opacity-100'} transition-all duration-200 text-center text-2xl mt-[334px]`} onMouseOver={()=>setIsBlur(true)} onMouseOut={()=>setIsBlur(false)}>
          <a href="https://hello-vanilla.vercel.app" target='_blank' rel="noreferrer" className='inline-block p-2 mr-16 border-b-2 border-black' >Page</a>
          <a href="https://github.com/the02196/hello_vanilla"  target='_blank' rel="noreferrer" className='inline-block p-2 border-b-2 border-black'>Git</a>
        </div>
      </div>
    </>
  )
}

export default TeamBox
