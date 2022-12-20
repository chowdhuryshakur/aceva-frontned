import React from 'react'
import { Link } from 'react-router-dom'
import LatestArticleSection from '../components/blog/LatestArticleSection'
import Header from '../components/header/Header'
import Footer from '../components/footer'
import RelatedArticleSection from '../components/blog/RelatedArticle'
import {IoTimeOutline} from 'react-icons/io5'

function PageDetailsScreen() {
  return (
    <>
      <Header />
      <section className="blog-details-section">
        <div className="container">
          <div className="blog-details-wrapper page-details-wrapper">

            {/* category */}
            {/* <div className="blog-details-category-wrap">
              <li className='category-badge'><Link to="/category/423434">AI</Link></li>
              <li className='category-badge'><Link to="/category/423434">Machine Learning</Link></li>
            </div> */}

            {/* title */}
            <div className="blog-details-title page-details-title">
              <h1>About Us</h1>
              <div className="dot"></div>
            </div>
            
            {/* thumb */}
            <div className="blog-details-thumb single-details-thumb">
              <img src="https://www.kemarautomation.in/wp-content/uploads/2015/12/contact-us-banner.jpg" alt="fetatued blog left" />
            </div>

            {/* excerpt */}
            <div className="featured-blog-left-excerpt">

              {/* author */}
              {/* <div className="featured-blog-left-excerpt-author">
                  <div className="fetured-blog-left-author-thumb blog-details-author">
                    <Link to="/author/84973">
                      <img src="https://res.cloudinary.com/dn1j6dpd7/image/fetch/c_fill,f_auto,h_832,q_auto,w_1856/https://chatbot-blog.labs.livechat.com/app/uploads/2022/11/Frame-3510-1.png" alt="" />
                      <span>Suja Krishnan</span>
                    </Link>
                  </div>
              </div> */}

              {/* data */}
              <div className="featured-blog-left-excerpt-date">
                <p> <IoTimeOutline /> Last Updated: 23 July, 2023</p>
              </div>
            </div>


            {/* blog content */}
            <div className="blog-content-wrapper">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quae excepturi quisquam ad fugiat omnis quos suscipit enim! Quisquam tempora saepe nostrum, amet quod consequuntur officiis dolores deleniti sit iure, voluptates id nesciunt autem tempore! Deserunt non voluptatum porro dolorum necessitatibus id quibusdam nisi vero! Nulla sequi placeat delectus quam?</p>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis impedit quasi sit natus, magnam itaque quam aspernatur dolor tempore saepe.</p>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quia quasi accusamus, quae autem assumenda quibusdam accusantium officiis obcaecati repellat repudiandae iure ut veritatis dolores temporibus molestias commodi! Excepturi iure aperiam temporibus voluptatum fuga qui vero, molestias atque nesciunt soluta, voluptatem, molestiae magnam. Perspiciatis maiores quam deserunt accusantium ipsam cumque quos animi culpa. Tempore, vel sunt incidunt molestiae consequuntur nihil magnam! Ex tempora sunt hic repellat tenetur molestiae praesentium numquam dolores cumque laborum culpa velit, eveniet iure quam quas! Beatae enim corporis adipisci distinctio non quibusdam excepturi velit libero delectus incidunt? Id minima ad voluptatibus autem, consequatur modi at ipsum?</p>
            </div>

            {/* related articles */}
            {/* <RelatedArticleSection /> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PageDetailsScreen