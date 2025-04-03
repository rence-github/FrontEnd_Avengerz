import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.jpg';
import email_icon from '../Assets/email.png';
import phone_icon from '../Assets/phone.png';
import facebook_icon from '../Assets/facebook.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={footer_logo} alt="Avengerz Printing Service" />
          <p>Avengerz Printing Service</p>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Tarpaulin Printing</li>
            <li>T-Shirt Print (DTF)</li>
            <li>Signages</li>
            <li>Styro Sign</li>
            <li>Sticker Printing</li>
            <li>Custom Artwork</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <img src={phone_icon} alt="Phone" />
            <div>
              <p>TNT: 0963-393-4468</p>
              <p>TM: 0952-563-9446</p>
            </div>
          </div>
          <div className="contact-item">
            <img src={email_icon} alt="Email" />
            <p>avengerzprint@gmail.com</p>
          </div>
          <div className="contact-item">
            <img src={facebook_icon} alt="Facebook" />
            <a href="https://web.facebook.com/profile.php?id=61571503116965" target="_blank" rel="noopener noreferrer">
              Avengerz Print
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>Copyright © {new Date().getFullYear()} Avengerz Print @2025. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;