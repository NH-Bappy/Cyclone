import React from 'react'
import { assets } from '../../helpers/assetsProvider'
import { icons } from '../../helpers/iconProvider'

const Product: React.FC = () => {

  return (
    <div className='p-3 border w-50 border-gray-500 relative'>
      <div className="flex items-center justify-center">
        <img src={assets.A72} alt={"photo"} className='w-full h-full object-cover'/>
      </div>
      {/* rating */}


      <div className="pt-4">
        <div className="flex gap-1">
          {[1, 2, 3, 4 ,5].map(() => (
            <span className='text-primary-500 py-1 text-sm'>{icons.star}</span>
          ))}
        </div>

        {/* product details */}
        <h2 className='body_xl_400 text-gray-900'>relam A72</h2>
        <p className='body_sm_400 text-gray-900'>Wired Over-Ear Gaming Headphones with USB</p>

        {/* price */}

        <div className="flex items-center gap-x-2">
          <span className='line-through body_sm_400 text-gray-400'>$1,900</span>
          <span className='text-secondary-500 body_sm_600'>$2,999</span>
        </div>

      </div>

        {/* hot deal */}
          <div className="">
        <p className='absolute top-1 left-1 bg-secondary-500 text-gray-0 py-1 body_tiny_600  px-2 rounded'>{"BEST DEALS"}</p>
          </div>
    </div>
  )
}

export default React.memo(Product)