function About() {
  return (
    <>
    <div className="container 2xl:top-48 max-w-[697px] md:max-w-[1200px] h-[652px] relative flex gap-x-6 mx-auto">
      <div className="basis-1/2 md:basis-1/3 h-[67%]">
        <div className="border h-full flex flex-wrap mb-6 overflow-hidden ">
          <img src="/me.jpg" alt="profile" title="profile" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"/>
        </div>
        <div className="border h-[43.7%] flex flex-wrap relative">
          <ul className="flex h-[77px] w-full justify-around items-center mt-2">
            
            <li className="relative group">
              <a href="https://github.com/green23616" rel="noreferrer" target="_blank">
                <img src="/github.png" alt="github" title="notion" className="w-8 h-8 ml-2 group-hover:scale-125 transition-all duration-200 mb-1"/>
                <span className="text-xs">GitHub</span>
                <span className="absolute opacity-100 group-hover:opacity-0 transition-all duration-200 text-[9px] left-12 -top-[5px]">click!</span>
              </a>
            </li>
          </ul>
          <div className="absolute 2xl:text-md top-[42%] ml-7 mr-7 text-md md:text-[19px]">
            <p className="">이름 : 김재완</p>
            <p>교육 : 그린컴퓨터아트학원 React를 활용한 프론트엔드 개발자 과정<span className="text-blue-500 underline"> 900시간</span> 수료(예정)
            </p> 
          </div>
        </div>
      </div>
      <div className="md:hidden basis-1/2">
        <div className="border h-full text-center">
          <p className="text-[33px] mt-10">미래를 향한 발걸음</p>
          <p className="text-[17px] leading-8 w-[90%] mt-4 md:mt-12 mx-auto">사람을 이해하고 내가 느끼는 것을 믿으며 나아가는 개발자가 되고 싶습니다. <br/>
          저는 이전에 개발을 해본적이 없지만 기술의 발전이 데려다 줄 미래에 늘 다가가고 싶었습니다.<br/>
          이제 멀리서 바라보기보다 직접 그 흐름에 뛰어들어 사람들의 일상을 바꾸고 트렌드를 이끌어나가고 싶습니다.<br/>
          언젠가 본 스티브 잡스의 글 중 기억하는 구절이 있습니다.<br/>
          인문학, 그리고 인류애가 결합된 기술만이 우리의 가슴을 뛰게하는 무언가를 만들어 낼 수 있다.<br/>
          이 말을 마음속에 깊이 새기며 꾸준하게 걸어가고 싶습니다.</p>
        </div>
      </div>
      <div className="hidden md:block basis-2/3">
        <div className="border h-full text-center">
          <p className="text-5xl mt-12">미래를 향한 발걸음</p>
          <p className="text-[21px] lg:text-[24px] xl:text-[27px] 2xl:text-[28px] w-[91%] mt-12 lg:leading-10 mx-auto">사람을 이해하고 내가 느끼는 것을 믿으며 <br/>나아가는 개발자가 되고 싶습니다.<br/>
          저는 이전에 개발을 해본적이 없지만<br/> 기술의 발전이 데려다 줄 미래에 늘 다가가고 싶었습니다.<br/>
          이제 멀리서 바라보기보다 직접 그 흐름에 뛰어들어<br/> 사람들의 일상을 바꾸고 트렌드를 이끌어나가고 싶습니다.<br/>
          언젠가 본 스티브 잡스의 글 중 기억하는 구절이 있습니다.<br/>
          인문학, 그리고 인류애가 결합된 기술만이<br/> 우리의 가슴을 뛰게하는 무언가를 만들어 낼 수 있다.<br/>
          이 말을 마음속에 깊이 새기며 꾸준하게 걸어가고 싶습니다.</p>
        </div>
      </div>      
    </div>
    </>
  )
}

export default About