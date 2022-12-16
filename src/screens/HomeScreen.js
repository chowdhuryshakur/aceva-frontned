import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header/Header'

// product images
import Chatbot from '../components/chatbot/Chatbot'
import AppProgressSection from '../components/home-page/AppProgressSection'
import FeaturedSection from '../components/home-page/featured-section/FeaturedSection'
import GoalSection from '../components/home-page/GoalSection'
import HeroSection from '../components/home-page/hero-section/HeroSection'
import HomeBlogSection from '../components/home-page/HomeBlogSection'
import PartnerSection from '../components/home-page/PartnerSection'
import WhatWeDoSection from '../components/home-page/WhatWeDoSection'
import WhatWeOffer from '../components/home-page/WhatWeOffer'
import TestimonialSection from '../components/home-page/TestimonialSection'
import NewsLetterSection from '../components/home-page/NewsLetterSection'
import FaqSection from '../components/home-page/FaqSection'


function HomeScreen() {

  const scrollRef = useRef(null);

  const [toggle, setToggle] = useState(false); 

  const handleToggle = (e) => {
    setToggle(!toggle);
  }

  useEffect(() => {
    scrollRef?.current?.scrollIntoView()
    console.log(scrollRef?.current?.scrollIntoView())
  }, [])

  return (
    <>
      <Chatbot />
      <Header />
        <HeroSection />
        <FeaturedSection />
        <GoalSection />
        <WhatWeDoSection />
        <AppProgressSection />
        <WhatWeOffer />
        <TestimonialSection />
        <PartnerSection />
        <HomeBlogSection />
        <FaqSection />
        <NewsLetterSection />
      <Footer />
    </>
  )
}

export default HomeScreen