import React from 'react';

function About() {
  return (
    <div>
      <div className='card text-center' style={{ width: '50rem' }}>
        <div>
          <img
            style={{ width: '30%' }}
            src='../../public/Images/women.png'
            className='card-img-top'
            alt='...'
          />
        </div>

        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <a href='#' className='btn btn-primary'>
                Go somewhere
              </a>
            </li>
            <li>
              <a href='#' className='btn btn-primary'>
                Go somewhere
              </a>
            </li>
            <li>
              <a href='#' className='btn btn-primary'>
                Go somewhere
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
