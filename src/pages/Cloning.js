import React from 'react'
import CloneBox from '../components/CloneBox'
function Contact() {

  return (
    <>
    <div className="container 2xl:top-48 mx-auto max-w-[650px] lg:max-w-[1200px] h-[652px] relative lg:flex lg:gap-x-6">
      <div>
      <CloneBox title="써브웨이" skill="HTML" skill2="css" skill3="Javascript" left2="left-[6px]" left3="-left-[17px]"  contribution="100" worktime="1" detail="클론 코딩" detail2="HTML구조 설계" detail3="가상요소 사용" imgurl="5" vercel="subwaycloning" git="green23616/HTML-CSS-Subway" imgurl2="d"/>
      </div>
      <div>
        <CloneBox title="롯데월드" skill="react" skill2="tailwindcss" skill3="Javascript" left2="-left-[18px]" left3="-left-[17px]" contribution="100" worktime="1" detail="클론 코딩" detail2="Swiper, useState, Fontawsome 활용" imgurl="6" vercel="lottecloning" git="green23616/React-LotteWorld" imgurl2="e"/>
      </div>
    </div>
    </>
  )
}

export default Contact