import React from 'react'
import Container from '../../commonComponents/Container'

const TopNab = () => {
    return (
        <div className='bg-secondary-700 py-4'>
            <Container>
                <div className="grid grid-cols-2 items-center">
                    <h2 className='body_sm_400 text-white'>Welcome to Cyclone online eCommerce store.{" "}</h2>
                    <div className="">
                        <p className='body_sm_400 text-white'>Follow Us</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TopNab