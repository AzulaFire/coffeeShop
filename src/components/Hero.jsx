import { Button } from '@mui/material';
import './Hero.css'; // Importing the CSS file

const Hero = () => {
  return (
    <div id='Hero' className='hero'>
      <div className='hero-content'>
        <div className='flex flex-row justify-center'>
          <img
            src='images/logo.png'
            alt='logo'
            width={300}
            className='logo shadow-xl'
          />
        </div>
        <h1 className='hero-title font-yanone shadow-2xl'>
          Brewed to Perfection, Sipped with Passion
        </h1>
        <p className='hero-subtitle'>
          To inspire and nurture the human spirit –{' '}
        </p>
        <p className='hero-subtitle'>
          one person, one cup and one neighborhood at a time.
        </p>
        <Button
          variant='contained'
          style={{
            backgroundColor: '#016241',
            marginTop: '40px',
            marginBottom: '80px',
          }}
        >
          <a href='#Menu'>Go To MENU</a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
