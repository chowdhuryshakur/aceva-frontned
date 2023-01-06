import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs'
import Header from '../components/header/Header'
import Footer from '../components/footer'

import { Link } from 'react-router-dom'
import brand1 from '../assets/images/brands/logos.jpg'
import brand2 from '../assets/images/brands/forbes.svg'
import brand3 from '../assets/images/brands/fox.svg'
import brand4 from '../assets/images/brands/hubspot.svg'
import brand5 from '../assets/images/brands/vice.svg'

function DemoScreen() {
  return (
    <>
    <Header />
    <section className="demo-section">
      <div className="container">
        <div className="demo-wrapper">
          <div className="demo-content">
            <h1>See ACEVA in action!</h1>
            <h2>In this demo, we’ll show you how you can:</h2>

            {/* wrapper */}
            <div className="demo-list-wrapper">

              {/* item */}
              <div className="demo-list-item">

                {/* icon */}
                <div className="demo-list-thumb">
                  <BsCheck2Circle />
                </div>

                {/* content */}
                <div className="demo-list-content">
                  <h3> Build Intelligent Virtual Assistants</h3>
                  <p>Amplify engagement, increase conversions, and deliver delightful experiences to your customers across popular messaging channels</p>
                </div>
              </div>

              {/* item */}
              <div className="demo-list-item">

                {/* icon */}
                <div className="demo-list-thumb">
                  <BsCheck2Circle />
                </div>

                {/* content */}
                <div className="demo-list-content">
                  <h3> Use Powerful Analytics</h3>
                  <p>Tap into actionable insights that help you analyze conversations and improve customer satisfaction</p>
                </div>
              </div>

              {/* item */}
              <div className="demo-list-item">

                {/* icon */}
                <div className="demo-list-thumb">
                  <BsCheck2Circle />
                </div>

                {/* content */}
                <div className="demo-list-content">
                  <h3> Drive Meaningful and Measurable Outcomes</h3>
                  <p>Improve key CX metrics to drive customer retention & increase the Lifetime value</p>
                </div>
              </div>

            </div>

            <div className="demo-brand-wrapper">
              <h2>Trusted by the World's Leading Brands</h2>
                <div className="demo-brand_wrap">

                  {/* item */}
                  <div className="brand_item demo-brand-item">
                    <img src={brand1} alt="chatimize" />
                  </div>

                </div>
            </div>
          </div>

          {/* form */}
          <div className="form-wrapper">
            <form>
              <h2>Request a demo</h2>
              
              {/* first & last name */}
              <div className="form-row">

                {/* first name */}
                <div className="form-group">
                  <input type="text" placeholder='First name' />
                </div>

                {/* second name */}
                <div className="form-group">
                  <input type="text" placeholder='Second name' />
                </div>
              </div>

              {/* companay name */}
              <div className="form-group">
                <input type="text" placeholder='Company name' />
              </div>
              
              {/* Job title */}
              <div className="form-group">
                <input type="text" placeholder='Job title' />
              </div>
              
              {/* email */}
              <div className="form-group">
                <input type="email" placeholder='Email address' />
              </div>
  
              {/* password */}
              <div className="form-group">
                <input type="password" placeholder='Password' />
              </div>

              <div className="form-group">
                <p>By registering, you confirm that you agree to the storing and processing of your personal data by Haptik as described in the <Link to="/page">Privacy Statement.</Link> </p>
              </div>

              <div className="form-group">
                <button className="btn demo-submit" type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default DemoScreen