import React from 'react'
import NavBar from '../components/NavBar'
import FirstSection from './FirstSection'
import { HeroScrollDemo } from '../acertenityComponents/SecondSection'

const Main = () => {
  return (
    <div className="bg-black w-full h-screen">
    <NavBar />
    <FirstSection />
    <HeroScrollDemo />
    {/* <ThirdSection/>
      <ForthSection/>
      <FifthSection/>
      <SixthSection/>
      <FooterSection/> */}
  </div>
  )
}

export default Main
