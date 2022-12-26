import React from 'react'
import HeroGif from '../../assets/video/hero-gif.gif'
import ColumnBg from '../../assets/images/bg/Home-Commerce.webp'

function Column_Section() {
  return (
    <>
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
                <h2>All-in-one Chatbot for Commerce</h2>
                
                <p>Make product information dynamic and instantly available to enable buyer decision-making.</p>
                <p>Provide faster checkout to convert shoppers to customers and improve purchase experience.</p>
                <p>Keep buyers informed with a timely order confirmation and product delivery support.</p>
                <div className='column_buttons'>
                  <a href='/admin'>
                    <button className='btn column_content_btn'>See it in action</button>
                  </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Column_Section