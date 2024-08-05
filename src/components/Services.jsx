const Services = () => {
  return (
    <div
      id='Services'
      className='flex lg:flex-row flex-col justify-between content-center py-16 lg:px-16 bg-[#ede7dd]'
    >
      <p className='text-5xl font-bold font-yanone mb-4 mx-4'>Services</p>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
        <div className='flex flex-col py-4 mx-8'>
          <img
            src='images/coffee.png'
            alt='Coffee'
            className='w-[64px] mx-auto my-8'
          />
          <h1 className='text-3xl font-bold font-yanone mb-4 mx-auto'>
            Excellent Coffee
          </h1>
          <p className='text-lg leading-loose'>
            The coffee roasts that we offer are those that best reflect the rich
            coffee flavor and aroma of your local CrackSkull&apos;s Coffee.
          </p>
        </div>
        <div className='flex flex-col py-4 mx-8'>
          <img
            src='images/gift-card.png'
            alt='Gift Cards'
            className='w-[64px] mx-auto my-8'
          />
          <h1 className='text-3xl font-bold font-yanone mb-4 mx-auto'>
            Gift Cards
          </h1>
          <p className='text-lg leading-loose'>
            A CrackSkull&apos;s Coffee Gift Card is a convenient way to pay and
            earn stars toward rewards. This online gift card is a great gift for
            coffee lovers.
          </p>
        </div>
        <div className='flex flex-col py-4 mx-8'>
          <img
            src='images/delivery.png'
            alt='Delivery'
            className='w-[64px] mx-auto my-8'
          />
          <h1 className='text-3xl font-bold font-yanone mb-4 mx-auto'>
            Delivery
          </h1>
          <p className='text-lg leading-loose'>
            Order and Pick up as easy as that. Brighten your day with a
            CrackSkull&apos;s delivery on various delivery services.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
