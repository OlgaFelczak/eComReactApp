import React from 'react';

function Links() {
  return (
    <div>
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
      </ul>
    </div>
  );
}

export default Links;
