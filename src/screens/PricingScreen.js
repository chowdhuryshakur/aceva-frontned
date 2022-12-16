
import { BsCheck2, BsX } from 'react-icons/bs'

// import images
import axios from 'axios'
import { emojiCountryCode } from 'country-code-emoji'
import React, { useState } from 'react'
import analysis from '../assets/images/icons/analysis.png'
import ai from '../assets/images/icons/artificial-intelligence.png'
import chatbot from '../assets/images/icons/robot.png'
import Footer from '../components/footer'
import Header from '../components/header/Header'
import flag from 'country-code-emoji';

function PricingScreen() {

  const [country, setCountry] = useState('')

  const ipinfo_token = '5f46cd99918dd4'

  axios.get(`https://ipinfo.io/json?token=${ipinfo_token}`)
  .then(response => {
    // console.log(response.data.country);
    let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    setCountry(regionNames.of(response.data.country))
  })
  .catch(e => {
    console.log(e);
  });

  return (
    <>
    <Header />
      <section className='featured-section'>
        <div className='container'>
          <div className='featured-container'>

            {/* title */}
            <div className='section-title'>
              <span className='sub-title purple-color'>Our Affortable Pricing</span>
              <h2>Goal-oriented pricing that scales with you</h2>
            </div>

            {/* pricing wrapper */}
            <div className='pricing-wrapper'>

              {/* single item */}
              <div className="single-features-item pricing-item comment-style">
                <div className="icon">
                  <img src={chatbot} alt="comment" />
                </div>
                <div className="text-center border-bottom">
                  <div className="plan-name">Standard</div>
                  <div className="discriptive">Perfect for Small Businesses</div>
                  <div className="price">
                    <span className="notranslate">
                      <span>$</span>
                      <span className="livechat-adv-numb">20</span>
                      <span className="regular-price"><sub>$220</sub></span>
                    </span>
                  </div>
                  <div className="plan-det">Per Agent/Month</div>

                  {/* special offer for country */}
                  <div className="special-offer-for-country">
                    <p>We noticed that you're from <span className='country-name'>{country}</span>. I want to make this course affordable for everyone around the world. 
                    A special <span className="country-off">60% off</span> discount code will automatically be applied for you during checkout. Enjoy! 🙂</p>
                  </div>
                </div>
                <div className="pricing-features">
                  <ul>
                    <li> <BsCheck2 /> Facebook Messenger</li>
                    <li className='not-eligible-icon'> <BsX /> Department Management</li>
                    <li className='not-eligible-icon'> <BsX /> Auto Triggers</li>
                    <li> <BsCheck2 /> Proactive Chat</li>
                    <li> <BsCheck2 /> Chat Monitoring</li>
                    <li> <BsCheck2 /> Canned Response </li>
                    <li> <BsCheck2 /> File Transfer</li>
                    <li> <BsCheck2 /> Chat Transfer</li>
                    <li> <BsCheck2 /> Single Website Integration</li>
                    <li className='not-eligible-icon'> <BsX /> Bit 256 SSL Encryption</li>
                    <li> <BsCheck2 /> See all features</li>
                  </ul>
                </div>
                <button className='pricing-buy-button'>Buy Now</button>
              </div>

              {/* single item */}
              <div className="single-features-item pricing-item ai-style">
              <div className="icon">
                  <img src={ai} alt="comment" />
                </div>
                <div className="text-center border-bottom">
                  <div className="plan-name">Advanced</div>
                  <div className="discriptive">Ideal for Growing Businesses</div>
                  <div className="price">
                    <span className="notranslate">
                      <span>$</span>
                      <span className="livechat-adv-numb">50</span>
                      <span className="regular-price"><sub>$310</sub></span>
                    </span>
                  </div>
                  <div className="plan-det">Per Agent/Month</div>

                  {/* special offer for country */}
                  <div className="special-offer-for-country">
                    <p>We noticed that you're from <span className='country-name'>{country}</span>. I want to make this course affordable for everyone around the world. 
                    A special <span className="country-off">70% off</span> discount code will automatically be applied for you during checkout. Enjoy! 🙂</p>
                  </div>
                  
                </div>
                <div className="pricing-features">
                  <ul>
                    <li> <BsCheck2 /> Facebook Messenger</li>
                    <li> <BsCheck2 /> Department Management</li>
                    <li> <BsCheck2 /> Auto Triggers</li>
                    <li> <BsCheck2 /> Proactive Chat</li>
                    <li> <BsCheck2 /> Chat Monitoring</li>
                    <li> <BsCheck2 /> Canned Response </li>
                    <li> <BsCheck2 /> File Transfer</li>
                    <li> <BsCheck2 /> Chat Transfer</li>
                    <li> <BsCheck2 /> Single Website Integration</li>
                    <li> <BsCheck2 /> Bit 256 SSL Encryption</li>
                    <li> <BsCheck2 /> See all features</li>
                  </ul>
                </div>
                <button className='pricing-buy-button'>Buy Now</button>
              </div>

              {/* single item */}
              <div className="single-features-item pricing-item analysis-style">
                <div className="icon">
                    <img src={analysis} alt="comment" />
                  </div>
                  <div className="text-center border-bottom">
                    <div className="plan-name">Enterprise</div>
                    <div className="discriptive">Best for Enterprise Teams</div>
                    <div className="price">
                      <span className="notranslate">
                        <span>$</span>
                        <span className="livechat-adv-numb">70</span>
                        <span className="regular-price"><sub>$420</sub></span>
                      </span>
                    </div>
                    <div className="plan-det">Per Agent/Month</div>

                  {/* special offer for country */}
                  <div className="special-offer-for-country">
                    <p>We noticed that you're from <span className='country-name'>{country}</span>. I want to make this course affordable for everyone around the world. 
                    A special <span className="country-off">80% off</span> discount code will automatically be applied for you during checkout. Enjoy! 🙂</p>
                  </div>

                  </div>
                  <div className="pricing-features">
                    <ul>
                      <li> <BsCheck2 /> Facebook Messenger</li>
                      <li> <BsCheck2 /> Department Management</li>
                      <li> <BsCheck2 /> Auto Triggers</li>
                      <li> <BsCheck2 /> Proactive Chat</li>
                      <li> <BsCheck2 /> Chat Monitoring</li>
                      <li> <BsCheck2 /> Canned Response </li>
                      <li> <BsCheck2 /> File Transfer</li>
                      <li> <BsCheck2 /> Chat Transfer</li>
                      <li> <BsCheck2 /> Single Website Integration</li>
                      <li> <BsCheck2 /> Bit 256 SSL Encryption</li>
                      <li> <BsCheck2 /> See all features</li>
                    </ul>
                  </div>
                  <button className='pricing-buy-button'>Buy Now</button>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PricingScreen