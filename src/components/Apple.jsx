const Apple = () => {
  return (
    <div className='flex lg:flex-row flex-col justify-between content-center py-8 bg-[#efeeec]'>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <div className='flex justify-center py-4'>
          <img
            src='images/iphone.png'
            alt='App Store'
            className='rounded w-full'
          />
        </div>
        <div className='flex flex-col justify-center py-4 w-[80%] m-auto'>
          <span className='text-4xl font-yanone py-4 font-bold'>
            See More Through Our Official App
          </span>
          <p className='text-lg leading-loose'>
            Find our application and download it either through App Store or
            Google Play, you can make orders, see your deliveries on the way and
            much more.
          </p>
          <div className='flex flex-row gap-3 my-8'>
            <img
              src='images/app1.png'
              width={100}
              alt='App Store'
              className='mr-4'
            />
            <img src='images/app2.png' width={100} alt='App Store' />
          </div>
          <img src='images/insta.png' width={400} alt='Instagram' />
        </div>
      </div>
    </div>
  );
};
export default Apple;
