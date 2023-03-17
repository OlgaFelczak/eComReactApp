import React from 'react';

function Newsletter() {
  return (
    <div className='col-4 offset-1'>
      <form>
        <h5>Sign up to our newsletter!</h5>
        <p>
          Millions already enjoy our free emails full of offers & new products.
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
  );
}

export default Newsletter;
