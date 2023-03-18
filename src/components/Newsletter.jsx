import React from 'react';
import { useForm } from 'react-hook-form';

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    alert('Your email has been added');
    reset();
  };

  return (
    <form className='col-4 offset-1' onSubmit={handleSubmit(onSubmit)}>
      <h5>Sign up to our newsletter!</h5>
      <p>
        Millions already enjoy our free emails full of offers & new products.
      </p>
      <div className='d-flex w-100 gap-2'>
        <label htmlFor='newsletter1' className='visually-hidden'>
          Email address
        </label>
        <input
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
          type='text'
          className='form-control'
          placeholder='Email address'
        />
        {errors?.email?.type === 'required' && <span>Email is required</span>}
        {errors?.email?.type === 'pattern' && (
          <span style={{ color: 'red' }}>This is not valid email</span>
        )}
        <input type='submit' className='btn btn-primary' val='Subscribe' />
      </div>
    </form>
  );
};

export default Newsletter;
