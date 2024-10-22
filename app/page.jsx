"use client"
import { useEffect } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Services from './components/Services'
import Work from './components/Work/Work'
import FixedMenu from './components/FixedMenu'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer'

const Home = () => {

  // important locomotive scroll

  useEffect(()=>{
    const loadLocomotiveScroll  = async ()=>{
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    }
    loadLocomotiveScroll();
  },[])

  return (
    <>
      <Hero/>
      <FixedMenu/>
      <Services/>
      <About/>
      <Journey/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      {/* temporary div */}
      {/* <div className="h-[3000px]"></div> */}
    </>
  )
}

export default Home

