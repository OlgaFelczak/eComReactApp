import React from 'react';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';

function CopywriteAndSocialIcons() {
  return (
    <>
      <p>&copy; 2023 Company, Inc. All rights reserved.</p>
      <ul className='list-unstyled d-flex'>
        <li className='ms-3'>
          <a
            className='link-dark'
            href='https://www.facebook.com/'
            target='_blank'
          >
            <BsFacebook />
          </a>
        </li>
        <li className='ms-3'>
          <a
            className='link-dark'
            href='https://www.instagram.com/'
            target='_blank'
          >
            <BsInstagram />
          </a>
        </li>
        <li className='ms-3'>
          <a
            className='link-dark'
            href='https://www.pinterest.com/'
            target='_blank'
          >
            <BsPinterest />
          </a>
        </li>
      </ul>
    </>
  );
}

export default CopywriteAndSocialIcons;
