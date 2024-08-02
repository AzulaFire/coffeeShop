import { useDispatch, useSelector } from 'react-redux';
import { getCoffees, deleteCoffee } from '../features/coffeeSlice';
import Header from './Header';
import { useEffect } from 'react';
import CoffeeCard from './CoffeeCard';

const Coffees = () => {
  const style = {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 150, 0.3)), url(images/shop.jpg)`,
    height: '100vh', // Add this if you want to fill the viewport height
    backgroundSize: 'cover', // Adjust background image sizing
    backgroundPosition: 'center', // Adjust background image position
    backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
  };

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
    <div className='min-h-screen' style={style}>
      <Header />
      <div className='flex flex-wrap justify-center my-3'>
        {coffeeData.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            handleDeleteCoffee={handleDeleteCoffee}
          />
        ))}
      </div>
    </div>
  );
};
export default Coffees;
