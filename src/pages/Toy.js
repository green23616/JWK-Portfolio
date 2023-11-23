import React from 'react'
import CloneBox from '../components/CloneBox'
function Toy() {

  return (
    <>
    <div className="container 2xl:top-48 mx-auto max-w-[650px] lg:max-w-[1200px] h-[652px] relative lg:flex lg:gap-x-6">
      <div>
        <CloneBox title="부산관광지 API" skill="react" skill2="router" skill3="styled" left2="-left-[2px]" left3="-left-[2px]" skill4="Axios" contribution="100" worktime="2" detail="공공 API를 활용한 데이터바인딩" detail2="페이지네이션 구현" detail3="ThemeProvider를 통한 다크모드 구현" imgurl="10" vercel="axios-busan-api" git="green23616/Axios-BusanAPI" imgurl2="g"/>
        <CloneBox title="택배 API" skill="react" skill2="typescript" skill3="tailwindcss" left2="-left-[18px]" left3="-left-[18px]" contribution="100" worktime="2" detail="TS에서 Interface의 이용" detail2="State를 이용한 데이터 바인딩 및 필터기능 구현" detail3="로딩 애니메이션 구현" imgurl="8" vercel="react-tracking" git="green23616/react-tracking" imgurl2="h"/>
      </div>
      <div>
        <CloneBox title="퀴즈생성기" skill="react" skill2="Javascript" skill3="tailwindcss" left2="-left-[18px]" left3="-left-[18px]" contribution="100" worktime="2" detail="props를 통한 데이터 전송" detail2="useEffect와 filter()를 활용한 데이터 바인딩"  detail3="조건문과 삼항연산자의 활용" imgurl="11" vercel="react-quiz-eight-blue" git="green23616/React-Quiz" imgurl2="i"/>
        <CloneBox title="게시판 (진행중)" skill="Next.js" skill2="mysql" skill3="tailwindcss" left2="-left-[5px]" left3="-left-[18px]" left4="-left-[18px]" skill4="planetscale" contribution="100" worktime="3" detail="MySQL을 활용한 CRUD구현 및 PlanetScale을 이용한 서버관리" detail2="" detail3="테스트: green23616@gmail.com/1234" imgurl="9" vercel="nextjs-dashboard-black-three-30" git="green23616/nextjs-dashboard" imgurl2="j"/>
      </div>
      <div>
        <CloneBox title="오늘의 운세(진행중)" skill="Next.js" skill2="typescript" skill3="query" left2="-left-[18px]" left3="-left-[1px]"contribution="100" worktime="1" detail="Next.js에서 CSR과 SSR의 구분과 사용" detail2="JSON이 아닌 경우의 데이터바인딩" detail3="Query문의 이용" imgurl="12" imgurl2="K" vercel="nextjs-lucky-five" git="green23616/nextjs-lucky"/>
      </div>
    </div>
    </>
  )
}

export default Toy