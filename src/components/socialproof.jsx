import React, { useState, useEffect } from 'react';

const SocialProof = () => {
  const [isVisible, setIsVisible] = useState(false);

  const logos = [
    { src: '/images/biz-insider.png', alt: 'Business Insider', delay: '0s' },
    { src: '/images/bloomberg.png', alt: 'Bloomberg', delay: '0.2s' },
    { src: '/images/business.png', alt: 'Business', delay: '0.4s' },
    { src: '/images/go.png', alt: 'GO', delay: '0.6s' },
    { src: '/images/usnews.png', alt: 'US News', delay: '0.8s' },
    { src: '/images/newsweek.png', alt: 'Newsweek', delay: '1s' },
    { src: '/images/penny.png', alt: 'Penny Hoarder', delay: '1.2s' },
    { src: '/images/investopedia.png', alt: 'Investopedia', delay: '1.4s' },
    { src: '/images/yahoo.png', alt: 'Yahoo', delay: '1.6s' },
    { src: '/images/success.png', alt: 'Success', delay: '1.8s' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('social-proof');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="social-proof" 
      className="social-proof-section"
    >
      <div className="social-proof-container">
        
        {/* Header Section */}
        <div className="social-proof-header">
          <div className="social-proof-tagline">
            Industry Recognition
          </div>
          
          <h2 className="social-proof-heading">
            <span className="heading-line">Trusted Authority</span>
          </h2>
          
          <h3 className="social-proof-subheading">
            My proven tax strategies and wealth-building insights have been featured across America's most respected financial publications, reaching millions of entrepreneurs.
          </h3>
        </div>

        {/* Logos Section */}
        <div className="social-proof-logos-section">
          <div className={`logos-grid ${isVisible ? 'visible' : ''}`}>
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`logo-item logo-${index + 1}`}
                style={{ animationDelay: logo.delay }}
              >
                <div className="logo-wrapper">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="logo-hover-effect"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="social-proof-cta-section">
          <button 
            className="social-proof-cta-button"
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Apply to work with Christian Maldonado"
          >
            <span className="cta-text">Cut My Tax Bill Now</span>
            <div className="cta-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </button>
          
          <div className="trust-indicator">
            <span className="trust-text">Join the featured entrepreneurs</span>
          </div>
        </div>

      </div>

      <style jsx>{`
        /* Import the same font as Hero */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        /* CSS Variables matching Hero */
        :root {
          --primary-black: #000000;
          --primary-white: #ffffff;
          --accent-gray: #f8f9fa;
          --text-gray: #64748b;
          --text-dark: #1e293b;
          --transition-smooth: cubic-bezier(0.4, 0, 0.2, 1);
          --transition-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .social-proof-section {
          width: 100vw;
          min-width: 100vw;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          margin: 0;
          padding: 4rem 0;
          box-sizing: border-box;
          background-color: var(--primary-white);
        }

        .social-proof-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem 5vw;
          box-sizing: border-box;
          text-align: center;
        }

        /* ========================================
           HEADER SECTION
           ======================================== */

        .social-proof-header {
          flex: 0 0 auto;
          margin-bottom: 3rem;
          transform: translateY(30px);
          opacity: 0;
          animation: contentSlideUp 1.5s var(--transition-smooth) 0.5s forwards;
          max-width: 800px;
        }

        @keyframes contentSlideUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Tagline styling - matching Hero */
        .social-proof-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-gray);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 0.6rem;
          position: relative;
          display: inline-block;
        }

        .social-proof-tagline::before {
          content: '';
          position: absolute;
          left: -2rem;
          top: 50%;
          width: 1.2rem;
          height: 2px;
          background: var(--primary-black);
          transform: translateY(-50%);
        }

        .social-proof-tagline::after {
          content: '';
          position: absolute;
          right: -2rem;
          top: 50%;
          width: 1.2rem;
          height: 2px;
          background: var(--primary-black);
          transform: translateY(-50%);
        }

        /* Main heading styling - matching Hero */
        .social-proof-heading {
          font-family: 'Inter', sans-serif;
          font-size: 3.5rem;
          font-weight: 900;
          color: var(--primary-black);
          line-height: 0.9;
          margin: 0 0 1.5rem 0;
          letter-spacing: -0.04em;
          position: relative;
        }

        .heading-line {
          display: inline-block;
          transform: translateY(100px);
          opacity: 0;
          animation: headingSlide 1.2s var(--transition-bounce) 0.8s forwards;
        }

        @keyframes headingSlide {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Subheading styling - matching Hero */
        .social-proof-subheading {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--text-dark);
          line-height: 1.5;
          margin: 0;
          transform: translateY(30px);
          opacity: 0;
          animation: contentSlideUp 1s var(--transition-smooth) 1.2s forwards;
          max-width: 700px;
          margin: 0 auto;
        }

        /* ========================================
           LOGOS SECTION
           ======================================== */

        .social-proof-logos-section {
          flex: 1 1 auto;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 3rem;
          min-height: 300px;
        }

        .logos-grid {
          position: relative;
          width: 100%;
          height: 400px;
          max-width: 800px;
        }

        .logo-item {
          position: absolute;
          opacity: 0;
          transform: translateY(40px) scale(0.8);
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          filter: grayscale(10%) brightness(0.9) contrast(0.8);
          cursor: pointer;
          z-index: 1;
        }

        .logo-wrapper {
          position: relative;
          display: inline-block;
        }

        .logo-hover-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          pointer-events: none;
        }

        .logos-grid.visible .logo-item {
          opacity: 1;
          transform: translateY(0) scale(1);
          animation: floatIn 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        }

        .logo-item:hover {
          filter: grayscale(0%) brightness(1) contrast(1);
          z-index: 10;
        }

        .logo-item:hover .logo-hover-effect {
          opacity: 1;
          transform: scale(1.1);
        }

        .logo-item:hover .logo-image {
          transform: scale(1.05);
        }

        .logo-image {
          height: 45px;
          width: auto;
          max-width: 180px;
          object-fit: contain;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05));
          transform-origin: center;
        }

        /* Creative scattered positioning - spread wide */
        .logo-1 { top: 10%; left: 2%; }
        .logo-2 { top: 5%; right: 3%; }
        .logo-3 { top: 28%; left: 15%; }
        .logo-4 { top: 22%; right: 12%; }
        .logo-5 { top: 45%; left: 1%; }
        .logo-6 { top: 42%; right: 2%; }
        .logo-7 { top: 65%; left: 18%; }
        .logo-8 { top: 62%; right: 15%; }
        .logo-9 { top: 82%; left: 3%; }
        .logo-10 { top: 78%; right: 5%; }

        /* Floating animation */
        @keyframes floatIn {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.7) rotate(-5deg);
          }
          50% {
            transform: translateY(-10px) scale(1.02) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }

        /* Continuous subtle float */
        .logos-grid.visible .logo-item {
          animation: floatIn 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards,
                     gentleFloat 6s ease-in-out infinite;
        }

        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        /* Stagger the floating animation */
        .logo-1, .logo-6 { animation-delay: 0s, 0s; }
        .logo-2, .logo-7 { animation-delay: 0.2s, 1s; }
        .logo-3, .logo-8 { animation-delay: 0.4s, 2s; }
        .logo-4, .logo-9 { animation-delay: 0.6s, 3s; }
        .logo-5, .logo-10 { animation-delay: 0.8s, 4s; }

        /* ========================================
           CTA SECTION
           ======================================== */

        .social-proof-cta-section {
          flex: 0 0 auto;
          transform: translateY(30px);
          opacity: 0;
          animation: contentSlideUp 1s var(--transition-smooth) 1.4s forwards;
        }

        /* Call to action button - EXACT MATCH to Hero */
        .social-proof-cta-button {
          font-family: 'Inter', sans-serif;
          background: var(--primary-black);
          color: var(--primary-white);
          border: none;
          padding: 0.9rem 2rem;
          font-size: 0.95rem;
          font-weight: 600;
          border-radius: 12px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s var(--transition-smooth);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          transform: translateY(0);
          margin-bottom: 0.8rem;
        }

        .social-proof-cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .social-proof-cta-button:hover::before {
          left: 100%;
        }

        .social-proof-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
        }

        .social-proof-cta-button:active {
          transform: translateY(-1px);
        }

        .cta-arrow {
          transition: transform 0.3s var(--transition-smooth);
        }

        .social-proof-cta-button:hover .cta-arrow {
          transform: translateX(4px);
        }

        /* Trust indicator - matching Hero */
        .trust-indicator {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          color: var(--text-gray);
          font-weight: 500;
        }

        /* ========================================
           RESPONSIVE DESIGN
           ======================================== */

        /* Desktop optimization */
        @media (min-width: 1200px) {
          .social-proof-heading {
            font-size: 4rem;
          }
          
          .social-proof-subheading {
            font-size: 1.2rem;
          }
          
          .social-proof-container {
            padding: 2rem 6vw;
          }
          
          .logos-grid {
            height: 450px;
          }
        }

        /* Tablet (768px - 1023px) */
        @media (max-width: 1023px) and (min-width: 768px) {
          .social-proof-section {
            padding: 3rem 0;
          }
          
          .social-proof-container {
            padding: 1.5rem 4vw;
          }
          
          .social-proof-header {
            margin-bottom: 2.5rem;
          }
          
          .social-proof-logos-section {
            margin-bottom: 2.5rem;
            min-height: 250px;
          }
          
          .logos-grid {
            height: 300px;
          }
          
          .social-proof-heading {
            font-size: 2.8rem;
          }
          
          .social-proof-subheading {
            font-size: 1rem;
          }
          
          .social-proof-cta-button {
            padding: 0.8rem 1.6rem;
            font-size: 0.9rem;
          }
          
          .logo-image {
            height: 38px;
            max-width: 150px;
          }
        }

        /* Mobile (≤767px) */
        @media (max-width: 767px) {
          .social-proof-section {
            padding: 2rem 0;
          }
          
          .social-proof-container {
            padding: 1.5rem 4vw;
          }
          
          .social-proof-header {
            margin-bottom: 2rem;
          }
          
          .social-proof-logos-section {
            margin-bottom: 2rem;
            min-height: 200px;
          }
          
          .logos-grid {
            height: 250px;
          }
          
          .social-proof-tagline {
            font-size: 0.7rem;
          }
          
          .social-proof-tagline::before,
          .social-proof-tagline::after {
            width: 0.8rem;
            left: -1.2rem;
            right: -1.2rem;
          }
          
          .social-proof-heading {
            font-size: 2.2rem;
            margin-bottom: 1rem;
          }
          
          .social-proof-subheading {
            font-size: 0.9rem;
            line-height: 1.4;
          }
          
          .social-proof-cta-button {
            padding: 0.9rem 1.8rem;
            font-size: 0.95rem;
            border-radius: 16px;
            margin-bottom: 0.6rem;
          }
          
          .logo-image {
            height: 32px;
            max-width: 120px;
          }
          
          /* Adjust mobile positioning for smaller screen - spread wide */
          .logo-1 { top: 8%; left: 2%; }
          .logo-2 { top: 8%; right: 2%; }
          .logo-3 { top: 25%; left: 12%; }
          .logo-4 { top: 25%; right: 12%; }
          .logo-5 { top: 42%; left: 1%; }
          .logo-6 { top: 42%; right: 1%; }
          .logo-7 { top: 60%; left: 12%; }
          .logo-8 { top: 60%; right: 12%; }
          .logo-9 { top: 78%; left: 2%; }
          .logo-10 { top: 78%; right: 2%; }
        }

        /* Extra small mobile (≤480px) */
        @media (max-width: 480px) {
          .social-proof-container {
            padding: 1.2rem 4vw;
          }
          
          .social-proof-heading {
            font-size: 2rem;
          }
          
          .social-proof-subheading {
            font-size: 0.85rem;
          }
          
          .social-proof-cta-button {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
          
          .logo-image {
            height: 28px;
            max-width: 100px;
          }
          
          .logos-grid {
            height: 220px;
          }
        }

        /* Enhanced focus states */
        .social-proof-cta-button:focus {
          outline: 3px solid #3b82f6;
          outline-offset: 3px;
          box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.1);
        }

        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .social-proof-header,
          .heading-line,
          .social-proof-subheading,
          .social-proof-cta-section,
          .logo-item,
          .logos-grid.visible .logo-item {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SocialProof;