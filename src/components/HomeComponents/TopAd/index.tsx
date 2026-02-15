import Container from '../../commonComponents/Container';
import { assets } from '../../../helpers/assetsProvider';
import Button from '../../commonComponents/Button';
import { icons } from '../../../helpers/iconProvider';
import React from 'react';

const Header = () => {
  return (
    <>
      <div className="bg-gray-900 py-1">
        <Container>
          <div className="grid grid-cols-3">
            <div className='grid auto-cols-max grid-flow-col items-center gap-x-2'>
              <img src={assets.ad} alt={assets.ad} />
              <h2 className='heading3 text-white'>Friday</h2>
            </div>
            <div className='flex justify-center'>
              <div className="grid auto-cols-max grid-flow-col gap-1 items-center">
                <span className='body_sm_500 text-gray-100'>Up to</span>
                <h2 className='display4 text-warning-500'>59%</h2>
                <span className='body_xl_600 text-gray-100'>OFF</span>
              </div>
            </div>
            <div className='flex items-center justify-end'>
              <Button className='px-6 rounded shadow-2xl cursor-pointer hover:bg-warning-600 transition-all flex items-center gap-2 bg-warning-500'>
                <span className='text-gray-900 heading7'>Shop now</span>
                <span className='text-gray-900 inline-block'>{icons.rightArrow}</span>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default React.memo(Header);