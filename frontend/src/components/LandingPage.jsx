import React from 'react'

import BlogSection from './BlogSection'
import FAQCarousel from './FAQCarousel.jsx'
import FeatureSection from './FeatureSection.jsx'
import Footer from './Footer'
import HeaderSection from './HeaderSection.jsx'
import HeroSection from './HeroSection.jsx'
import StepSection from './StepSection'
import Testimonials from './Testimonials.jsx'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../slider/customSlider.css'

function LandingPage () {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header Section */}
      <HeaderSection />
      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <FeatureSection />
      {/* Solution Section */}
      <StepSection />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Blog Section */}
      <BlogSection />
      {/* FAQ Section */}
      <FAQCarousel />
      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default LandingPage
