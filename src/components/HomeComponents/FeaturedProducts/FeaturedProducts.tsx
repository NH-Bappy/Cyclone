import React from 'react'
import Container from '../../commonComponents/Container'
import { assets } from '../../../helpers/assetsProvider'

const FeaturedProducts: React.FC = () => {
  return (
    <div className='py-10'>
        <Container>
            <div className="lg:grid lg:grid-cols-[1fr_3fr] gap-3">
                <div className="">
                    <img src={assets.ProductBanner} alt={"banner picture"} className='shadow-2xl w-full h-full object-cover' />
                </div>
                <div className="">2</div>
            </div>
        </Container>
    </div>
  )
}

export default React.memo(FeaturedProducts)