
import { BsCheck2, BsX } from 'react-icons/bs'

// import images
import axios from 'axios'
import React, { useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header/Header'
import { Link } from 'react-router-dom'

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
              {/* <span className='sub-title purple-color'>Our Affortable Pricing</span> */}
              <h2>Goal-oriented pricing that scales with you</h2>
            </div>

            {/* pricing wrapper */}
            <div className='pricing-wrapper'>

              {/* single item */}
              <div className="single-item-wrap">

                {/* special offer for country */}
                {/* <div className="special-offer-for-country">
                  <p>We noticed that you're from <span className='country-name'>{country}</span>. I want to make this course affordable for everyone around the world. 
                  A special <span className="country-off">60% off</span> discount code will automatically be applied for you during checkout. Enjoy! 🙂</p>
                </div> */}

                <div className="single-features-item pricing-item comment-style">
                                 
                {/* <div className="icon">
                  <img src={chatbot} alt="comment" />
                </div> */}
                <div className="text-center border-bottom">
                  <h3 className="plan-name">Standard</h3>
                  <div className="discriptive">Perfect for Small Businesses</div>
                  <Link to="/demo"><button className="pricing-get-demo-btn">Get a Demo</button></Link>
                  {/* <div className="price">
                    <span className="notranslate">
                      <span>$</span>
                      <span className="livechat-adv-numb">20</span>
                      <span className="regular-price"><sub>$220</sub></span>
                    </span>
                  </div>
                  <div className="plan-det">Per Agent/Month</div> */}
                </div>
                <div className="pricing-features">
                  <ul>
                    <li> <BsCheck2 /> Facebook Messenger</li>
                    <li> <BsCheck2 /> Chat Monitoring</li>
                    <li> <BsCheck2 /> Canned Response </li>
                    <li> <BsCheck2 /> File Transfer</li>
                    <li> <BsCheck2 /> Chat Transfer</li>
                    <li> <BsCheck2 /> Single Website Integration</li>
                    <li> <BsX /> Bit 256 SSL Encryption</li>
                    <li> <BsCheck2 /> See all features</li>
                    <li className='not-eligible-icon'> <BsX /> Department Management</li>
                    <li className='not-eligible-icon'> <BsX /> Auto Triggers</li>
                    <li className='not-eligible-icon'> <BsCheck2 /> Proactive Chat</li>
                  </ul>
                </div>
                <button className='pricing-buy-button'>Enquire Now</button>
              </div>
              </div>

              {/* single item */}
              <div className="single-item-wrap">
                {/* special offer for country */}
                {/* <div className="special-offer-for-country">
                  <p>We noticed that you're from <span className='country-name'>{country}</span>. I want to make this course affordable for everyone around the world. 
                  A special <span className="country-off">70% off</span> discount code will automatically be applied for you during checkout. Enjoy! 🙂</p>
                </div> */}
                <div className="single-features-item pricing-item ai-style">
                  {/* <div className="icon">
                    <img src={ai} alt="comment" />
                  </div> */}
                  <div className="text-center border-bottom">
                    <h3 className="plan-name">Advanced</h3>
                    <div className="discriptive">Ideal for Growing Businesses</div>
                    <Link to="/demo"><button className="pricing-get-demo-btn">Get a Demo</button></Link>
                    {/* <div className="price">
                      <span className="notranslate">
                        <span>$</span>
                        <span className="livechat-adv-numb">50</span>
                        <span className="regular-price"><sub>$310</sub></span>
                      </span>
                    </div>
                    <div className="plan-det">Per Agent/Month</div> */}
                    
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
                  <button className='pricing-buy-button'>Enquire Now</button>
                </div>
              </div>

              {/* single item */}
              <div className="single-item-wrap">
                  {/* special offer for country */}
                  {/* <div className="special-offer-for-country">
                    <p>We noticed that you're from <span className='country-name'>{country}</span>. I want to make this course affordable for everyone around the world. 
                    A special <span className="country-off">80% off</span> discount code will automatically be applied for you during checkout. Enjoy! 🙂</p>
                  </div> */}
                <div className="single-features-item pricing-item analysis-style">
                    {/* <div className="icon">
                      <img src={analysis} alt="comment" />
                    </div> */}
                    <div className="text-center border-bottom">
                      <h3 className="plan-name">Enterprise</h3>
                      <div className="discriptive">Best for Enterprise Teams</div>
                      <Link to="/demo"><button className="pricing-get-demo-btn">Get a Demo</button></Link>
                      {/* <div className="price">
                        <span className="notranslate">
                          <span>$</span>
                          <span className="livechat-adv-numb">70</span>
                          <span className="regular-price"><sub>$420</sub></span>
                        </span>
                      </div>
                      <div className="plan-det">Per Agent/Month</div> */}

                    </div>
                    <div className="pricing-features enterprice-wrap">
                        <div className="pricing-logo">
                          <img src="http://localhost:3000/static/media/aceva.023c6ceea74e217ff5bc.png" alt="" />
                        </div>
                        {/* <div className="pricing-review">
                          <img src="https://www.haptik.ai/hubfs/3star.png" alt="review" />
                        </div> */}
                        <h3>For Enterprise Customers</h3>
                    </div>
                    <button className='pricing-buy-button'>Enquire Now</button>
                </div>
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