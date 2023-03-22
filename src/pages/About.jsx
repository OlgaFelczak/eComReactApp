import React from 'react';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';

function About() {
  return (
    <div>
      <div>
        <img
          src='../../public/Images/women.png'
          className='card-img-top'
          alt='Photo of us'
        />
      </div>

      <div className='container mt-3'>
        <h2 className='py-4 '>About Us</h2>
        <p>
          Our small company specialises in providing high-quality makeup
          products through our online shop. We offer a wide range of products
          including foundation, blush, eyeshadow, lipstick, and more. Our
          products are sourced from top manufacturers and are carefully curated
          to meet the needs of our customers. We believe that everyone deserves
          to feel confident and beautiful, which is why we strive to make our
          products affordable without compromising on quality. With our
          easy-to-use website and fast shipping, we aim to provide a convenient
          and enjoyable shopping experience for all makeup enthusiasts.
          <br />
        </p>
        <p>
          To never miss a deal or update, be sure to sign up for our newsletter!
          And don't forget to check out our social media pages below for even
          more make up tips, product reviews, and behind-the-scenes peeks into
          our company.
        </p>
        <div className='d-flex justify-content-evenly py-5'>
          <a href='https://www.facebook.com/' target='_blank'>
            <BsFacebook color='rgb(236, 132, 188)' fontSize='3em' />
          </a>
          <a href='https://www.instagram.com/' target='_blank'>
            <BsInstagram color='rgb(236, 132, 188)' fontSize='3em' />
          </a>
          <a href='https://www.pinterest.com/' target='_blank'>
            <BsPinterest color='rgb(236, 132, 188)' fontSize='3em' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
