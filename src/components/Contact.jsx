import React from 'react';
import {
  BsFillGeoAltFill,
  BsFillTelephoneFill,
  BsEnvelopeFill,
} from 'react-icons/bs';

function Contact() {
  return (
    <div>
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
          <a href='mailto:contact@mj.com' className='nav-link p-0 text-muted'>
            <BsEnvelopeFill /> contact@mj.com
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
