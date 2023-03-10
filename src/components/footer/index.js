import React from 'react'
import { Link } from 'react-router-dom'

// images
import logo from '../../assets/images/aceva.png'
import bg from '../../assets/images/bg/bg.png'
import SocialMedia from '../SocialMedia'

function index() {
  return (
    <>
    <section className='footer-section'>
      <div className="dia-footer-shape3 position-absolute">
          <img src={bg} alt="bg shape" />
      </div>
      <div className="container">
        <div className="footer-wrapper">

          {/* item */}
          <div className="footer-item">

            {/* logo */}
            <div className="footer-item-logo">
              <Link to="/">
                <img src={logo} alt="site logo" />
              </Link>
              {/* <h2>
                <span className="orangered">Wip</span> Data
              </h2> */}
            </div>

            {/* detials */}
            <div className="footer-company-bio">
              <p>
              A chatbot or chatterbot is a software application used to conduct an on-line chat conversation via text or text-to-speech.
              </p>
            </div>

            {/* social media */}
            <div className="footer-item-social">
              <SocialMedia />
            </div>
          </div>

          {/* item | company detials */}
          <div className="footer-item">
            <div className="footer-title">
              <h3>Company Details</h3>
            </div>
            <div className="footer-item-list">
              <ul>
                <li>
                  <Link to="/page/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/page/about-us">Contact Us</Link>
                </li>
                <li>
                  <Link to="/page/about-us">Privecy Policy</Link>
                </li>
                <li>
                  <Link to="/page/about-us">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/page/about-us">Carriar</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* item | services */}
          <div className="footer-item">
            <div className="footer-title">
              <h3>Company Services</h3>
            </div>
            <div className="footer-item-list">
              <ul>
                <li>
                  <a target="_blank" href='https://www.wipdata.com/bi/'>Business Intelligence</a>
                </li>
                <li>
                  <a target="_blank" href="https://www.wipdata.com/rpa/">Robotic Process Automation</a>
                </li>
                <li>
                  <a target="_blank" href="https://www.wipdata.com/ai-chatbots-nlp/">AI Chatbot NLP</a>
                </li>
                <li>
                  <Link to="/page/about-us">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/page/about-us">Carriar</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* item | conteact detials */}
          <div className="footer-item">
            <div className="footer-title">
              <h3>Headquarters</h3>
            </div>
            <div className="footer-item-list">
              <ul>
                <li>
                  <span className='footer-address-title'>Phone Number: </span>
                  <span className="footer-address-details"> <a href="tel:+6011 1123 4515">+6011 1123 4515</a> </span>
                </li>
                <li>
                  <span className='footer-address-title'>Email Address: </span>
                  <span className="footer-address-details"><a onClick={() => window.location = 'mailto:info@wipdata.com'}> info@wipdata.com</a></span>
                </li>
                <li>
                  <span className='footer-address-title'>Working Hours: </span>
                  <span className="footer-address-details"> 9:00 AM ??? 6:00 PM</span>
                </li>
                <li>
                  <span className='footer-address-title'>Office: </span>
                  <span className="footer-address-details"> B608, Kelana Square, 47301 Petaling Jaya, Selangor, Malaysia</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>

    {/* bottom */}
    <section className="footer-bottom-section">
        <div className="container">
          <div className="footer-bottom">
            <div className="footer-bottom-item">
              <p>Website Design & Developed By <Link to="/"><img src={logo} /> WipData</Link> </p>
            </div>
            <div className="footer-bottom-item">
              <p>?? copyright all right reserved 2022</p>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default index