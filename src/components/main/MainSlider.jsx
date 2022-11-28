import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { Autoplay } from 'swiper'

const MainSliderItems = ({ images }) => {
    console.log(images.volumeInfo.title)
    return (
        <Link to={`booksResults/${images.volumeInfo.title}`}>
            <figure>
                <img src={images?.volumeInfo?.imageLinks?.thumbnail} alt={images?.volumeInfo?.title} />
            </figure>
            <span>{images?.volumeInfo?.title}</span>
        </Link>
    )
}

const MainSlider = ({ images }) => {
    return (
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
            className="mySwiper"
        >
            {images &&
                images.map((images, idx) => (
                    <SwiperSlide className="book-1" key={idx}>
                        <MainSliderItems images={images} />
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}

export default MainSlider
