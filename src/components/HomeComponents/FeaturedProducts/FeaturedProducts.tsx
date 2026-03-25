import React, { useState } from 'react'
import Container from '../../commonComponents/Container'
import { assets } from '../../../helpers/assetsProvider'
import { icons } from '../../../helpers/iconProvider'
import { useApiCategory, useGetApi } from '../../../api/api'
import Product from '../../commonComponents/Product'


const FeaturedProducts: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


    // category show
    const { data: categoryData, isLoading: categoryLoading, error: categoryError } = useApiCategory();

    const { data, isLoading, error } = useGetApi();

    if (isLoading || categoryLoading) return <h2>Loading...</h2>;
    if (error || categoryError) return <h2>Error</h2>;

    // category show
    const displayCategories = categoryData?.slice(0, 5);

    const filteredProducts = data?.products
        ?.filter((product: any) =>
            !selectedCategory // if no category selected, show all
            || product.category.toLowerCase() === selectedCategory.toLowerCase()
        ).slice(0, 8);










    return (
        <div className='py-10'>
            <Container>
                <div className="lg:grid lg:grid-cols-[1fr_3fr] gap-x-4">
                    <div className="">
                        <img src={assets.ProductBanner} alt={"banner picture"} className='shadow-2xl w-full h-full object-cover' />
                    </div>
                    <div className="grid grid-rows-[0.3fr_4fr] rounded">

                        {/* row top */}
                        <div className="flex items-start pb-6 justify-between">
                            <h2 className='heading3 text-gray-900'>Featured Products</h2>
                            <div className="flex items-center gap-x-6">

                                <ul className='flex items-center gap-x-5'>
                                    {displayCategories?.map((cat: any) => (
                                        <li
                                            key={cat.id}
                                            className={`body_sm_400 text-gray-900 CustomStyle cursor-pointer 
                        ${selectedCategory?.toLowerCase() === cat.name.toLowerCase() ? 'font-bold text-primary-500' : ''}`}
                                            onClick={() => setSelectedCategory(cat.name)}
                                        >
                                            {cat.name}
                                        </li>
                                    ))}
                                </ul>
                                <button className='flex gap-x-1 items-center text-primary-500 body_sm_400'
                                    onClick={() => setSelectedCategory(null)}>
                                    Browse All Product
                                    <span className='text-3xl'>{icons.rightArrow}</span>
                                </button>

                            </div>
                        </div>

                        {/* row bottom */}




                        <div className="grid grid-cols-4 gap-4">
                            {filteredProducts?.map((product: any) => (
                                <Product key={product.id} product={product} />
                            ))}
                        </div>





                    </div>
                </div>
            </Container>
        </div>
    )
}

export default React.memo(FeaturedProducts)