import React from 'react';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';

function CopywriteAndSocialIcons() {
  return (
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
  );
}

export default CopywriteAndSocialIcons;
