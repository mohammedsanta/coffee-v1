import React from 'react';
import './Footer.css';
import SocialButton from '../SocialButton/SocialButton';



const Footer = () => {
  return (
    <div className="footer">

        <div className="footer-socialmedia">
                
        <SocialButton />

        </div>

        <p className='footer-p'>©copyright 2023-2024 Mohammed Samy</p>

  </div>
  )
}

export default Footer