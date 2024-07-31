import React from 'react'
import CloneBox from '../components/CloneBox'
function Toy() {

  return (
    <>
    <div className="container 2xl:top-48 mx-auto max-w-[650px] lg:max-w-[1200px] h-[652px] relative lg:flex lg:gap-x-6">
      <div>
        <CloneBox title="퀴즈생성기" skill="react" skill2="Javascript" skill3="tailwindcss" left2="-left-[18px]" left3="-left-[18px]" contribution="100" worktime="2" detail="props를 통한 데이터 전송" detail2="useEffect와 filter()를 활용한 데이터 바인딩"  detail3="조건문과 삼항연산자의 활용" imgurl="11" vercel="react-quiz-eight-blue" git="green23616/React-Quiz" imgurl2="i"/>
      </div>
    </div>
    </>
  )
}

export default Toy