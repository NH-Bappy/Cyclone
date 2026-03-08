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
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-x-4 h-[500px]">




                    {/* slider */}
                    <div className="rounded h-[500px] overflow-hidden">
                        <Swiper
                            className="h-full"
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 1000 }}
                            loop={true}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {sliderImage.map((item) => (
                                <SwiperSlide key={item.id} className="h-full">
                                    <a href={item.link} className="block w-full h-full">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full sm:object-contain md:object-cover lg:object-fill bg-center"
                                        />
                                    </a>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-2">
                        <div className="rounded  overflow-hidden h-full">
                            <img
                                src={assets.bannerRightTop}
                                alt={assets.bannerRightTop}
                                className="w-full h-full object-contain object-center"
                            />
                        </div>
                        <div className="rounded">
                            <img src={assets.bannerRightBottom}
                                alt={assets.bannerRightBottom}
                                className="w-full h-full object-contain object-center"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default React.memo(Banner)