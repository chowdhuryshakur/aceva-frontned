import React from 'react'
import { IoTimeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Header from '../header/Header'

function FeaturedSection() {
  return (
    <>
      <section className="featured-blog-section">
        <div className="container">
          <div className="blog-title">
            <h2>Featured Articles</h2>
          </div>
          <div className="featured-blog-wrapper">
            {/* left */}
            <div className="featured-blog-left-wrap">
              <div className="featured-blog-left-thumb">
                <Link to='/blog/22424'>
                  <img src="https://res.cloudinary.com/dn1j6dpd7/image/fetch/c_fill,f_auto,h_832,q_auto,w_1856/https://chatbot-blog.labs.livechat.com/app/uploads/2022/11/Frame-3510-1.png" alt="fetatued blog left" />
                </Link>
              </div>
              <div className="featured-blog-left-content">
                <Link to="/blog/423434">
                  <h2>10 Ways to Optimize Website User Experience</h2>
                </Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur inventore quidem accusantium saepe, nemo totam quod quam earum magni eos modi obcaecati soluta corporis culpa ratione ipsa aut asperiores. Explicabo?</p>

                {/* excerpt */}
                <div className="featured-blog-left-excerpt">

                  {/* author */}
                  <div className="featured-blog-left-excerpt-author">
                      <div className="fetured-blog-left-author-thumb">
                        <Link to="/author/84973">
                          <img src="https://res.cloudinary.com/dn1j6dpd7/image/fetch/c_fill,f_auto,h_832,q_auto,w_1856/https://chatbot-blog.labs.livechat.com/app/uploads/2022/11/Frame-3510-1.png" alt="" />
                          <span>Suja Krishnan</span>
                        </Link>
                      </div>
                  </div>

                  {/* data */}
                  <div className="featured-blog-left-excerpt-date">
                    <p> <IoTimeOutline /> Published: 23 July, 2023</p>
                  </div>
                </div>
              </div>

            </div>

            {/* right */}
            <div className="featured-blog-right-wrap">
              <div className="featured-blog-right-thumb">
                <Link to="/blog/4243">
                  <img src="https://res.cloudinary.com/dn1j6dpd7/image/fetch/c_fill,f_auto,h_832,q_auto,w_1856/https://chatbot-blog.labs.livechat.com/app/uploads/2022/08/AdobeStock_477990967-scaled.jpeg" alt="featured right" />
                </Link>
              </div>
              <div className="featured-blog-right-content">
                <Link to="/blog/247289374">
                  <h2>10 Ways to Optimize Website User Experience</h2>
                  <p>Looking to do a chatbot project for your WordPress website? We’ve got the top 10 WordPress chatbot plugins here for you to choose from.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedSection