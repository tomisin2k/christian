import React, { useState, useEffect } from 'react';

const Testimonial = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // 9 testimonial cards with individual images
  const testimonials = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    image: `/images/testimonial${index + 1}.jpg`,
    alt: `Client testimonial ${index + 1}`,
  }));

  // Group testimonials into sets of 3
  const testimonialSets = [
    testimonials.slice(0, 3),  // Set 1: cards 1-3
    testimonials.slice(3, 6),  // Set 2: cards 4-6
    testimonials.slice(6, 9),  // Set 3: cards 7-9
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

    const section = document.getElementById('testimonials');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonial sets
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % testimonialSets.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isVisible, testimonialSets.length]);

  return (
    <section 
      id="testimonials" 
      className="testimonial-section"
    >
      <div className="testimonial-container">
        
        {/* Header Section */}
        <div className="testimonial-header">
          <div className="testimonial-tagline">
            Client Success Stories
          </div>
          
          <h2 className="testimonial-heading">
            <span className="heading-line">Real Results</span>
          </h2>
          
          <h3 className="testimonial-subheading">
            See how my proven strategies have transformed the financial futures of entrepreneurs across America, delivering measurable tax savings and wealth-building success.
          </h3>
        </div>

        {/* Testimonials Section */}
        <div className="testimonial-cards-section">
          <div className="testimonial-carousel">
            {testimonialSets.map((set, setIndex) => (
              <div
                key={setIndex}
                className={`testimonial-set ${
                  setIndex === currentSet ? 'active' : ''
                } ${isVisible ? 'visible' : ''}`}
              >
                {set.map((testimonial, cardIndex) => (
                  <div
                    key={testimonial.id}
                    className={`testimonial-card card-${cardIndex + 1}`}
                    style={{ animationDelay: `${cardIndex * 0.2}s` }}
                  >
                    <div className="card-wrapper">
                      <img
                        src={testimonial.image}
                        alt={testimonial.alt}
                        className="testimonial-image"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="card-hover-effect"></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          {/* Dots indicator */}
          <div className="carousel-dots">
            {testimonialSets.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSet ? 'active' : ''}`}
                onClick={() => setCurrentSet(index)}
                aria-label={`Show testimonial set ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="testimonial-cta-section">
          <button 
            className="testimonial-cta-button"
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
            <span className="trust-text">Join these successful entrepreneurs</span>
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

        .testimonial-section {
          width: 100vw;
          min-width: 100vw;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background-color: var(--primary-white);
        }

        .testimonial-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 3rem 5vw 6rem 5vw;
          box-sizing: border-box;
          text-align: center;
        }

        /* ========================================
           HEADER SECTION
           ======================================== */

        .testimonial-header {
          margin-bottom: 5rem;
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
        .testimonial-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-gray);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }

        .testimonial-tagline::before {
          content: '';
          position: absolute;
          left: -2rem;
          top: 50%;
          width: 1.2rem;
          height: 2px;
          background: var(--primary-black);
          transform: translateY(-50%);
        }

        .testimonial-tagline::after {
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
        .testimonial-heading {
          font-family: 'Inter', sans-serif;
          font-size: 3.5rem;
          font-weight: 900;
          color: var(--primary-black);
          line-height: 0.9;
          margin: 0 0 2rem 0;
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
        .testimonial-subheading {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--text-dark);
          line-height: 1.6;
          margin: 0;
          transform: translateY(30px);
          opacity: 0;
          animation: contentSlideUp 1s var(--transition-smooth) 1.2s forwards;
          max-width: 700px;
          margin: 0 auto;
        }

        /* ========================================
           TESTIMONIAL CARDS SECTION
           ======================================== */

        .testimonial-cards-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 5rem;
        }

        .testimonial-carousel {
          position: relative;
          width: 100%;
          height: 350px;
          max-width: 1000px;
          margin-bottom: 3rem;
        }

        .testimonial-set {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          opacity: 0;
          transform: translateX(100px);
          transition: all 0.8s var(--transition-smooth);
        }

        .testimonial-set.active {
          opacity: 1;
          transform: translateX(0);
        }

        .testimonial-set.visible .testimonial-card {
          animation: cardSlideIn 0.8s var(--transition-smooth) forwards;
        }

        .testimonial-card {
          flex: 1;
          max-width: 300px;
          height: 280px;
          opacity: 0;
          transform: translateY(40px) scale(0.9);
          transition: all 0.4s var(--transition-smooth);
          cursor: pointer;
        }

        .card-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.4s var(--transition-smooth);
          background: var(--primary-white);
        }

        .card-wrapper:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .testimonial-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.4s var(--transition-smooth);
        }

        .card-hover-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.05);
          opacity: 0;
          transition: all 0.4s var(--transition-smooth);
          pointer-events: none;
        }

        .card-wrapper:hover .card-hover-effect {
          opacity: 1;
        }

        .card-wrapper:hover .testimonial-image {
          transform: scale(1.05);
        }

        @keyframes cardSlideIn {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Carousel dots - Updated for thinner, rounder appearance */
        .carousel-dots {
          display: flex;
          gap: 1rem;
          justify-content: center;
          align-items: center;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: var(--text-gray);
          opacity: 0.3;
          cursor: pointer;
          transition: all 0.4s var(--transition-smooth);
          position: relative;
        }

        .dot.active {
          background: var(--primary-black);
          opacity: 1;
          transform: scale(1.5);
        }

        .dot:hover:not(.active) {
          opacity: 0.6;
          transform: scale(1.2);
        }

        /* ========================================
           CTA SECTION
           ======================================== */

        .testimonial-cta-section {
          transform: translateY(30px);
          opacity: 0;
          animation: contentSlideUp 1s var(--transition-smooth) 1.4s forwards;
        }

        /* Call to action button - EXACT MATCH to Hero */
        .testimonial-cta-button {
          font-family: 'Inter', sans-serif;
          background: var(--primary-black);
          color: var(--primary-white);
          border: none;
          padding: 1rem 2.2rem;
          font-size: 1rem;
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
          margin-bottom: 1.5rem;
        }

        .testimonial-cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .testimonial-cta-button:hover::before {
          left: 100%;
        }

        .testimonial-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
        }

        .testimonial-cta-button:active {
          transform: translateY(-1px);
        }

        .cta-arrow {
          transition: transform 0.3s var(--transition-smooth);
        }

        .testimonial-cta-button:hover .cta-arrow {
          transform: translateX(4px);
        }

        /* Trust indicator - matching Hero */
        .trust-indicator {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          color: var(--text-gray);
          font-weight: 500;
        }

        /* ========================================
           RESPONSIVE DESIGN
           ======================================== */

        /* Desktop optimization */
        @media (min-width: 1200px) {
          .testimonial-heading {
            font-size: 4rem;
          }
          
          .testimonial-subheading {
            font-size: 1.2rem;
          }
          
          .testimonial-container {
            padding: 4rem 6vw 8rem 6vw;
          }
          
          .testimonial-header {
            margin-bottom: 6rem;
          }
          
          .testimonial-cards-section {
            margin-bottom: 6rem;
          }
          
          .testimonial-carousel {
            height: 400px;
          }
          
          .testimonial-card {
            height: 320px;
          }
        }

        /* Tablet (768px - 1023px) */
        @media (max-width: 1023px) and (min-width: 768px) {
          .testimonial-container {
            padding: 2.5rem 4vw 5rem 4vw;
          }
          
          .testimonial-header {
            margin-bottom: 4rem;
          }
          
          .testimonial-cards-section {
            margin-bottom: 4rem;
          }
          
          .testimonial-carousel {
            height: 320px;
          }
          
          .testimonial-card {
            height: 250px;
          }
          
          .testimonial-heading {
            font-size: 2.8rem;
          }
          
          .testimonial-subheading {
            font-size: 1rem;
          }
          
          .testimonial-cta-button {
            padding: 0.9rem 1.8rem;
            font-size: 0.95rem;
          }
        }

        /* Mobile (≤767px) */
        @media (max-width: 767px) {
          .testimonial-container {
            padding: 2rem 4vw 4rem 4vw;
          }
          
          .testimonial-header {
            margin-bottom: 3rem;
          }
          
          .testimonial-cards-section {
            margin-bottom: 3rem;
          }
          
          .testimonial-carousel {
            height: 280px;
          }
          
          .testimonial-set {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .testimonial-card {
            height: 200px;
            max-width: 300px;
          }
          
          .testimonial-tagline {
            font-size: 0.7rem;
            margin-bottom: 1.2rem;
          }
          
          .testimonial-tagline::before,
          .testimonial-tagline::after {
            width: 0.8rem;
            left: -1.2rem;
            right: -1.2rem;
          }
          
          .testimonial-heading {
            font-size: 2.2rem;
            margin-bottom: 1.5rem;
          }
          
          .testimonial-subheading {
            font-size: 0.9rem;
            line-height: 1.5;
          }
          
          .testimonial-cta-button {
            padding: 1rem 2rem;
            font-size: 0.95rem;
            border-radius: 16px;
            margin-bottom: 1.2rem;
          }
        }

        /* Extra small mobile (≤480px) */
        @media (max-width: 480px) {
          .testimonial-container {
            padding: 1.5rem 4vw 3rem 4vw;
          }
          
          .testimonial-header {
            margin-bottom: 2.5rem;
          }
          
          .testimonial-cards-section {
            margin-bottom: 2.5rem;
          }
          
          .testimonial-heading {
            font-size: 2rem;
          }
          
          .testimonial-subheading {
            font-size: 0.85rem;
          }
          
          .testimonial-cta-button {
            padding: 0.9rem 1.8rem;
            font-size: 0.9rem;
          }
          
          .testimonial-card {
            height: 180px;
            max-width: 280px;
          }
          
          .testimonial-carousel {
            height: 250px;
          }
        }

        /* Enhanced focus states */
        .testimonial-cta-button:focus,
        .dot:focus {
          outline: 3px solid #3b82f6;
          outline-offset: 3px;
          box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.1);
        }

        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .testimonial-header,
          .heading-line,
          .testimonial-subheading,
          .testimonial-cta-section,
          .testimonial-card,
          .testimonial-set {
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

export default Testimonial;