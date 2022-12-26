import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer'
import Hero_Section from '../components/aceva-landing-page/Hero_Section'
import Column_Section from '../components/aceva-landing-page/Column_Section'
import Brand_Section from '../components/aceva-landing-page/Brand_Section'
import Column_Section2 from '../components/aceva-landing-page/Column_Section2'
import Column_Section3 from '../components/aceva-landing-page/Column_Section3'
import Integrate_Section from '../components/aceva-landing-page/Integrate_Section'
import Why_Choose_Section from '../components/aceva-landing-page/Why_Choose_Section'

function AcevaScreen() {
  return (
    <>
      <Header />
        <Hero_Section />
        <Brand_Section />
        <Column_Section />
        <Column_Section2 />
        <Column_Section3 />
        <Integrate_Section />
        <Why_Choose_Section />
      <Footer />
    </>
  )
}

export default AcevaScreen