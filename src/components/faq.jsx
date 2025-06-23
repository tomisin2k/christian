import React, { useState, useEffect } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const faqs = [
    {
      id: 1,
      question: "What makes your tax strategies different from other accountants?",
      answer: "My strategies are specifically designed for entrepreneurs and business owners, focusing on aggressive yet legal tax optimization techniques that traditional accountants often overlook. I've personally saved clients an average of $50,000+ annually through advanced entity structuring, business expense optimization, and strategic tax planning."
    },
    {
      id: 2,
      question: "How much can I realistically expect to save on taxes?",
      answer: "While results vary based on your specific situation, my clients typically save between $25,000 to $150,000+ annually. The key is implementing the right combination of strategies for your business structure, income level, and financial goals. During our consultation, I'll provide a realistic estimate based on your unique circumstances."
    },
    {
      id: 3,
      question: "Do you work with businesses in all industries?",
      answer: "Yes, I work with entrepreneurs across virtually all industries - from e-commerce and consulting to real estate and manufacturing. My strategies are adaptable and I customize each approach based on your specific industry requirements and business model."
    },
    {
      id: 4,
      question: "What's included in your wealth-building program?",
      answer: "My comprehensive program includes personalized tax strategy implementation, quarterly strategy reviews, business structure optimization, investment guidance, entity setup assistance, ongoing support, and access to my network of trusted professionals including attorneys and financial advisors."
    },
    {
      id: 5,
      question: "How quickly can I start seeing results?",
      answer: "Many strategies can be implemented immediately, with some clients seeing savings within 30-60 days. However, the most significant results typically compound over 6-12 months as we implement more advanced strategies and optimize your entire financial structure."
    },
    {
      id: 6,
      question: "Do you only work with high-income earners?",
      answer: "While many of my clients are high earners, I work with ambitious entrepreneurs at various income levels. The minimum requirement is typically $200,000+ in annual business revenue, as this is where my advanced strategies become most effective and cost-justified."
    },
    {
      id: 7,
      question: "What's your process for getting started?",
      answer: "First, you'll complete an application to ensure we're a good fit. Then we'll have a strategy consultation where I analyze your current situation and present customized solutions. If we decide to work together, I'll immediately begin implementing your personalized tax and wealth-building strategy."
    }
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

    const section = document.getElementById('faq');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section 
      id="faq" 
      className="faq-section"
    >
      <div className="faq-container">
        
        {/* Header Section */}
        <div className="faq-header">
          <div className="faq-tagline">
            Frequently Asked Questions
          </div>
          
          <h2 className="faq-heading">
            <span className="heading-line">Get Answers</span>
          </h2>
          
          <h3 className="faq-subheading">
            Everything you need to know about my proven tax strategies and wealth-building programs. Don't see your question? Reach out during our consultation.
          </h3>
        </div>

        {/* FAQ Items Section */}
        <div className="faq-items-section">
          <div className={`faq-list ${isVisible ? 'visible' : ''}`}>
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`faq-item ${openFAQ === faq.id ? 'open' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={openFAQ === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="question-text">{faq.question}</span>
                  <div className={`faq-icon ${openFAQ === faq.id ? 'rotated' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </button>
                
                <div
                  id={`faq-answer-${faq.id}`}
                  className={`faq-answer ${openFAQ === faq.id ? 'open' : ''}`}
                >
                  <div className="answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="faq-cta-section">
          <button 
            className="faq-cta-button"
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
            <span className="trust-text">Still have questions? Let's discuss them</span>
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
          --border-light: #e2e8f0;
          --transition-smooth: cubic-bezier(0.4, 0, 0.2, 1);
          --transition-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .faq-section {
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

        .faq-container {
          width: 100%;
          max-width: 900px;
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

        .faq-header {
          flex: 0 0 auto;
          margin-bottom: 4rem;
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
        .faq-tagline {
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

        .faq-tagline::before {
          content: '';
          position: absolute;
          left: -2rem;
          top: 50%;
          width: 1.2rem;
          height: 2px;
          background: var(--primary-black);
          transform: translateY(-50%);
        }

        .faq-tagline::after {
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
        .faq-heading {
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
        .faq-subheading {
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
           FAQ ITEMS SECTION
           ======================================== */

        .faq-items-section {
          flex: 1 1 auto;
          width: 100%;
          margin-bottom: 4rem;
        }

        .faq-list {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          border-bottom: 1px solid var(--border-light);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.4s var(--transition-smooth);
        }

        .faq-list.visible .faq-item {
          animation: faqSlideIn 0.6s var(--transition-smooth) forwards;
        }

        @keyframes faqSlideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-question {
          width: 100%;
          padding: 1.5rem 0;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          transition: all 0.3s var(--transition-smooth);
        }

        .faq-question:hover {
          color: var(--primary-black);
        }

        .faq-question:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
          border-radius: 4px;
        }

        .question-text {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-dark);
          line-height: 1.4;
          flex: 1;
          margin-right: 1rem;
        }

        .faq-icon {
          flex-shrink: 0;
          color: var(--text-gray);
          transition: all 0.3s var(--transition-smooth);
          transform-origin: center;
        }

        .faq-icon.rotated {
          transform: rotate(180deg);
          color: var(--primary-black);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s var(--transition-smooth);
        }

        .faq-answer.open {
          max-height: 300px;
          padding-bottom: 1.5rem;
        }

        .answer-content {
          padding-right: 3rem;
        }

        .answer-content p {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          color: var(--text-gray);
          line-height: 1.6;
          margin: 0;
        }

        .faq-item.open {
          background: rgba(248, 249, 250, 0.5);
          border-radius: 8px;
          padding: 0 1.5rem;
          margin: 0.5rem 0;
          border-bottom: none;
        }

        .faq-item.open .question-text {
          color: var(--primary-black);
        }

        /* ========================================
           CTA SECTION
           ======================================== */

        .faq-cta-section {
          flex: 0 0 auto;
          transform: translateY(30px);
          opacity: 0;
          animation: contentSlideUp 1s var(--transition-smooth) 1.4s forwards;
        }

        /* Call to action button - EXACT MATCH to Hero */
        .faq-cta-button {
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

        .faq-cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .faq-cta-button:hover::before {
          left: 100%;
        }

        .faq-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
        }

        .faq-cta-button:active {
          transform: translateY(-1px);
        }

        .cta-arrow {
          transition: transform 0.3s var(--transition-smooth);
        }

        .faq-cta-button:hover .cta-arrow {
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
          .faq-heading {
            font-size: 4rem;
          }
          
          .faq-subheading {
            font-size: 1.2rem;
          }
          
          .faq-container {
            padding: 2rem 6vw;
          }
          
          .question-text {
            font-size: 1.2rem;
          }
          
          .answer-content p {
            font-size: 1rem;
          }
        }

        /* Tablet (768px - 1023px) */
        @media (max-width: 1023px) and (min-width: 768px) {
          .faq-container {
            padding: 1.5rem 4vw;
          }
          
          .faq-header {
            margin-bottom: 3rem;
          }
          
          .faq-items-section {
            margin-bottom: 3rem;
          }
          
          .faq-heading {
            font-size: 2.8rem;
          }
          
          .faq-subheading {
            font-size: 1rem;
          }
          
          .faq-cta-button {
            padding: 0.8rem 1.6rem;
            font-size: 0.9rem;
          }
          
          .question-text {
            font-size: 1rem;
          }
          
          .answer-content p {
            font-size: 0.9rem;
          }
        }

        /* Mobile (≤767px) */
        @media (max-width: 767px) {
          .faq-section {
            padding: 3rem 0;
          }
          
          .faq-container {
            padding: 1.5rem 4vw;
          }
          
          .faq-header {
            margin-bottom: 2.5rem;
          }
          
          .faq-items-section {
            margin-bottom: 2.5rem;
          }
          
          .faq-tagline {
            font-size: 0.7rem;
          }
          
          .faq-tagline::before,
          .faq-tagline::after {
            width: 0.8rem;
            left: -1.2rem;
            right: -1.2rem;
          }
          
          .faq-heading {
            font-size: 2.2rem;
            margin-bottom: 1rem;
          }
          
          .faq-subheading {
            font-size: 0.9rem;
            line-height: 1.4;
          }
          
          .faq-cta-button {
            padding: 0.9rem 1.8rem;
            font-size: 0.95rem;
            border-radius: 16px;
            margin-bottom: 0.6rem;
          }
          
          .faq-question {
            padding: 1.2rem 0;
          }
          
          .question-text {
            font-size: 0.95rem;
            margin-right: 0.8rem;
          }
          
          .answer-content {
            padding-right: 2rem;
          }
          
          .answer-content p {
            font-size: 0.85rem;
          }
          
          .faq-item.open {
            padding: 0 1rem;
          }
        }

        /* Extra small mobile (≤480px) */
        @media (max-width: 480px) {
          .faq-container {
            padding: 1.2rem 4vw;
          }
          
          .faq-heading {
            font-size: 2rem;
          }
          
          .faq-subheading {
            font-size: 0.85rem;
          }
          
          .faq-cta-button {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
          
          .question-text {
            font-size: 0.9rem;
          }
          
          .answer-content p {
            font-size: 0.8rem;
          }
          
          .faq-question {
            padding: 1rem 0;
          }
          
          .answer-content {
            padding-right: 1.5rem;
          }
        }

        /* Enhanced focus states */
        .faq-cta-button:focus {
          outline: 3px solid #3b82f6;
          outline-offset: 3px;
          box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.1);
        }

        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .faq-header,
          .heading-line,
          .faq-subheading,
          .faq-cta-section,
          .faq-item,
          .faq-icon,
          .faq-answer {
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

export default FAQ;