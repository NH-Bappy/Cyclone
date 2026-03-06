import React from 'react'
import Container from '../../commonComponents/Container'
import { assets } from '../../../helpers/assetsProvider'

const Banner = () => {
  return (
    <div className='py-10'>
        <Container>
            <div className="grid grid-cols-[2fr_1fr] gap-x-4">
                <div className="rounded w-full h-full bg-cover">
                      <img src={assets.bannerLeft} alt={assets.bannerLeft} />
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