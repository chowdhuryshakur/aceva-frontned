import React from 'react'
import brand1 from '../../assets/images/brands/chatimize.svg'
import brand2 from '../../assets/images/brands/forbes.svg'
import brand3 from '../../assets/images/brands/fox.svg'
import brand4 from '../../assets/images/brands/hubspot.svg'
import brand5 from '../../assets/images/brands/vice.svg'

function Brand_Section() {
  return (
    <section className="brand_section">
      <div className="container">
        <div className="brand_title">
          <h2>They are talking about us!</h2>
        </div>

        {/* brand wrap */}
        <div className="brand_wrapper">

          {/* item */}
          <div className="brand_item">
            <img src={brand1} alt="chatimize" />
          </div>

          {/* item */}
          <div className="brand_item">
            <img src={brand2} alt="chatimize" />
          </div>

          {/* item */}
          <div className="brand_item">
            <img src={brand3} alt="chatimize" />
          </div>

          {/* item */}
          <div className="brand_item">
            <img src={brand4} alt="chatimize" />
          </div>

          {/* item */}
          <div className="brand_item">
            <img src={brand5} alt="chatimize" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brand_Section