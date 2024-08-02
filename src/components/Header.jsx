import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='flex flex-row justify-between content-center bg-[#6f4827] h-[80px]'>
        <div className='flex'>
          <Link to='/'>
            <div className='gap-3 m-3 text-xl text-white font-bold my-[20px]'>
              MENU
            </div>
          </Link>
        </div>

        <div className='my-[15px] gap-3 m-3'>
          <Link to='/addCoffee'>
            <button className='bg-green-800 hover:bg-green-950 text-white font-bold py-2 px-4 rounded-full'>
              Add Coffee
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
