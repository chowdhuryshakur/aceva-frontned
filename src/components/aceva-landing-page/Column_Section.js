import React from 'react'
import HeroGif from '../../assets/video/hero-gif.gif'
import ColumnBg from '../../assets/images/bg/Home-Commerce.png'

function Column_Section() {
  return (
    <>
      <section className='column_section'>
        <div className='container'>
          <div className='column_row image-float-right'>

            {/* thumb */}
            <div className='column_thumb col_6'>
              <img src={ColumnBg} alt="robot" /> 
            </div>

            {/* content */}
            <div className='col_6'>
              <div className='column_content_wrap'>
                <h2>Intuitive conversational with Artificial Intelligence</h2>
                
                <p>Use AI powered engine to answer queries in more natural and human-like conversations. </p>
                <p>Make it easier to communicate with systems in a way that feels familiar and intuitive. These AI-powered conversation tools can help businesses improve the user experience and automate tasks such as customer service and data entry.</p>
                {/* <div className='column_buttons'>
                  <a href='/admin'>
                    <button className='btn column_content_btn'>See it in action</button>
                  </a>
                  </div> */}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Column_Section