import React from 'react'
import CloneBox from '../components/CloneBox'

function Team() {

  return (
    <div className="container 2xl:top-48 mx-auto max-w-[650px] lg:max-w-[1200px] h-[652px] relative lg:flex lg:gap-x-6">
      <CloneBox title="재완() (개인)" skill="react" skill2="Javascript" skill3="tailwindcss" left2="-left-[18px]" left3="-left-[17px]" left4="-left-[1px]" skill4="figma" contribution="100" worktime="2" detail="기획" detail2="디자인" detail3="기술구현" imgurl="4" vercel="jwk-portfolio" git="green23616/JWK-Portfolio" imgurl2="c"/>
      <CloneBox title="HelloVanilla (팀)" skill="react" skill2="Javascript" skill3="styled"  left2="-left-[18px]" left4="-left-[7px]" skill4="firebase" contribution="30" worktime="4" detail="외부 라이브러리 구현" detail2="페르소나 및 컨텐츠 제작" detail3="상세페이지(콘텐츠)" imgurl="2" imgurl2="a" vercel="hello-vanilla" git="the02196/hello_vanilla"/>
    </div>
  )
}

export default Team