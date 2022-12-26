import React from 'react'
import HeroGif from '../../assets/video/hero-gif.gif'
import ColumnBg from '../../assets/images/bg/Home-Customer-Care-1.png'

function Column_Section3() {
  return (
    <section className='column_section'>
        <div className='container'>
          <div className='column_row'>

            {/* thumb */}
            <div className='column_thumb col_6'>
              <img src={ColumnBg} alt="robot" /> 
            </div>

            {/* content */}
            <div className='col_6'>
              <div className='column_content_wrap'>
                <h2>Customer Support That's Casual & Conversational</h2>
                
                <p>Offer 24/7 AI-driven customer care for instant, seamless query resolution.</p>
                <p>Provide timely updates, usage guides, tips & more to inform, educate and drive brand loyalty with buyers.</p>
                <p>Leverage Haptik’s Natural Language models and pre-built Smart Skills to handle order management, account management & subscription support.</p>
                <div className='column_buttons'>
                  <a href='/'>
                    <button className='btn column_content_btn'>Learn more</button>
                  </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Column_Section3