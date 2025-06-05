import React from 'react'
import Slider from 'react-slick'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainBanner = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  const images = [
    assets.main_banner_bg,
    assets.banana_image_1,
    assets.bottom_banner_image,
    assets.main_banner_bg_sm,
  ]

  return (
    <div className='relative'>
      {/* Slider section */}
      <Slider {...sliderSettings}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className='w-full max-h-[80vh] object-cover'
          />
        ))}
      </Slider>

      {/* Banner content over the images */}
      <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-50 leading-tight lg:leading-15'>
          {/* Fresh & Affordable Home Essentials */}
        </h1>

        <div className='flex items-center mt-6 font-medium'>
          <Link
            to="/products"
            className='group flex-col-reverse col gap-2 px-7 md:px-10 mb:10 py-3 bg-green-900 hover:bg-green-700 transition rounded text-white cursor-pointer'
          >
            Shop now
            <img className='md:hidden transition group-focus:translate-x-1' src={assets.white_arrow_icon} alt="arrow" />
          </Link>

          <Link
            to="/products"
            className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'
          >
            Explore deals
            <img className='transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
