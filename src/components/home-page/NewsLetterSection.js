import React from 'react'
import tringle from '../../assets/images/bg/shape14.png'
import leaf from '../../assets/images/bg/tea-leaf.png'

function NewsLetterSection() {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-wrapper">
          <div className="newsletter-excerpt">
            <h2>Start Your Free Trail</h2>
            <p>Building a bot is easy, fun, and proven to get results.</p>
          </div>
          <div className="newsletter-form-wrap">
            <form action="">
              <input required className='newsletter-input' type="text" placeholder='Your email' />
              <button className='newsletter-btn'>Submit</button>
            </form>
          </div>
          <img className='tringle-shape' src={tringle} alt="" />
        </div>
      </div>
          <img className='abs-leaf' src={leaf} alt="" />
    </section>
  )
}

export default NewsLetterSection