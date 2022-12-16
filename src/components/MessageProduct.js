import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

// product images
import productOne from '../assets/images/products/res1.jpeg'
import productTwo from '../assets/images/products/res2.jpeg'
import productThree from '../assets/images/products/res3.jpeg'
import productFour from '../assets/images/products/res4.jpeg'
import productFive from '../assets/images/products/res5.png'
import productSix from '../assets/images/products/res6.png'

function MessageProduct() {
  return (
    <>
      <div className="product-carousel-wrapper">
      
        <Swiper 
        navigation={true} 
        spaceBetween={5}
        grabCursor={true}
        slidesPerView={2}
        // loop={true} 
        modules={[Navigation]} 
        className="mySwiper">

        {/* item */}
        <SwiperSlide>
          <div className="chat-product-carousel-item">
            {/* thumb */}
            <div className="chat-product-carousel-thumb">
              <img src={productOne} alt="product one" />
            </div>
            {/* content */}
            <div className="chat-product-details">
                <a href="#">
                  <h2>Healthy Breakfast Egg</h2>
              </a>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis </p>
            </div>
              <button className='chat-product-order-button'>Order Now</button>
          </div>
        </SwiperSlide>

        {/* item */}
        <SwiperSlide>
        {/* item */}
        <div className="chat-product-carousel-item">
          {/* thumb */}
          <div className="chat-product-carousel-thumb">
            <img src={productTwo} alt="product one" />
          </div>
          {/* content */}
          <div className="chat-product-details">
            <a href="#">
              <h2>Salad With Chicken</h2>
            </a>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis </p>
          </div>
            <button className='chat-product-order-button'>Order Now</button>
        </div>
        </SwiperSlide>

        {/* item */}
        <SwiperSlide>
        <div className="chat-product-carousel-item">
          {/* thumb */}
          <div className="chat-product-carousel-thumb">
            <img src={productOne} alt="product one" />
          </div>
          {/* content */}
          <div className="chat-product-details">
            <a href="#">
              <h2>Grille With Butter</h2>
            </a>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis </p>
          </div>
            <button className='chat-product-order-button'>Order Now</button>
        </div>
        </SwiperSlide>

        {/* item */}
        <SwiperSlide>
          <div className="chat-product-carousel-item">
            {/* thumb */}
            <div className="chat-product-carousel-thumb">
              <img src={productOne} alt="product one" />
            </div>
            {/* content */}
            <div className="chat-product-details">
                <a href="#">
                  <h2>Healthy Breakfast Egg</h2>
              </a>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis </p>
            </div>
              <button className='chat-product-order-button'>Order Now</button>
          </div>
        </SwiperSlide>

        {/* item */}
        <SwiperSlide>
        {/* item */}
        <div className="chat-product-carousel-item">
          {/* thumb */}
          <div className="chat-product-carousel-thumb">
            <img src={productTwo} alt="product one" />
          </div>
          {/* content */}
          <div className="chat-product-details">
            <a href="#">
              <h2>Salad With Chicken</h2>
            </a>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis </p>
          </div>
            <button className='chat-product-order-button'>Order Now</button>
        </div>
        </SwiperSlide>

        {/* item */}
        <SwiperSlide>
        <div className="chat-product-carousel-item">
          {/* thumb */}
          <div className="chat-product-carousel-thumb">
            <img src={productOne} alt="product one" />
          </div>
          {/* content */}
          <div className="chat-product-details">
            <a href="#">
              <h2>Grille With Butter</h2>
            </a>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis </p>
          </div>
            <button className='chat-product-order-button'>Order Now</button>
        </div>
        </SwiperSlide>

        {/* item */}
        <SwiperSlide>
          <div className="chat-product-carousel-item">
            {/* thumb */}
            <div className="chat-product-carousel-thumb">
              <img src={productOne} alt="product one" />
            </div>
            {/* content */}
            <div className="chat-product-details">
                <a href="#">
                  <h2>Healthy Breakfast Egg</h2>
              </a>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis </p>
            </div>
              <button className='chat-product-order-button'>Order Now</button>
          </div>
        </SwiperSlide>

        {/* item */}
        <SwiperSlide>
        {/* item */}
        <div className="chat-product-carousel-item">
          {/* thumb */}
          <div className="chat-product-carousel-thumb">
            <img src={productTwo} alt="product one" />
          </div>
          {/* content */}
          <div className="chat-product-details">
            <a href="#">
              <h2>Salad With Chicken</h2>
            </a>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis </p>
          </div>
            <button className='chat-product-order-button'>Order Now</button>
        </div>
        </SwiperSlide>

        {/* item */}
        <SwiperSlide>
        <div className="chat-product-carousel-item">
          {/* thumb */}
          <div className="chat-product-carousel-thumb">
            <img src={productOne} alt="product one" />
          </div>
          {/* content */}
          <div className="chat-product-details">
            <a href="#">
              <h2>Grille With Butter</h2>
            </a>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis </p>
          </div>
            <button className='chat-product-order-button'>Order Now</button>
        </div>
        </SwiperSlide>

        </Swiper>
        </div>
    </>
  )
}

export default MessageProduct