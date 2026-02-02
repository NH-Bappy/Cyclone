import Container from '../../commonComponents/Container';
import { assets } from '../../../helpers/assetsProvider';

const Header = () => {
  return (
    <>
      <div className="bg-gray-900">
        <Container>
          <div className="grid grid-cols-3">
            <div className='grid auto-cols-max grid-flow-col items-center gap-x-2'>
              <img src={assets.ad} alt={assets.ad} />
              <h2 className='heading3 text-white'>Friday</h2>
            </div>
            <div className='bg-green-400'>md</div>
            <div className='bg-red-700'>Naimul</div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Header;