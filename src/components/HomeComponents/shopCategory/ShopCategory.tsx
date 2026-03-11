import React from 'react'
import Container from '../../commonComponents/Container'
import { shopCategory } from '../../../content'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


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
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {shopCategory.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="grid justify-center p-10 border border-gray-100 rounded">
                  <img src={item.img} alt={"computer image"} />
                  <h2 className='body_md_500 text-gray-900'>{item.name}</h2>
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