import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex flex-row justify-center content-center bg-[#201a15] py-8'>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3 m-3 text-white'>
        <div className='flex flex-col'>
          <span className='text-2xl my-2 font-yanone'>About Us</span>
          <span className='text-zinc-400 hover:text-zinc-200'>
            <Link to='/'>Our Company</Link>
          </span>
          <span className='text-zinc-400 hover:text-zinc-200'>
            <Link to='/'>Our Heritage</Link>
          </span>
          <span className='text-zinc-400 hover:text-zinc-200'>
            <Link to='/'>Our Coffee</Link>
          </span>
          <span className='text-zinc-400 hover:text-zinc-200'>
            <Link to='/'>Stories and News</Link>
          </span>
          <span className='text-zinc-400 hover:text-zinc-200'>
            <Link to='/'>Customer Service</Link>
          </span>
        </div>
        <div className='flex flex-col'>
          <span className='text-2xl my-2 font-yanone'>Careers</span>
          <span className='text-zinc-400 hover:text-zinc-200'>
            <Link to='/'>Culture and Values</Link>
          </span>
          <span className='text-zinc-400 hover:text-zinc-200'>
            <Link to='/'>College Achievement Plan</Link>
          </span>
          <span className='text-zinc-400 hover:text-zinc-200'>
            <Link to='/'>International Careers</Link>
          </span>
          <span className='text-zinc-400 hover:text-zinc-200'>
            <Link to='/'>U.S. Careers</Link>
          </span>
        </div>
        <div className='flex flex-col'>
          <span className='text-2xl my-2 font-yanone'>Information</span>
          <span className='text-zinc-400 hover:text-zinc-200'>
            <Link to='/'>Contact Us</Link>
          </span>
          <span className='text-zinc-400 hover:text-zinc-200'>
            <Link to='/'>Privacy Policy</Link>
          </span>
          <span className='text-zinc-400 hover:text-zinc-200'>
            <Link to='/'>Terms of Use</Link>
          </span>
          <span className='text-zinc-400 hover:text-zinc-200'>
            <Link to='/'>Submit Your Idea</Link>
          </span>
        </div>
        <div className='flex flex-col'>
          <span className='text-2xl my-2 font-yanone'>Order and Pickup</span>
          <span className='text-zinc-400 hover:text-zinc-200'>
            <Link to='/'>Order on App</Link>
          </span>
          <span className='text-zinc-400 hover:text-zinc-200'>
            <Link to='/'>Delivery</Link>
          </span>
          <span className='text-zinc-400 hover:text-zinc-200'>
            <Link to='/'>Order and Pickup Options</Link>
          </span>
          <span className='text-zinc-400 hover:text-zinc-200'>
            <Link to='/'>Explore and Find Coffee for Home</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
