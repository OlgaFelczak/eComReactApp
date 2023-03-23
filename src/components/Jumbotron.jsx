import Button from 'react-bootstrap/Button';
import '../styles/jumbotron.css';

const HomeJumbotron = () => {
  return (
    <div className='jumbotron-container'>
      <h1>Welcome to our store!</h1>
      <p>
        We believe that beauty comes from both inside and out. <br />
        We are excited to offer a carefully curated selection of high-quality
        make up products that will help you enhance your natural beauty and
        express your unique style.
      </p>
      <p>
        <Button
          className='btn-primary jumbotron-btn'
          href='/store'
        >
          Shop now
        </Button>
      </p>
    </div>
  );
};

export default HomeJumbotron;
