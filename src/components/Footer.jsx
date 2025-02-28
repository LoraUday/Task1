import React from 'react';
import './Footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Bouquet Shop. All rights reserved.</p>
        <p>
          Follow us on:
          <a href="#facebook">
            <FacebookIcon style={{ margin: '0 0.5rem', verticalAlign: 'middle' }} />
          </a>
          <a href="#instagram">
            <InstagramIcon style={{ margin: '0 0.5rem', verticalAlign: 'middle' }} />
          </a>
          <a href="#twitter">
            <TwitterIcon style={{ margin: '0 0.5rem', verticalAlign: 'middle' }} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;