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
                
                <p>Use AI Conversational to answer in-the-moment queries and generate leads instantly while increasing ROAS. </p>
                <p>Set up one-time or create recurring Bulk Campaigns to expand reach and amplify customer engagement.</p>
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