import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { Autoplay } from 'swiper'

const BooksSliderItems = ({ sliderTwo }) => {
    return (
        <Link to={`/BooksResults/${sliderTwo?.volumeInfo?.title}`}>
            <img src={sliderTwo?.volumeInfo?.imageLinks?.thumbnail} alt={sliderTwo?.volumeInfo?.title} />
            <span>{sliderTwo?.volumeInfo?.title}</span>
        </Link>
    )
}

const BooksSlider = ({ sliderTwo }) => {
    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={50}
                // loop={true}
                // loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper line__two"
            >
                {sliderTwo.map((sliderTwo, idx) => (
                    <SwiperSlide className="bookAll__img" key={idx}>
                        <BooksSliderItems sliderTwo={sliderTwo} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <img src={process.env.PUBLIC_URL + '/img/booksBar.svg'} alt="bookBar"></img>
        </>
    )
}

export default BooksSlider
