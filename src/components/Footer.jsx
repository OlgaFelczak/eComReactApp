import React from 'react';
import Links from './Links';
import Contact from './Contact';
import Newsletter from './Newsletter';
import CopywriteAndSocialIcons from './CopywriteAndSocialIcons';
import '../styles/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div className='container'>
      <footer className='py-5 my-5 border-top'>
        <div style={{ display: 'flex', flexDirection: 'row' }} className='row'>
          <div className='w-33 my-2 col-sm-6 col-md-6 col-lg-3'>
            <a href='/'>
              <img src={'/Images/logo.png'} className='img-footer' />
            </a>
          </div>
          <div className='w-33 my-2 col-sm-6 col-md-6 col-lg-2'>
            <Links />
          </div>
          <div className='w-33 my-2 col-sm-6 col-md-6 col-lg-3'>
            <Contact />
          </div>
          <div className='my-2 col-sm-6 col-md-6 col-lg-4'>
            <Newsletter />
          </div>
        </div>
        <div className='d-flex justify-content-between py-4 my-4 border-top'>
          <CopywriteAndSocialIcons />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
