import React from 'react'
import logoOne from '../../assets/images/brands/forbes.svg'
import WhatsApp from '../../assets/images/social-media/whatsapp-2.png'
import Telegram from '../../assets/images/social-media/telegram.png'

import dynamic from '../../assets/images/brands/dynamics365.png'
import sap from '../../assets/images/brands/sap.png'
import salesforce from '../../assets/images/brands/salesforce.png'
import oracle from '../../assets/images/brands/oracle-erp.png'
import sage from '../../assets/images/brands/sage.png'
import robocrop from '../../assets/images/brands/robocrop.png'
import infor from '../../assets/images/brands/infor.png'

function Integrate_Brand_Section() {
  return (
    <>
      <section className="int-brand-section">
        <div className="container">
          <div className="int-brand-title">
            <h2>ACEVA integrates with all your work tools</h2>
            <p>Connect ACEVA to dozen of tools and platforms in less than 5 minutes</p>
          </div>
          <div className="int-brand-wrapper">
            <div className="int-brand-two-col-wrap">
              <div className="int-brand-col-item">
                <img src={WhatsApp} alt="" />
              </div>
              <div className="int-brand-col-item">
                <img src={Telegram} alt="" />
              </div>
            </div>

            {/* all logo wrapper */}
            <div className="int-brand-all-wrapper">
              <div className="int-brand-all-item">
                <img src={dynamic} alt="" />
              </div>
              <div className="int-brand-all-item">
                <img src={infor} alt="" />
              </div>
              <div className="int-brand-all-item">
                <img src={oracle} alt="" />
              </div>
              <div className="int-brand-all-item">
                <img src={sap} alt="" />
              </div>
              <div className="int-brand-all-item">
                <img src={robocrop} alt="" />
              </div>
              <div className="int-brand-all-item">
                <img src={sage} alt="" />
              </div>
              <div className="int-brand-all-item">
                <img src={salesforce} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Integrate_Brand_Section