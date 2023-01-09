import React from 'react'
import HeroVideo from '../../assets/video/hero.mp4'
import HeroGif from '../../assets/video/hero-gif.gif'

function Hero_Section() {

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  return (
    <>
      <section className='hero-section'>
        <div className='container'>
          <div className='hero-row hero_row'>
            <div className='hero-col-6 hero_col_6'>
              <div className='hero-content-wrap hero_content_wrap'>
                {/* <span className="sm-title">ACEVA</span> */}
                <h1>AI Virtual Assistant for your

                  <div  className="home">
                    <h3 id="resizing-h3" className="" >
                      <span>
                        <div className="stage">
                          <div className="cubespinner">
                            <div className="face face1">Business</div>
                            <div className="face face2">Process</div>
                            <div className="face face3">Service</div>
                            <div className="face face4">HR</div>
                          </div>
                        </div>
                      </span>
                    </h3>
                  </div>
                </h1>
                {/* <span className='highlight-text'>Chatbot Business</span> */}
                
                <p>ACEVA is a smart bot that handles your communications, automate you business processes while notify you real-time.</p>
                <div className='hero-buttons hero_buttons'>
                  <a href='/demo'>
                    <button className='btn hero-service-button'>Get a Demo</button>
                  </a>
                  
                    <button onClick={handleScroll} className='btn hero-contact-button'>Contact Us</button>
                  
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