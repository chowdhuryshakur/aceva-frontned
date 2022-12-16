import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer'
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
import axios from 'axios'

function AuthorScreen() {

  return (
    <>
    <Header />
      <section className="author-section">
        <div className="container">
          <div className="author-wrapper">

            {/* author sidebar */}
            <div className="author-sidebar">
              <div className="author-thumb">
                <img src="https://www.tidio.com/wp-content/uploads/beata-stefanowicz-2.png" alt="author" />
              </div>
              <div className="author-excerpt">
                <h2>Wojciech Gumiński</h2>
                <p className='author-position'>Customer Education Expert</p>
                <p className='author-bio'>Wojciech Gumiński is a Customer Education Specialist at LiveChat and a LiveChat Help Center handler. He’s passionate about the human side of technology and making it consumer friendly.</p>
                <div className="author-social">
                  <BsFacebook />
                  <BsTwitter />
                  <BsLinkedin />
                </div>
              </div>
            </div>

            {/* author articles */}
            <div className="author-article-wrapper">

              {/* title */}
              <div className="category-title author-title">
                <h2>Author's articles</h2>
                <div className="underline"></div>
              </div>

              {/* articles */}
              <div className="author-articles">

                {/* item */}
                <div className="latest-article-item author-article-item">
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
                <div className="latest-article-item author-article-item">
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
                <div className="latest-article-item author-article-item">
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

              </div>
            </div>

          </div>
        </div>
      </section>
    <Footer />
    </>
  )
}

export default AuthorScreen