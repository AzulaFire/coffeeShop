import { SiCoffeescript } from 'react-icons/si';

const Navigation = () => {
  return (
    <div className='flex flex-row justify-center bg-[#016241] h-[70px] sticky top-0 z-10 border-b-[#131313] border-b-2 shadow-2xl px-2'>
      <div className='gap-3 m-3 text-3xl text-white my-[20px] pr-2'>
        <SiCoffeescript />
      </div>
      <div className='flex'>
        <a href='#Hero'>
          <div className='gap-3 m-3 text-2xl text-white my-[20px] pr-2 font-yanone'>
            Home
          </div>
        </a>
      </div>
      <div className='flex'>
        <a href='#About'>
          <div className='gap-3 m-3 text-2xl text-white my-[20px] pr-2 font-yanone'>
            About
          </div>
        </a>
      </div>
      <div className='flex'>
        <a href='#Services'>
          <div className='gap-3 m-3 text-2xl text-white my-[20px] pr-2 font-yanone'>
            Services
          </div>
        </a>
      </div>
      <div className='flex'>
        <a href='#Menu'>
          <div className='gap-3 m-3 text-2xl text-white my-[20px] font-yanone'>
            Menu
          </div>
        </a>
      </div>
    </div>
  );
};
export default Navigation;
