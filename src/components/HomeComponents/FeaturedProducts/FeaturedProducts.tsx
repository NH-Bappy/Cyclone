import React, { useState } from 'react'
import Container from '../../commonComponents/Container'
import { assets } from '../../../helpers/assetsProvider'
import { icons } from '../../../helpers/iconProvider'
import { ArrowBigLeft } from 'lucide-react'

const FeaturedProducts: React.FC = () => {


    const [productList] = useState([
        {
            id: 1,
            name: "All Product",
            slug: "AllProduct"
        },
        {
            id: 2,
            name: "Smart Phone",
            slug: "SmartPhone"
        },
        {
            id: 3,
            name: "Laptop",
            slug: "Laptop"
        },
        {
            id: 4,
            name: "Headphone",
            slug: "Headphone"
        },
        {
            id: 5,
            name: "TV",
            slug: "TV"
        },
    ])




    return (
        <div className='py-10'>
            <Container>
                <div className="lg:grid lg:grid-cols-[1fr_3fr] gap-x-4">
                    <div className="">
                        <img src={assets.ProductBanner} alt={"banner picture"} className='shadow-2xl w-full h-full object-cover' />
                    </div>
                    <div className="grid grid-rows-[0.5fr_4fr] rounded">
                        <div className="grid grid-cols-2">
                            <h2 className='heading3 text-gray-900'>Featured Products</h2>
                            <div className="">

                                <ul className='flex items-center gap-x-5'>
                                    {productList.map((item) => (
                                        <li
                                            key={item.id}
                                            className='body_sm_400 text-gray-900 CustomStyle'
                                        >
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                                <p className='flex gap-x-3 items-center text-primary-500'>
                                    Browse All Product
                                <span className='text-2xl'>{icons.rightArrow}</span></p>

                            </div>
                        </div>
                        <div className="">low tir</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default React.memo(FeaturedProducts)