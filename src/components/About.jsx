const About = () => {
  return (
    <div
      id='About'
      className='flex lg:flex-row flex-col justify-between content-center py-16 lg:px-16 bg-[#ede7dd]'
    >
      <p className='text-5xl font-bold font-yanone mb-4 mx-4'>About</p>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <div className='flex justify-center py-4'>
          <img src='images/photo.png' alt='About' className='rounded w-full' />
        </div>
        <div className='flex flex-col justify-center py-4 w-[80%] m-auto'>
          <span className='text-4xl font-yanone py-4 font-bold'>
            Expect More Than Coffee
          </span>
          <p className='text-lg leading-loose'>
            We’re not just passionate purveyors of coffee, but everything else
            that goes with a full and rewarding coffeehouse experience. We also
            offer a selection of premium teas, fine pastries and other
            delectable treats to please the taste buds. And the music you hear
            in store is chosen for its artistry and appeal. It’s not unusual to
            see people coming to Starbucks to chat, meet up or even work. We’re
            a neighborhood gathering place, a part of the daily routine – and we
            couldn’t be happier about it.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
