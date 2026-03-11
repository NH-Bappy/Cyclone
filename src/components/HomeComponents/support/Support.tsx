import React, { useState } from 'react'
import Container from '../../commonComponents/Container'
import { assets } from '../../../helpers/assetsProvider'



const Support = () => {

    const [support, setSupport] = React.useState([
        {
            id: 1,
            name: "Fasted Delivery",
            description: "Delivery in 24/H",
            icon: assets.packages,
        },
        {
            id: 2,
            name: "24 Hours Return",
            description: "100% money-back guarantee",
            icon: assets.trophy,
        },
        {
            id: 3,
            name: "Secure Payment",
            description: "Your money is safe",
            icon: assets.creditCard,
        },
        {
            id: 4,
            name: "Support 24/7",
            description: "Live contact/message",
            icon: assets.headPhone,
        },
    ])





    return (
        <div className='my-20 w-full'>
            <Container>
                <div className="border border-gray-100 px-10 py-6 grid grid-cols-4 gap-x-5 rounded">

                    {support.map((item) => (
                        <div
                            key={item.id}
                            className={support.length == item.id ? "flex items-center gap-x-3" : "flex items-center gap-x-3 border-r border-r-gray-100 cursor-pointer"}
                        >
                            <img
                                src={item.icon}
                                alt="iconImage"
                                className='text-gray-900 object-center'
                            />
                            <div className="">
                                <h2 className='text-lg label3 text-gray-900 pb-2'>
                                    {item.name}
                                </h2>
                                <p className='text-gray-600 body_sm_400'>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}





                </div>
            </Container>
        </div>
    )
}

export default React.memo(Support)