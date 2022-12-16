import React from 'react'
import BodyFeaturedSection from '../components/blog/BodyFeaturedSection'
import FeaturedSection from '../components/blog/FeaturedSection'
import LatestArticleSection from '../components/blog/LatestArticleSection'
import Header from '../components/header/Header'
import Footer from '../components/footer'


function BlogScreen() {
  return (
    <>
    <Header />
      <FeaturedSection />
      <LatestArticleSection />
      <BodyFeaturedSection />
      <LatestArticleSection />
    <Footer />
    </>
  )
}

export default BlogScreen