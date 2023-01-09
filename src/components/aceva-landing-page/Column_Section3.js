import React from 'react'
import HeroGif from '../../assets/video/hero-gif.gif'
import ColumnBg from '../../assets/images/bg/realtime-notification.webp'

function Column_Section3() {
  return (
    <section className='column_section'>
        <div className='container'>
          <div className='column_row'>

            {/* content */}
            <div className='col_6'>
              <div className='column_content_wrap'>
                <h2>Real-time notification</h2>
                
                <p>Offer 24/7 AI-driven customer care for instant, seamless query resolution.</p>
                <p>Notify you real time via mobile at anytime wherever you are. Set your conditions and get a latest update about your business with whatsapp or telegram.</p>
                <div className='column_buttons'>
                  <a href='/'>
                    <button className='btn column_content_btn'>Learn more</button>
                  </a>
                  </div>
              </div>
            </div>

            {/* thumb */}
            <div className='column_thumb col_6'>
              <img src={ColumnBg} alt="robot" /> 
            </div>
            
          </div>
        </div>
      </section>
  )
}

export default Column_Section3