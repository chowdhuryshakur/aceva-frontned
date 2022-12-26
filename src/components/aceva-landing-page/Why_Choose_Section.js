import React from 'react'
import bestClass from '../../assets/images/why-choose/best in class ai-1.png'
import analytics from '../../assets/images/why-choose/powerful-analytics-1.png'
import readytogo from '../../assets/images/why-choose/ready to go-1.png'
function Why_Choose_Section() {
  return (
    <section className="integrate_section why_choose_section">
      <div className="container">

        {/* title */}
        <div className="brand_title int_title">
          <h2>Why Should You Choose ACEVA?</h2>
        </div>

        {/* wrapper */}
        <div className="integrate_wrapper why_choose_wrapper">

          {/* item */}
          <div className="integrate_item why_choose_item">
            <div className="int_thumb">
              <img src={analytics} alt="" />
            </div>
            <div className="int_content">
              <h3>Plug-and-play</h3>
              <p>From product discovery to payment, our WhatsApp solution makes it easy for your customers to connect with your brand.</p>
            </div>
          </div>

          {/* item */}
          <div className="integrate_item why_choose_item">
            <div className="int_thumb">
              <img src={bestClass} alt="" />
            </div>
            <div className="int_content">
              <h3>Analytics</h3>
              <p>From product discovery to payment, our WhatsApp solution makes it easy for your customers to connect with your brand.</p>
            </div>
          </div>

          {/* item */}
          <div className="integrate_item why_choose_item">
            <div className="int_thumb">
              <img src={readytogo} alt="" />
            </div>
            <div className="int_content">
              <h3>Best class AI</h3>
              <p>From product discovery to payment, our WhatsApp solution makes it easy for your customers to connect with your brand.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Why_Choose_Section