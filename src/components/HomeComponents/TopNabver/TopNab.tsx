import React, { useState } from 'react'
import Container from '../../commonComponents/Container'
import { icons } from '../../../helpers/iconProvider'

const TopNab = () => {

    const [socialIcons] = useState([
        icons.twitter,
        icons.facebook,
        icons.pinterest,
        icons.reddit,
        icons.youtube,
        icons.instagram
    ])



    return (
        <div className='bg-secondary-700 py-4'>
            <Container>
                <div className="grid grid-cols-2 items-center">
                    <h2 className='body_sm_400 text-white'>Welcome to Cyclone online eCommerce store.{" "}</h2>
                    <div className="grid justify-end">
                        <div className='grid auto-cols-max grid-flow-col items-center gap-x-4 body_sm_400 text-gray-0 pr-2'>
                            Follow Us
                            <div className="grid grid-cols-6 gap-x-3">
                                {socialIcons?.map((icons, index) => (
                                    <span key={index} className='hover:text-warning-500 cursor-pointer transition-all hover:scale-125'>{icons}</span>
                                ))}
                            </div>
                            <div className="bg-gray-0 h-5 w-[0.1px]"></div>
                            <div className="flex gap-x-4 body_sm_400 text-gray-0">
                                <div className="flex justify-center items-center gap-x-1">Eng {icons.downArrow}</div>
                                <div className="flex justify-center items-center gap-x-1">USD {icons.downArrow}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default React.memo(TopNab);