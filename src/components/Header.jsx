import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div id='Menu'>
      <div className='flex flex-row justify-between content-center bg-[#131313]'>
        <div className='flex'>
          <Link to='/'>
            <div className='gap-3 mx-4 text-4xl font-yanone py-2 lg:px-16 font-bold text-white my-[20px]'>
              MENU
            </div>
          </Link>
        </div>

        <div className='my-[15px] gap-3 m-3'>
          <Link to='/addCoffee'>
            <Button
              variant='contained'
              style={{
                backgroundColor: '#016241',
                marginTop: '10px',
                marginRight: '5px',
              }}
            >
              Add Coffee
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
