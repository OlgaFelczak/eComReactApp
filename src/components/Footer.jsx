import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Links from './Links';
import Contact from './Contact';
import Newsletter from './Newsletter';
import CopywriteAndSocialIcons from './CopywriteAndSocialIcons';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className='container'>
      <footer className='py-5 my-5 border-top'>
        <div className='row'>
          <div className='col-2'>
            <a href='/'>
              <img
                src={'../../public/Images/logo.png'}
                className='img-footer'
              />
            </a>
          </div>
          <Links />
          <Contact />
          <Newsletter />
        </div>
        <CopywriteAndSocialIcons />
      </footer>
    </div>
  );
};

export default Footer;
