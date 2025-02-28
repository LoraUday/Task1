import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import HomeIcon from '@mui/icons-material/Home';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); 
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-left">
        <h1>Bouquet Shop</h1>
      </div>
      <div className="navbar-right">
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              <HomeIcon style={{ marginRight: '0.5rem' }} />
              Home
            </a>
          </li>
          <li>
            <a
              href="#bouquets"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('bouquets');
              }}
            >
              <LocalFloristIcon style={{ marginRight: '0.5rem' }} />
              Bouquets
            </a>
          </li>
          <li>
            <a
              href="#aboutus"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('aboutus');
              }}
            >
              <InfoIcon style={{ marginRight: '0.5rem' }} />
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contactus"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contactus');
              }}
            >
              <ContactMailIcon style={{ marginRight: '0.5rem' }} />
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;