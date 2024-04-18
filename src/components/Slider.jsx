import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderItems } from '../assets/Data.js';

const SimpleSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'linear',
        adaptiveHeight: true,
    };

    return (
        <div>
            
            <Slider {...settings}>
                {sliderItems.map((sliderItem) => (
                    <div key={sliderItem.id}>
                        <div className='relative flex'>
                            <img className='w-full object-cover' src={sliderItem.img} alt="" />
                            <div className='absolute left-1/2 top-1/3 flex flex-col justify-center  items-start p-8'>
                                <h1 className='font-bold text-black text-4xl mb-4'>{sliderItem.title}</h1>
                                <p className='text-black'>{sliderItem.desc}</p>
                                <button className='text-xl bg-blue-500 text-white p-2 rounded-md mt-6 '>SHOW NOW</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SimpleSlider;
