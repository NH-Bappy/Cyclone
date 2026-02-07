import React from 'react'
import Container from '../../commonComponents/Container'
import { assets } from '../../../helpers/assetsProvider'
import Search from '../../commonComponents/Search'
import { icons } from '../../../helpers/iconProvider'

const Menu = () => {
  return (
    <div className='bg-secondary-700 py-4 border-t border-t-gray-500'>
      <Container>
        <div className="grid grid-cols-3 items-center">
          <img src={assets.logo} alt={assets.logo} />

          {/* search */}
          <Search className='relative'>
            <input
              type="search"
              placeholder='Search for anything...'
              className='bg-gray-0 w-full py-2 rounded outline-none text-gray-800 body_sm_400 pl-3 pr-12' />
              <span className='text-gray-800 text-xl absolute top-2 right-3'>{icons.search}</span>
          </Search>
          {/* search */}

          {/* cart wish lint and account */}

          <div className="flex items-center justify-end">
            <div className="flex items-center gap-x-4">
              <span className='relative text-gray-0 text-2xl'>
                {icons.cart}
              <span className='absolute -top-2 -left-2 bg-gray-0 border border-secondary-800 text-gray-900 text-[10px] font-bold rounded-full px-1.5 py-0.5'>
                3
              </span>
              </span>
              <span className='text-gray-0 text-2xl'>{icons.heart}</span>
              <span className='text-gray-0 text-2xl'>{icons.user}</span>
            </div>
          </div>




        </div>
      </Container>
    </div>
  )
}

export default Menu