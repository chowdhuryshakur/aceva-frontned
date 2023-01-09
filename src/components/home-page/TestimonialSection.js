import React from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

// import images
import { AiTwotoneStar } from 'react-icons/ai'
import personThree from '../../assets/images/peoples/chat-four.jpg'
import personTwo from '../../assets/images/peoples/chat-three.jpg'
import personOne from '../../assets/images/peoples/chat-two.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function TestimonialSection() {

  return (
    <>
      <section className='featured-section testi-section'>
        <div className='container'>
          <div className='featured-container'>

            {/* title */}
            <div className='section-title'>
              <span className='sub-title purple-color'>Testimonials</span>
              <h2>Happy Client Reviews</h2>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade ]}
              spaceBetween={15}
              slidesPerView={3}
              // navigation
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                  spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
                // when window width is >= 992px
                992: {
                  width: 992,
                  slidesPerView: 3,
                },
              }}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >

              <SwiperSlide>
                <div className="single-features-item comment-style testi-item">
                  <div className="testi-profile">
                    <div className="icon testi-thumb">
                      <img src={personOne} alt="comment" />
                    </div>
                    <div className="testi-excerpt">
                      <h3>Garlic mathew</h3>
                      <p>Founder & CEO</p>
                    </div>
                  </div>
                  <p> <RiDoubleQuotesL className='quote-icon' /> I love how easy ACEVA is to set up. I was up and running in less than 10 minutes AND that included chatting with their amazing tech support. We are starting with free, see how we do then upgrade! <RiDoubleQuotesR className='quote-icon' />
                  </p>

                  <ul className='review-wrap'>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                  </ul>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-features-item comment-style testi-item">
                  <div className="testi-profile">
                    <div className="icon testi-thumb">
                      <img src={personTwo} alt="comment" />
                    </div>
                    <div className="testi-excerpt">
                      <h3>Jhon kabir</h3>
                      <p>Xboard - Founder</p>
                    </div>
                  </div>
                  <p> <RiDoubleQuotesL className='quote-icon' /> The design customization is excellent even in the free plan. The chatbot works like a charm, and we couldn't be happier with ACEVA's support team. Also, the pricing is fair. <RiDoubleQuotesR className='quote-icon' />
                  </p>

                  <ul className='review-wrap'>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                  </ul>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-features-item comment-style testi-item">
                  <div className="testi-profile">
                    <div className="icon testi-thumb">
                      <img src={personThree} alt="comment" />
                    </div>
                    <div className="testi-excerpt">
                      <h3>Avinash parker</h3>
                      <p>Managing director - Daraz</p>
                    </div>
                  </div>
                  <p> <RiDoubleQuotesL className='quote-icon' /> The automation - hands down. I use Tidio all the time and suggest it to my clients for its ease of use and excellent support. I've not used it yet with shopping carts but I can really imagine it being awesome - will definately test it out.<RiDoubleQuotesR className='quote-icon' />
                  </p>

                  <ul className='review-wrap'>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                  </ul>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-features-item comment-style testi-item">
                  <div className="testi-profile">
                    <div className="icon testi-thumb">
                      <img src={personOne} alt="comment" />
                    </div>
                    <div className="testi-excerpt">
                      <h3>Garlic mathew</h3>
                      <p>Founder & CEO</p>
                    </div>
                  </div>
                  <p> <RiDoubleQuotesL className='quote-icon' /> The fact that I can have all the features of other chatbot tools + online live chat in multiple language + email marketing service with ready built tempaltes and above all, a perfect support team that are always online for you to help. <RiDoubleQuotesR className='quote-icon' />
                  </p>

                  <ul className='review-wrap'>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                  </ul>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-features-item comment-style testi-item">
                  <div className="testi-profile">
                    <div className="icon testi-thumb">
                      <img src={personTwo} alt="comment" />
                    </div>
                    <div className="testi-excerpt">
                      <h3>Jhon kabir</h3>
                      <p>Xboard - Founder</p>
                    </div>
                  </div>
                  <p> <RiDoubleQuotesL className='quote-icon' /> The design customization is excellent even in the free plan. The chatbot works like a charm, and we couldn't be happier with ACEVA's support team. Also, the pricing is fair. <RiDoubleQuotesR className='quote-icon' />
                  </p>

                  <ul className='review-wrap'>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                  </ul>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-features-item comment-style testi-item">
                  <div className="testi-profile">
                    <div className="icon testi-thumb">
                      <img src={personThree} alt="comment" />
                    </div>
                    <div className="testi-excerpt">
                      <h3>Avinash parker</h3>
                      <p>Managing director - Daraz</p>
                    </div>
                  </div>
                  <p> <RiDoubleQuotesL className='quote-icon' /> The automation - hands down. I use ACEVA all the time and suggest it to my clients for its ease of use and excellent support. I've not used it yet with shopping carts but I can really imagine it being awesome - will definately test it out. <RiDoubleQuotesR className='quote-icon' />
                  </p>

                  <ul className='review-wrap'>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                    <li><AiTwotoneStar /></li>
                  </ul>
                </div>
              </SwiperSlide>

            </Swiper>

            {/* featured wrapper */}
            <div className='featured-wrapper'>

              {/* single item */}
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialSection