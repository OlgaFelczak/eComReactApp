import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BsFillGeoAltFill,
  BsFillTelephoneFill,
  BsEnvelopeFill,
  BsFacebook,
  BsInstagram,
  BsPinterest,
} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='container'>
      <footer className='py-5 my-5 border-top'>
        <div className='row'>
          <div className='col-2'>
            <a href='/'>
              <img src={'../../public/Images/logo.jpg'} />
            </a>
          </div>

          <div className='col-2'>
            <h5>Useful Links</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a href='/' className='nav-link p-0 text-muted'>
                  Home
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  About
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Sign in
                </a>
              </li>
            </ul>
          </div>

          <div className='col-3'>
            <h5>Contact Us</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  <BsFillGeoAltFill /> 15 Way Road, Witton G63 4XY
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='tel:+441632960451' className='nav-link p-0 text-muted'>
                  <BsFillTelephoneFill /> +44 1632 960451
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a
                  href='mailto:contactmakeupjunkie@gmail.com'
                  className='nav-link p-0 text-muted'
                >
                  <BsEnvelopeFill /> contactmakeupjunkie@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className='col-4 offset-1'>
            <form>
              <h5>Sign up to our newsletter!</h5>
              <p>
                Millions already enjoy our free emails full of offers & new
                products.
              </p>
              <div className='d-flex w-100 gap-2'>
                <label htmlFor='newsletter1' className='visually-hidden'>
                  Email address
                </label>
                <input
                  id='newsletter1'
                  type='text'
                  className='form-control'
                  placeholder='Email address'
                />
                <button className='btn btn-primary' type='button'>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className='d-flex justify-content-between py-4 my-4 border-top'>
          <p>&copy; 2023 Company, Inc. All rights reserved.</p>
          <ul className='list-unstyled d-flex'>
            <li className='ms-3'>
              <a className='link-dark' href='https://www.facebook.com/'>
                <BsFacebook />
              </a>
            </li>
            <li className='ms-3'>
              <a className='link-dark' href='https://www.instagram.com/'>
                <BsInstagram />
              </a>
            </li>
            <li className='ms-3'>
              <a className='link-dark' href='https://www.pinterest.com/'>
                <BsPinterest />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
