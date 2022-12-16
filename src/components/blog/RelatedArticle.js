import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/index'

function RelatedArticleSection() {
  return (
    <>
      <section className="latest-article-section">
        <div className="container">
          <div className="blog-title">
            <h2>Related Articles</h2>
          </div>
          <div className="latest-article-wrapper">


            {/* item */}
            <div className="latest-article-item">
              <div className="latest-article-thumb">
                <Link to="/blog/4243">
                  <img src="https://res.cloudinary.com/dn1j6dpd7/image/fetch/c_fill,f_auto,h_832,q_auto,w_1856/https://chatbot-blog.labs.livechat.com/app/uploads/2022/06/towfiqu-barbhuiya-oZuBNC-6E2s-unsplash-1-1.png" alt="featured right" />
                </Link>
                <div className="blog-category">
                  <p>Machine Learning</p>
                </div>
              </div>
              <div className="latest-article-content">
                <Link to="/blog/247289374">
                  <h2>Top Tools and Technologies for Creating Effective Customer Surveys</h2>
                  <p>Looking to do a chatbot project for your WordPress website? We’ve got the top 10 WordPress chatbot plugins here for you to choose from.</p>
                </Link>
              </div>
            </div>

            {/* item */}
            <div className="latest-article-item">
              <div className="latest-article-thumb">
                <Link to="/blog/4243">
                  <img src="https://www.tidio.com/_next/image/?url=https%3A%2F%2Fwww.tidio.com%2Fwp-content%2Fuploads%2Fsmall-businesses-statistics-cover-image.png&w=1920&q=75" alt="featured right" />
                </Link>
                <div className="blog-category">
                  <p>Machine Learning</p>
                </div>
              </div>
              <div className="latest-article-content">
                <Link to="/blog/247289374">
                  <h2>10 Ways to Optimize Website User Experience</h2>
                  <p>Looking to do a chatbot project for your WordPress website? We’ve got the top 10 WordPress chatbot plugins here for you to choose from.</p>
                </Link>
              </div>
            </div>

            {/* item */}
            <div className="latest-article-item">
              <div className="latest-article-thumb">
                <Link to="/blog/4243">
                  <img src="https://res.cloudinary.com/dn1j6dpd7/image/fetch/c_fill,f_auto,h_832,q_auto,w_1856/https://chatbot-blog.labs.livechat.com/app/uploads/2022/09/AdobeStock_368358627-1-scaled.jpeg" alt="featured right" />
                </Link>
                <div className="blog-category">
                  <p>Machine Learning</p>
                </div>
              </div>
              <div className="latest-article-content">
                <Link to="/blog/247289374">
                  <h2>Key Chatbot Statistics You Should Follow in 2022</h2>
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

export default RelatedArticleSection