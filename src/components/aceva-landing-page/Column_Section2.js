import React from 'react'
import HomeMarketing from '../../assets/images/bg/desktop-screen-dashboard.png'

function Column_Section2() {
  return (
    <section className='column_section'>
        <div className='container'>
          <div className='column_row'>

            {/* thumb */}
            <div className='column_thumb col_6'>
              <img src={HomeMarketing} alt="robot" /> 
            </div>

            {/* content */}
            <div className='col_6'>
              <div className='column_content_wrap'>
                <h2>Business Insights with analytics dashboard</h2>
                
                <p>Analytics dashboard with all the information that matters. Connect to your database and visualize your insight with our dashboard tools.</p>
                
                {/* <div className='column_buttons'>
                  <a href='/'>
                    <button className='btn column_content_btn'>Get started</button>
                  </a>
                  </div> */}
              </div>
            </div>

          </div>
        </div>
      </section>
  )
}

export default Column_Section2