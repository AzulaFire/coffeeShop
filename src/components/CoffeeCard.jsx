/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, handleDeleteCoffee }) => {
  const style = {
    background: 'rgba(255, 85, 85, 0.04)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(87, 85, 85, 0.35)',
  };

  return (
    <Card sx={{ maxWidth: 300 }} style={style}>
      <CardHeader
        className='text-center text-white text-2xl font-bold'
        title={coffee.name}
      />
      <CardMedia
        component='img'
        height='194'
        image={coffee.image}
        alt='Delicious coffee'
      />
      <CardContent>
        <div className='text-center text-white text-2xl font-bold'>
          ${coffee.price}
        </div>
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
      </CardContent>
    </Card>
  );
};
export default CoffeeCard;
