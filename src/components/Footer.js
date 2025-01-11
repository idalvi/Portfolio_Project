import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Links */}
        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-links">
            <a href="https://github.com/idalvi" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/isha-dalvi-880298249/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p><FaEnvelope /> ishadalvi05@gmail.com</p>
          <p><FaPhoneAlt /> +91 9689265717</p>
        </div>

        {/* Copyright */}
        <div className="footer-section">
          <p>© 2025 My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
