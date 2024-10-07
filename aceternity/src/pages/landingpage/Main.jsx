import React from 'react'
import NavBar from '../components/NavBar'
import FirstSection from './FirstSection'
import { HeroScrollDemo } from '../acertenityComponents/SecondSection'
import ThirdSection from './ThirdSection'
import ForthSection from './ForthSection'

const Main = () => {
  return (
    <div className="bg-black w-full h-screen">
    <NavBar />
    <FirstSection />
    <HeroScrollDemo />
   <ThirdSection/>
        <ForthSection/>
     {/* <FifthSection/>
      <SixthSection/>
      <FooterSection/> */}
  </div>
  )
}

export default Main
