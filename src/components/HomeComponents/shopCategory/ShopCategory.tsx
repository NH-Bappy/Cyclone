import React from 'react'
import Container from '../../commonComponents/Container'
import { shopCategory } from '../../../content'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';

const ShopCategory = () => {
  return (
    <div className='my-10 w-full'>
      <Container>
        <div className="grid justify-center">
          <h1 className='heading1 text-gray-900'>Shop with Categories</h1>
        </div>

        {/* slider category */}

        <div className="my-10">


          <Swiper
            className="mySwiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            modules={[Navigation, Scrollbar, Autoplay]}
            scrollbar={{ draggable: true }}
            spaceBetween={30}
            slidesPerView={6}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            // mobile break point
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
            }}
          >
            {shopCategory.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="grid justify-center p-5 border border-gray-100 rounded">
                  <img src={item.img} alt={"computer image"} />
                  <h2 className='body_md_500 text-gray-900 text-center'>{item.name}</h2>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </Container>
    </div>
  )
}

export default React.memo(ShopCategory)