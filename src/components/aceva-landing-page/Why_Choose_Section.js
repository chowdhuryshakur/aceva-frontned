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
              <h3>Process Automation</h3>
              <p>Automate business processes with a click of a button. With RPA technology, you can customize automation process easily with chatbot.</p>
            </div>
          </div>

          {/* item */}
          <div className="integrate_item why_choose_item">
            <div className="int_thumb">
              <img src={bestClass} alt="" />
            </div>
            <div className="int_content">
              <h3>Analytics</h3>
              <p>Real-time notification with business insights. ACEVA unified all the information in a single dashboard.</p>
            </div>
          </div>

          {/* item */}
          <div className="integrate_item why_choose_item">
            <div className="int_thumb">
              <img src={readytogo} alt="" />
            </div>
            <div className="int_content">
              <h3>Best class AI</h3>
              <p>Natural Language Processing (NLP) and Artificial Intelligent (AI) combine together to give you the best and streamline experience.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Why_Choose_Section