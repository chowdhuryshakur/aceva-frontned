import React from 'react'
import Brand_Section from '../components/aceva-landing-page/Brand_Section'
import Column_Section from '../components/aceva-landing-page/Column_Section'
import Column_Section2 from '../components/aceva-landing-page/Column_Section2'
import Column_Section3 from '../components/aceva-landing-page/Column_Section3'
import Hero_Section from '../components/aceva-landing-page/Hero_Section'
import Integrate_Section from '../components/aceva-landing-page/Integrate_Section'
import Why_Choose_Section from '../components/aceva-landing-page/Why_Choose_Section'
import Footer from '../components/footer'
import Header from '../components/header/Header'
import FaqSection from '../components/home-page/FaqSection'
import FeaturedAreaSection from '../components/home-page/featured-section/FeaturedSection'
import NewsLetterSection from '../components/home-page/NewsLetterSection'
import TestimonialSection from '../components/home-page/TestimonialSection'
import WhatWeDoSection from '../components/home-page/WhatWeDoSection'
import Chatbot from '../components/chatbot/Chatbot'

function AcevaScreen() {
  return (
    <>
      <Chatbot />
      <Header />
        <Hero_Section />
        <Brand_Section />
        <Column_Section />
        <Column_Section2 />
        <Column_Section3 />
        <Integrate_Section />
        <Why_Choose_Section />
        <FeaturedAreaSection />
        <WhatWeDoSection />
        <TestimonialSection />
        <FaqSection />
        <NewsLetterSection />
      <Footer />
    </>
  )
}

export default AcevaScreen