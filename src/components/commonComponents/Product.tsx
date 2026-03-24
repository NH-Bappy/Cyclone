import React from 'react'
import { assets } from '../../helpers/assetsProvider'
import { icons } from '../../helpers/iconProvider'


type featureProductProps = {
  product: any;
}


const Product = ({ product }: featureProductProps) => {

  const originalPrice = product.discountPercentage
    ? (product.price / (1 - product.discountPercentage / 100)).toFixed(0)
    : null;


  return (

    <div className='p-3 border shadow border-gray-100 rounded relative'>
      <div className="flex items-center justify-center">
        <img src={product.images[0] || assets.A72} alt={"photo"} className='w-full h-full object-cover'/>
      </div>
      {/* rating */}


      <div className="pt-4">

          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star, i) => (
              <span key={i} className="text-primary-500 text-sm">
                {star <= Math.round(product.rating) ? icons.star : icons.halfStar}
              </span>
            ))}
            <span className="text-gray-500 body_tiny_400">
              ({product.rating})
            </span>
          </div>


        {/* product details */}
        <h2 className='body_xl_400 text-gray-900'>{product.title}</h2>
        <p className='body_sm_400 text-gray-500 truncate'>{product.description  || "Wired Over-Ear Gaming Headphones with USB"}</p>

        {/* price */}

        <div className="flex items-center gap-x-2">
          <span className='line-through body_sm_400 text-gray-400'>{originalPrice}</span>
          <span className='text-secondary-500 body_sm_600'>{product.price || "$1,900"}</span>
        </div>

      </div>

        {/* hot deal */}
          <div className="">
        <p className='absolute top-1 left-1 bg-secondary-500 text-gray-0 py-1 body_tiny_600  px-2 rounded'>{product.discountPercentage  || "BEST DEALS"}</p>
          </div>
    </div>
  )
}

export default React.memo(Product)