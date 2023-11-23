import React from 'react'
import Quotes from '../components/Quotes'

function Contact() {
  return (
    <>
    <div className="container 2xl:top-48 overflow-hidden max-w-[697px] md:max-w-[1200px] h-[652px] relative flex gap-x-6 mx-auto">
      <div className="ml-2 lg:ml-0 basis-[55%] lg:basis-1/3 hidden md:block">
        <div className="border h-full">
          <Quotes/>
        </div>
      </div>
      <div className="basis-[40%] lg:basis-1/3 relative">
        <div className="border w-full h-[48%] absolute top-0 flex items-center flex-col justify-center gap-y-16">
          <p className='text-3xl xl:text-4xl'>TEL</p>
          <p className='text-[22px] xl:text-2xl'>010-7594-0339</p>
        </div>
        <div className="border w-full h-[48%] absolute bottom-0 flex items-center flex-col justify-center gap-y-16">
          <p className='text-3xl 2xl:text-4xl'>Email</p>
          <p className='text-base 2xl:text-2xl'><a href="emailto:green23616@gmail.com">green23616@gmail.com</a></p>
        </div>
      </div>
      <div className="hidden lg:block basis-1/3">
        <div className="border h-full">
          <img src="" alt="" sizes=""/>
          <img src="/1319.jpeg" alt="challenge" className='w-full grayscale'/>
        </div>
      </div>
      <div className="md:hidden block basis-[70%]">
        <div className="border h-full">
          <img src="/1322.jpeg" alt="challenge2" className='w-full grayscale'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact