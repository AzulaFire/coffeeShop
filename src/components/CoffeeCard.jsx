/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const CoffeeCard = ({ coffee, handleDeleteCoffee }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#EA580C',
        // light: will be calculated from palette.primary.main,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#c62828',
      },
    },
  });

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
        className='text-center font-yanone text-white text-2xl font-bold bg-[#016241]'
        title={coffee.name}
      />
      <CardMedia
        component='img'
        height='194'
        image={coffee.image}
        alt='Delicious coffee'
      />
      <CardContent>
        <div className='text-center font-yanone text-white text-3xl font-bold'>
          ${coffee.price}
        </div>
        <div className='flex gap-3 justify-between p-4'>
          <ThemeProvider theme={theme}>
            <Link to={`/editCoffee/${coffee._id}`}>
              <Button variant='contained'>Edit</Button>
            </Link>
            <Button
              onClick={() => handleDeleteCoffee(coffee._id)}
              variant='contained'
              color='secondary'
            >
              Delete
            </Button>
          </ThemeProvider>
        </div>
      </CardContent>
    </Card>
  );
};
export default CoffeeCard;
