import React from 'react'
import { assets } from '../../helpers/assetsProvider'
import { icons } from '../../helpers/iconProvider'
import { useGetApi } from '../../api/api'

type featureProductProps = {
  id: number
}


const Product = ({id}: featureProductProps) => {



  const { data } = useGetApi()



  return (

    <div key={id} className='p-3 border shadow border-gray-100 rounded relative'>
      <div className="flex items-center justify-center">
        <img src={assets.A72} alt={"photo"} className='w-full h-full object-cover'/>
      </div>
      {/* rating */}


      <div className="pt-4">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4 ,5].map(() => (
            <span className='text-primary-500 py-0.5 text-sm'>{icons.star}</span>
          ))}
          <span className='text-gray-500 body_tiny_400'>(749)</span>
        </div>

        {/* product details */}
        <h2 className='body_xl_400 text-gray-900'>{data.products[0].title}</h2>
        <p className='body_sm_400 text-gray-500 truncate'>Wired Over-Ear Gaming Headphones with USB</p>

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