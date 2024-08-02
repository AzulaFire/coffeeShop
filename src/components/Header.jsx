import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <>
      <div className='flex flex-row justify-between content-center bg-[#201a15] h-[80px]'>
        <div className='flex'>
          <Link to='/'>
            <div className='gap-3 m-3 text-xl text-white font-bold my-[20px]'>
              MENU
            </div>
          </Link>
        </div>

        <div className='my-[15px] gap-3 m-3'>
          <Link to='/addCoffee'>
            <Button variant='contained'>Add Coffee</Button>;
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
