import React from 'react'
import Container from '../../commonComponents/Container'
import { assets } from '../../../helpers/assetsProvider'
import { sliderImage } from "../../../content/index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';




const Banner = () => {
    return (
        <div className='py-10'>
            <Container>
                <div className="grid grid-cols-[2fr_1fr] gap-x-4">




                    {/* slider */}
                    <div className="rounded h-[450px] overflow-hidden">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 1000 }}
                            loop={true}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {sliderImage.map((item) => (
                                <SwiperSlide key={item.id} className="w-full h-full">
                                    <a href={item.link} className="block w-full h-full">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </a>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>





                    <div className="grid grid-rows-2 gap-y-4">
                        <div className="rounded w-full h-full bg-cover">
                            <img src={assets.bannerRightTop} alt={assets.bannerRightTop} />
                        </div>
                        <div className="rounded w-full h-full bg-cover">
                            <img src={assets.bannerRightBottom} alt={assets.bannerRightBottom} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default React.memo(Banner)