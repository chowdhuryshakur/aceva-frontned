import React from 'react'
import HomeMarketing from '../../assets/images/bg/Home-Marketing.png'

function Column_Section2() {
  return (
    <section className='column_section'>
        <div className='container'>
          <div className='column_row'>

            {/* content */}
            <div className='col_6'>
              <div className='column_content_wrap'>
                <h2>Intuitive, Insightful, Conversational Marketing</h2>
                
                <p>Use Proactive Messaging to engage buyers with personalized discounts, back-in-stock alerts, pending cart reminders & more.</p>
                <p>Use Conversational Ads to answer in-the-moment queries and generate leads instantly while increasing ROAS.</p>
                <p>Set up one-time or create recurring Bulk Campaigns to expand reach and amplify customer engagement.</p>
                <div className='column_buttons'>
                  <a href='/'>
                    <button className='btn column_content_btn'>Get started</button>
                  </a>
                  </div>
              </div>
            </div>

            {/* thumb */}
            <div className='column_thumb col_6'>
              <img src={HomeMarketing} alt="robot" /> 
            </div>

          </div>
        </div>
      </section>
  )
}

export default Column_Section2