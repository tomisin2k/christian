import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    
    if (!isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('mobile-menu-open');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.navbar')) {
        closeMobileMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const navbarHeight = window.innerWidth <= 768 ? 70 : 80;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    if (isMobileMenuOpen) {
      closeMobileMenu();
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <a 
            href="#" 
            className="brand-link"
            onClick={(e) => handleSmoothScroll(e, '#hero')}
          >
            Christian Maldonado
          </a>
        </div>
        
        <div className="navbar-nav">
          <a 
            href="#services" 
            className="nav-link"
            onClick={(e) => handleSmoothScroll(e, '#services')}
          >
            Services
          </a>
          <a 
            href="#how-it-works" 
            className="nav-link"
            onClick={(e) => handleSmoothScroll(e, '#how-it-works')}
          >
            How It Works
          </a>
          <a 
            href="#pricing" 
            className="nav-link"
            onClick={(e) => handleSmoothScroll(e, '#pricing')}
          >
            Pricing
          </a>
        </div>
        
        <div className="navbar-cta">
          <a 
            href="#apply" 
            className="cta-button"
            onClick={(e) => handleSmoothScroll(e, '#apply')}
          >
            Cut My Tax Bill Now
          </a>
        </div>
        
        <div 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          role="button"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <a 
          href="#services" 
          className="mobile-nav-link" 
          onClick={(e) => handleSmoothScroll(e, '#services')}
        >
          Services
        </a>
        <a 
          href="#how-it-works" 
          className="mobile-nav-link" 
          onClick={(e) => handleSmoothScroll(e, '#how-it-works')}
        >
          How It Works
        </a>
        <a 
          href="#pricing" 
          className="mobile-nav-link" 
          onClick={(e) => handleSmoothScroll(e, '#pricing')}
        >
          Pricing
        </a>
        <a 
          href="#apply" 
          className="mobile-cta-button" 
          onClick={(e) => handleSmoothScroll(e, '#apply')}
        >
          Apply Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;