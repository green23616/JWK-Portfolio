import React from 'react'
import MobileBox from '../components/MobileBox'

function Skill() {
  return (
  <>        
    <div className="hidden lg:block">
      <div className="container 2xl:top-48 mx-auto max-w-[697px] md:max-w-[1200px] h-[665px] md:h-[652px] relative md:flex gap-x-6">
      <div className="absolute top-[-60px] 2xl:top-[-110px] left-[32.5%]">
        <div className="flex px-6 gap-x-4 ml-8 pt-2 pb-8 text-2xl">
          <div className="w-7 h-7 bg-green-500 rounded-full"></div>
          <p>숙련</p>
          <div className="w-7 h-7 bg-blue-500 rounded-full"></div>
          <p>가능</p>
          <div className="w-7 h-7 bg-yellow-400 rounded-full"></div>
          <p>경험</p>
        </div>
      </div>
        <div className="border basis-[31%] md:basis-1/3 h-[31%] md:h-full mb-4 md:mb-0">
          <p className='inline-block px-2 py-6 ml-4 text-3xl font-bold'>Frontend</p>
          <div className="flex w-full flex-wrap justify-start">
          <MobileBox iconw="w-20" basis="basis-1/2" skill="react" color="bg-green-500" ttop="top-24" num3="p-16" num="bottom-8" num2="left-[71px]"/>
          <MobileBox iconw="w-20" basis="basis-1/2" skill="Javascript" color="bg-green-500" ttop="top-24" num3="p-16" num="bottom-8" num2="left-[58px]"/>
            <MobileBox iconw="w-16" num3="p-10" ttop="top-24" basis="basis-1/2" skill="tailwindcss" color="bg-green-500" num="bottom-4" num2="left-[43px]"/>
            <MobileBox iconw="w-16" num3="p-10" ttop="top-24" basis="basis-1/2" skill="Next.js" color="bg-blue-500" num="bottom-3" num2="left-[67px]"/>
            <MobileBox iconw="w-16" num3="p-12" ttop="top-24" basis="basis-1/2" skill="typescript" color="bg-blue-500" num="bottom-5" num2="left-[49px]"/>
            <MobileBox iconw="w-16" num3="p-12" ttop="top-24" basis="basis-1/2" skill="styled" color="bg-green-500" num="bottom-5" num2="left-[67px]"/>
          </div>
        </div>
        <div className="border basis-[31%] md:basis-1/3 h-[31%] md:h-full mb-4 md:mb-0">
          <div className="text-left">
            <p className='ml-4 px-2 py-6 text-3xl font-bold'>
              Backend
            </p>
            <div className="flex w-full flex-wrap justify-start">
              <MobileBox iconw="w-20" basis="basis-1/2" skill="firebase" color="bg-blue-500" ttop="top-24" num3="p-16" num="bottom-8" num2="left-[58px]"/>
              <MobileBox iconw="w-16" basis="basis-1/2" skill="mongodb" color="bg-blue-500" ttop="top-24" num3="p-16" num="bottom-8" num2="left-[58px]"/>
              <MobileBox iconw="w-16" basis="basis-1/2" skill="Axios" color="bg-blue-500" ttop="top-20" num3="p-12" num="bottom-5" num2="left-[73px]"/>
              <MobileBox iconw="w-16" basis="basis-1/2" skill="node.js" color="bg-blue-500" ttop="top-20" num3="p-12" num="bottom-5" num2="left-[65px]"/>
              <MobileBox iconw="w-16" basis="basis-1/2" skill="mysql" color="bg-blue-500" ttop="top-20" num3="p-12" num="bottom-6" num2="left-[62px]"/>
              <MobileBox iconw="w-16" basis="basis-1/2" skill="mariadb" color="bg-yellow-400" ttop="top-20" num3="p-12" num="bottom-6" num2="left-[62px]"/>
            </div>
          </div>
        </div>
        <div className="border basis-[31%] md:basis-1/3 h-[31%] md:h-full mb-4 md:mb-0">
          <div className="text-left">
            <p className='ml-4 px-2 py-6 text-3xl font-bold'>
              Tools
            </p>
            <div className="flex w-full flex-wrap justify-start">
              <MobileBox iconw="w-16" basis="basis-1/2" skill="git" color="bg-green-500" ttop="top-24" num3="p-16" num="bottom-8" num2="left-[82px]"/>
              <MobileBox iconw="w-16" basis="basis-1/2" skill="figma" color="bg-green-500" ttop="top-24" num3="p-16" num="bottom-8" num2="left-[68px]"/>
              <MobileBox iconw="w-16" basis="basis-1/2" skill="notion" color="bg-green-500" ttop="top-16" num3="p-12" num="bottom-5" num2="left-[68px]"/>
              <MobileBox iconw="w-16" basis="basis-1/2" skill="slack" color="bg-blue-500" ttop="top-16" num3="p-12" num="bottom-5" num2="left-[70px]"/>
              <MobileBox iconw="w-16" basis="basis-1/2" skill="postman" color="bg-blue-500" ttop="top-16" num3="p-12" num="bottom-5" num2="left-[57px]"/>
              <MobileBox iconw="w-16" basis="basis-1/2" skill="vercel" color="bg-blue-500" ttop="top-16" num3="p-12" num="bottom-5" num2="left-[67px]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* mobile */}
    <div className="lg:hidden">
      <div className="container mx-auto max-w-[697px] relative gap-x-6">
        <div className="border mb-4 w-full">
          <p className='inline-block mt-4 ml-4 text-3xl font-bold'>Frontend</p>
          <div className="absolute top-[-50px] left-[25.5%]">
            <div className="flex px-6 gap-x-4 ml-8 pt-2 pb-8 text-xl">
              <div className="w-5 h-5 bg-green-500 rounded-full"></div>
              <p>숙련</p>
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              <p>가능</p>
              <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
              <p>경험</p>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-start">
            <MobileBox iconw="w-12" ttop="top-4" num3="pb-8" basis="basis-1/3" skill="react" color="bg-green-500" num="bottom-2" num2="left-[90px]"/>
            <MobileBox iconw="w-12" ttop="top-4" num3="pb-8" basis="basis-1/3" skill="Next.js" color="bg-green-500" num="bottom-2" num2="left-[67px]"/>
            <MobileBox iconw="w-12" ttop="top-4" num3="pb-8" basis="basis-1/3" skill="Javascript" color="bg-green-500" num="bottom-2" num2="left-[67px]"/>
            <MobileBox iconw="w-12" ttop="top-4" num3="pb-8" basis="basis-1/3" skill="tailwindcss" color="bg-green-500" num="bottom-2" num2="left-[63px]"/>
            <MobileBox iconw="w-12" ttop="top-4" num3="pb-8" basis="basis-1/3" skill="typescript" color="bg-blue-500" num="bottom-2" num2="left-[67px]"/>
            <MobileBox iconw="w-12" ttop="top-4" num3="pb-8" basis="basis-1/3" skill="styled" color="bg-blue-500" num="bottom-2" num2="left-[86px]"/>
          </div>
        </div>
        <div className="border h-[31%] mb-4 pb-4">
          <div className="text-left">
            <p className='mt-4 ml-4 text-3xl font-bold'>
              Backend
            </p>
            <div className="flex w-full flex-wrap justify-start">
              <MobileBox iconw="w-12" num3="pb-8" basis="basis-1/3" skill="firebase" ttop="top-4" color="bg-blue-500" num="bottom-2" num2="left-[78px]"/>
              <MobileBox iconw="w-12" num3="pb-8" basis="basis-1/3" skill="mongodb" ttop="top-4" color="bg-blue-500" num="bottom-2" num2="left-[72px]"/>
              <MobileBox iconw="w-12" num3="pb-8" basis="basis-1/3" skill="Axios" ttop="top-4" color="bg-blue-500" num="bottom-2" num2="left-[93px]"/>
              <MobileBox iconw="w-12" basis="basis-1/3" skill="node.js" color="bg-yellow-400" ttop="top-4" num3="pb-8" num="bottom-2" num2="left-[87px]"/>
              <MobileBox iconw="w-12" num3="pb-8" basis="basis-1/3" skill="mysql" ttop="top-4" color="bg-yellow-400" num="bottom-2" num2="left-[81px]"/>
              <MobileBox iconw="w-12" num3="pb-8" basis="basis-1/3" skill="mariadb" ttop="top-4" color="bg-yellow-400" num="bottom-2" num2="left-[81px]"/>
            </div>
          </div>
        </div>
        <div className="border h-[31%] mb-4 pb-4">
          <div className="text-left">
            <p className='mt-4 ml-4 text-3xl font-bold'>
              Tools
            </p>
            <div className="flex w-full flex-wrap justify-start">
              <MobileBox iconw="w-12" num3="pb-8" basis="basis-1/3" skill="git" ttop="top-4" color="bg-green-500" num="bottom-2" num2="left-[100px]"/>
              <MobileBox iconw="w-12" num3="pb-8" basis="basis-1/3" skill="figma" ttop="top-4" color="bg-green-500" num="bottom-2" num2="left-[88px]"/>
              <MobileBox iconw="w-12" num3="pb-8" basis="basis-1/3" skill="notion" ttop="top-4" color="bg-green-500" num="bottom-2" num2="left-[88px]"/>
              <MobileBox iconw="w-12" num3="pb-8" basis="basis-1/3" skill="slack" ttop="top-4" color="bg-green-500" num="bottom-2" num2="left-[91px]"/>
              <MobileBox iconw="w-12" num3="pb-8" basis="basis-1/3" skill="postman" ttop="top-4" color="bg-blue-500" num="bottom-2" num2="left-[77px]"/>
              <MobileBox iconw="w-12" num3="pb-8" basis="basis-1/3" skill="vercel" ttop="top-4" color="bg-green-500" num="bottom-2" num2="left-[87px]"/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
  </>
  )
}

export default Skill