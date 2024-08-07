import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateCoffee } from '../features/coffeeSlice';
import Header from './Header';

const EditCoffeeDetail = () => {
  const style = {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0,0,0, 0.7)), url('/images/shop.jpg')`,
    height: '100%', // Add this if you want to fill the viewport height
    backgroundSize: 'cover', // Adjust background image sizing
    backgroundPosition: 'center', // Adjust background image position
    backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    quantity: 0,
    price: 0,
    size: '',
    image: '',
  });

  const coffeeData = useSelector((state) => state.coffees.coffees);

  useEffect(() => {
    if (id) {
      const data = coffeeData.filter((c) => c._id === id);
      console.log(data[0]);
      setForm({ ...data[0] });
    }
  }, [coffeeData, id]);

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    dispatch(updateCoffee({ id, form }));
    navigate('/');
  };

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={style} className='min-h-screen bg-black'>
      <Header />
      <div className='flex pt-5 justify-center'>
        <div className='w-full max-w-lg p-8 bg-white rounded-lg shadow-lg'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
            Edit Coffee
          </h2>
          <form onSubmit={handleUpdateCoffee} className='space-y-4'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                required
                value={form.name || ''}
                onChange={handleChange}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm'
                placeholder='Enter product name'
              />
            </div>

            <div>
              <label
                htmlFor='quantity'
                className='block text-sm font-medium text-gray-700'
              >
                Quantity
              </label>
              <input
                type='number'
                id='quantity'
                name='quantity'
                required
                value={form.quantity || 0}
                onChange={handleChange}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm'
                placeholder='Enter quantity'
              />
            </div>

            <div>
              <label
                htmlFor='price'
                className='block text-sm font-medium text-gray-700'
              >
                Price
              </label>
              <input
                type='number'
                step='0.01'
                id='price'
                name='price'
                required
                value={form.price || 0}
                onChange={handleChange}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm'
                placeholder='Enter price'
              />
            </div>

            <div>
              <label
                htmlFor='size'
                className='block text-sm font-medium text-gray-700'
              >
                Size
              </label>
              <select
                id='size'
                name='size'
                required
                value={form.size || ''}
                onChange={handleChange}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm'
              >
                <option value='' disabled>
                  Select size
                </option>
                <option value='Small'>Small</option>
                <option value='Medium'>Medium</option>
                <option value='Large'>Large</option>
              </select>
            </div>

            <div>
              <label
                htmlFor='image'
                className='block text-sm font-medium text-gray-700'
              >
                Image
              </label>
              <input
                type='text'
                id='image'
                name='image'
                required
                value={form.image || ''}
                onChange={handleChange}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm'
                placeholder='Image Url'
              />
            </div>

            <div>
              <button
                type='submit'
                className='w-full py-2 px-4 bg-green-800 text-white font-semibold rounded-md shadow-sm hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
              >
                Save Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditCoffeeDetail;
