import React from 'react'
import HeroVideo from '../../assets/video/hero.mp4'
import HeroGif from '../../assets/video/hero-gif.gif'

function Hero_Section() {
  return (
    <>
      <section className='hero-section'>
        <div className='container'>
          <div className='hero-row hero_row'>
            <div className='hero-col-6 hero_col_6'>
              <div className='hero-content-wrap hero_content_wrap'>
                <span className="sm-title">ACEVA</span>
                <h1>Automate sales with a powerful chatbot builder</h1>
                {/* <span className='highlight-text'>Chatbot Business</span> */}
                
                <p>Use one of our 35+ pre-designed templates or easily build your own chatbots.</p>
                <div className='hero-buttons hero_buttons'>
                  <a href='/admin'>
                    <button className='btn hero-service-button'>Get a free trail</button>
                  </a>
                  <a href='#'>
                    <button className='btn hero-contact-button'>Contact Us</button>
                  </a>
                </div>
              </div>
            </div>
            <div className='hero-col-6 hero-thumb hero_thumb hero_col_6'>
            {/* <video autoplay="" playsinline="" poster="/images/shared/posters/poster-696x550.svg" style="height: 550px; width: 696px;"><source src="/video/chatbots/hero.mp4" type="video/mp4"><track kind="captions" srclang="en" label="english_captions"></video> */}
            {/* <video className='hero-featured-video' width="600" height="300" autoplay="true" src={HeroVideo} ></video> */}
              {/* <div className='shapes'>
              <img className='' src={shapeOne} alt="shape one" />
              <img src={shapeTwo} alt="shape two" />
              <img src={shapeThree} alt="shape three" />
              <img src={shapeFour} alt="shape four" />
              </div>
              */}
              <img src={HeroGif} alt="robot" /> 
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero_Section