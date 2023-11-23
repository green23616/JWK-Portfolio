import React from 'react'

function Main() {
  return (
    <>
    <div className="container 2xl:top-48 h-[650px] overflow-hidden md:max-w-[1000px] xl:max-w-[1200px] relative flex gap-x-6 mx-auto">
      <div className="basis-full md:basis-1/3">
        <div className="border h-full">
          <img src="/Code typing-bro1.png" alt="1" className=' hidden md:block'/>
          <img src="/Code typing-bro-m.png" alt="m1" className='md:hidden'/>
        </div>
      </div>
      <div className="border basis-1/3 hidden md:block">
        <div className="h-full">
          <img src="/Code typing-bro2.png" alt="2" /> 
        </div>
      </div>
      <div className="border basis-1/3 hidden md:block">
        <div className="h-full">
         <img src="/Code typing-bro3.png" alt="3" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Main