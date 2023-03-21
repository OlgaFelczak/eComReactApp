import React from 'react';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';

function About() {
  return (
    <div>
      <div
        className='card text-center py-5 my-5'
        style={{ width: '80%', border: 'none' }}
      >
        <div>
          <img
            style={{ width: '100%' }}
            src='../../public/Images/women.png'
            className='card-img-top'
            alt='Photo of us'
          />
        </div>

        <div className='card-body'>
          <h5 className='card-title'>About Us</h5>
          <p className='card-text'>
            Our small company specialises in providing high-quality makeup
            products through our online shop. We offer a wide range of products
            including foundation, blush, eyeshadow, lipstick, and more. Our
            products are sourced from top manufacturers and are carefully
            curated to meet the needs of our customers. We believe that everyone
            deserves to feel confident and beautiful, which is why we strive to
            make our products affordable without compromising on quality. With
            our easy-to-use website and fast shipping, we aim to provide a
            convenient and enjoyable shopping experience for all makeup
            enthusiasts.
            <p>
              To never miss a deal or update, be sure to sign up for our
              newsletter! And don't forget to check out our social media pages
              below for even more make up tips, product reviews, and
              behind-the-scenes peeks into our company.
            </p>
          </p>
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <a className='link-dark' href='https://www.facebook.com/'>
                <BsFacebook />
              </a>
            </li>
            <li>
              <a className='link-dark' href='https://www.instagram.com/'>
                <BsInstagram />
              </a>
            </li>
            <li>
              <a className='link-dark' href='https://www.pinterest.com/'>
                <BsPinterest />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
