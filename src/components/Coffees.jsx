import { useDispatch, useSelector } from 'react-redux';
import { getCoffees, deleteCoffee } from '../features/coffeeSlice';
import Header from './Header';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Coffees = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoffees());
  }, [dispatch]);

  const coffeeData = useSelector((state) => {
    return state.coffees.coffees;
  });

  const handleDeleteCoffee = (coffeeId) => {
    dispatch(deleteCoffee(coffeeId));
  };

  console.log('load coffees data', coffeeData);

  return (
    <div>
      <Header />
      <div className='flex flex-wrap justify-center gap-3 bg-[#9c6f44] min-h-screen'>
        {coffeeData.map((coffee) => (
          <div
            key={coffee._id}
            className='shadow-xl bg-green-900 w-[30%] transition-all my-4 text-center rounded-lg items-center justify-center flex flex-col p-4'
          >
            <p className='text-3xl font-bold mb-4 text-white'>{coffee.name}</p>
            <img
              src={coffee.image}
              className='rounded'
              alt='coffee'
              width='50%'
            />
            <div className='p-4'>
              <p className='text-3xl font-bold text-white'>${coffee.price}</p>
              <div className='flex gap-3 justify-between p-4'>
                <Link to={`/editCoffee/${coffee._id}`}>
                  <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full'>
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDeleteCoffee(coffee._id)}
                  className='bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full'
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Coffees;
