import React, { useEffect } from 'react'
import Brand_Section from '../components/aceva-landing-page/Brand_Section'
import Column_Section from '../components/aceva-landing-page/Column_Section'
import Column_Section2 from '../components/aceva-landing-page/Column_Section2'
import Column_Section3 from '../components/aceva-landing-page/Column_Section3'
import Hero_Section from '../components/aceva-landing-page/Hero_Section'
import Integrate_Brand_Section from '../components/aceva-landing-page/Integrate_Brand_Section'
import Integrate_Section from '../components/aceva-landing-page/Integrate_Section'
import Multi_Channel_Integration_Section from '../components/aceva-landing-page/Multi_Channel_Integrate_Section'
import Why_Choose_Section from '../components/aceva-landing-page/Why_Choose_Section'
import Chatbot from '../components/chatbot/Chatbot'
import Footer from '../components/footer'
import Header from '../components/header/Header'
import FaqSection from '../components/home-page/FaqSection'
import FeaturedAreaSection from '../components/home-page/featured-section/FeaturedSection'
import NewsLetterSection from '../components/home-page/NewsLetterSection'
import TestimonialSection from '../components/home-page/TestimonialSection'
import WhatWeDoSection from '../components/home-page/WhatWeDoSection'

function AcevaScreen() {
  return (
    <>
      <Header />
        <Hero_Section />
        {/* <Brand_Section /> */}
        <Multi_Channel_Integration_Section />
        <Column_Section />
        <Column_Section2 />
        <Column_Section3 />
        {/* <Integrate_Section /> */}
        <Integrate_Brand_Section />
        <Why_Choose_Section />
        <TestimonialSection />
        {/* <FeaturedAreaSection /> */}
        {/* <WhatWeDoSection /> */}
        <FaqSection />
        <NewsLetterSection />
      <Chatbot />
      <Footer />
    </>
  )
}

export default AcevaScreen