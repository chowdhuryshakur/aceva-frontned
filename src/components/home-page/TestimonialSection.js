import React from 'react'
import {RiDoubleQuotesL, RiDoubleQuotesR} from 'react-icons/ri'

// import images
import chatbot from '../../assets/images/icons/robot.png'
import analysis from '../../assets/images/icons/analysis.png'
import ai from '../../assets/images/icons/artificial-intelligence.png'
import personOne from '../../assets/images/peoples/chat-two.jpg'
import personTwo from '../../assets/images/peoples/chat-three.jpg'
import personThree from '../../assets/images/peoples/chat-four.jpg'
import { AiTwotoneStar } from 'react-icons/ai'

function TestimonialSection() {
  return (
    <>
      <section className='featured-section testi-section'>
        <div className='container'>
          <div className='featured-container'>

            {/* title */}
            <div className='section-title'>
              <span className='sub-title purple-color'>Testimonials</span>
              <h2>Happy Client Reviews</h2>
            </div>

            {/* featured wrapper */}
            <div className='featured-wrapper'>

              {/* single item */}
              <div className="single-features-item comment-style testi-item">
                <div className="testi-profile">
                  <div className="icon testi-thumb">
                    <img src={personOne} alt="comment" />
                  </div>
                  <div className="testi-excerpt">
                    <h3>Garlic mathew</h3>
                    <p>Founder & CEO</p>
                  </div>
                </div>
                <p> <RiDoubleQuotesL className='quote-icon' /> Empowering your end users to make accurate data driven decisions requires visible and valid data, powerful predictive metrics and ensured end user engagement. <RiDoubleQuotesR className='quote-icon' />
                </p>

                <ul className='review-wrap'>
                  <li><AiTwotoneStar /></li>
                  <li><AiTwotoneStar /></li>
                  <li><AiTwotoneStar /></li>
                  <li><AiTwotoneStar /></li>
                  <li><AiTwotoneStar /></li>
                </ul>
              </div>

              {/* single item */}
              <div className="single-features-item comment-style testi-item">
                <div className="testi-profile">
                  <div className="icon testi-thumb">
                    <img src={personTwo} alt="comment" />
                  </div>
                  <div className="testi-excerpt">
                    <h3>Jhon kabir</h3>
                    <p>Xboard - Founder</p>
                  </div>
                </div>
                <p> <RiDoubleQuotesL className='quote-icon' /> Empowering your end users to make accurate data driven decisions requires visible and valid data, powerful predictive metrics and ensured end user engagement. <RiDoubleQuotesR className='quote-icon' />
                </p>

                <ul className='review-wrap'>
                  <li><AiTwotoneStar /></li>
                  <li><AiTwotoneStar /></li>
                  <li><AiTwotoneStar /></li>
                  <li><AiTwotoneStar /></li>
                  <li><AiTwotoneStar /></li>
                </ul>
              </div>

              {/* single item */}
              <div className="single-features-item comment-style testi-item">
                <div className="testi-profile">
                  <div className="icon testi-thumb">
                    <img src={personThree} alt="comment" />
                  </div>
                  <div className="testi-excerpt">
                    <h3>Avinash parker</h3>
                    <p>Managing director - Daraz</p>
                  </div>
                </div>
                <p> <RiDoubleQuotesL className='quote-icon' /> Empowering your end users to make accurate data driven decisions requires visible and valid data, powerful predictive metrics and ensured end user engagement. <RiDoubleQuotesR className='quote-icon' />
                </p>

                <ul className='review-wrap'>
                  <li><AiTwotoneStar /></li>
                  <li><AiTwotoneStar /></li>
                  <li><AiTwotoneStar /></li>
                  <li><AiTwotoneStar /></li>
                  <li><AiTwotoneStar /></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialSection