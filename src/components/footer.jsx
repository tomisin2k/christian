import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('footer');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    }
  ];

  return (
    <footer 
      id="footer" 
      className="footer-section"
    >
      <div className="footer-container">
        
        {/* Main Footer Content */}
        <div className="footer-content">
          
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-name">Christian Maldonado</div>
            <div className="brand-tagline">Tax Strategist & Wealth Builder</div>
          </div>

          {/* Social Links */}
          <div className={`footer-social ${isVisible ? 'visible' : ''}`}>
            <div className="social-text">Follow My Journey</div>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  aria-label={`Follow Christian Maldonado on ${social.name}`}
                >
                  <div className="social-icon">
                    {social.icon}
                  </div>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-legal">
            <div className="copyright">
              © {new Date().getFullYear()} Vincent Boroden. All rights reserved.
            </div>
            <div className="legal-links">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Disclaimer</span>
            </div>
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

        .footer-section {
          width: 100vw;
          min-width: 100vw;
          background: var(--primary-black);
          color: var(--primary-white);
          margin: 0;
          padding: 4rem 0 2rem 0;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .footer-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 5vw;
          box-sizing: border-box;
        }

        /* ========================================
           MAIN FOOTER CONTENT
           ======================================== */

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          transform: translateY(30px);
          opacity: 0;
          animation: contentSlideUp 1s var(--transition-smooth) 0.3s forwards;
        }

        @keyframes contentSlideUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Brand Section */
        .footer-brand {
          flex: 1;
        }

        .brand-name {
          font-family: 'Inter', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--primary-white);
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .brand-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 0.5px;
        }

        /* Social Section */
        .footer-social {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }

        .social-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1rem;
          letter-spacing: 0.5px;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .social-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.9);
          transition: all 0.3s var(--transition-smooth);
          opacity: 0;
          transform: translateY(10px);
        }

        .footer-social.visible .social-link {
          animation: socialLinkFadeIn 0.6s var(--transition-smooth) forwards;
        }

        @keyframes socialLinkFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .social-link:hover {
          color: var(--primary-white);
          transform: translateY(-2px);
        }

        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s var(--transition-smooth);
        }

        .social-link:hover .social-icon {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .social-name {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        /* ========================================
           BOTTOM SECTION
           ======================================== */

        .footer-bottom {
          opacity: 0;
          animation: fadeIn 0.8s var(--transition-smooth) 0.8s forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .footer-divider {
          height: 1px;
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          margin-bottom: 1.5rem;
        }

        .footer-legal {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .legal-links {
          display: flex;
          gap: 1.5rem;
        }

        .legal-links span {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: color 0.3s var(--transition-smooth);
        }

        .legal-links span:hover {
          color: rgba(255, 255, 255, 0.9);
        }

        /* ========================================
           RESPONSIVE DESIGN
           ======================================== */

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }

          .footer-social {
            align-items: flex-start;
            text-align: left;
          }

          .footer-legal {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .legal-links {
            width: 100%;
            justify-content: space-between;
          }
        }

        @media (max-width: 480px) {
          .footer-section {
            padding: 3rem 0 1.5rem 0;
          }

          .social-links {
            gap: 1rem;
          }

          .brand-name {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

// import React, { useState, useEffect } from 'react';

// const Footer = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     const section = document.getElementById('footer');
//     if (section) observer.observe(section);

//     return () => observer.disconnect();
//   }, []);

//   const socialLinks = [
//     {
//       name: 'Instagram',
//       url: 'https://instagram.com',
//       icon: (
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
//           <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
//           <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
//         </svg>
//       )
//     },
//     {
//       name: 'TikTok',
//       url: 'https://tiktok.com',
//       icon: (
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
//         </svg>
//       )
//     },
//     {
//       name: 'LinkedIn',
//       url: 'https://linkedin.com',
//       icon: (
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
//           <rect x="2" y="9" width="4" height="12"/>
//           <circle cx="4" cy="4" r="2"/>
//         </svg>
//       )
//     }
//   ];

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <>
//       {/* Minimized Footer */}
//       <div className={`minimized-footer ${isExpanded ? 'hidden' : ''}`}>
//         <div className="minimized-social-icons">
//           {socialLinks.map((social, index) => (
//             <a
//               key={social.name}
//               href={social.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="minimized-social-link"
//               style={{ animationDelay: `${index * 0.1}s` }}
//               aria-label={social.name}
//             >
//               {social.icon}
//             </a>
//           ))}
//         </div>
//         <button 
//           className="expand-button"
//           onClick={toggleExpand}
//           aria-label={isExpanded ? 'Collapse footer' : 'Expand footer'}
//         >
//           <svg 
//             width="24" 
//             height="24" 
//             viewBox="0 0 24 24" 
//             fill="none" 
//             stroke="currentColor" 
//             strokeWidth="2"
//             className={`expand-arrow ${isExpanded ? 'expanded' : ''}`}
//           >
//             <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
//           </svg>
//         </button>
//       </div>

//       {/* Full Footer - Only shown when expanded */}
//       <footer 
//         id="footer" 
//         className={`footer-section ${isExpanded ? 'expanded' : ''}`}
//       >
//         <div className="footer-container">
          
//           {/* Main Footer Content */}
//           <div className="footer-content">
            
//             {/* Brand Section */}
//             <div className="footer-brand">
//               <div className="brand-name">Christian Maldonado</div>
//               <div className="brand-tagline">Tax Strategist & Wealth Builder</div>
//             </div>

//             {/* Social Links */}
//             <div className={`footer-social ${isVisible ? 'visible' : ''}`}>
//               <div className="social-text">Follow My Journey</div>
//               <div className="social-links">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={social.name}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="social-link"
//                     style={{ animationDelay: `${index * 0.2}s` }}
//                     aria-label={`Follow Christian Maldonado on ${social.name}`}
//                   >
//                     <div className="social-icon">
//                       {social.icon}
//                     </div>
//                     <span className="social-name">{social.name}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>

//           </div>

//           {/* Bottom Section */}
//           <div className="footer-bottom">
//             <div className="footer-divider"></div>
//             <div className="footer-legal">
//               <div className="copyright">
//                 © {new Date().getFullYear()} Christian Maldonado. All rights reserved.
//               </div>
//               <div className="legal-links">
//                 <span>Privacy Policy</span>
//                 <span>Terms of Service</span>
//                 <span>Disclaimer</span>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Close button for expanded footer */}
//         <button 
//           className="collapse-button"
//           onClick={toggleExpand}
//           aria-label="Collapse footer"
//         >
//           <svg 
//             width="24" 
//             height="24" 
//             viewBox="0 0 24 24" 
//             fill="none" 
//             stroke="currentColor" 
//             strokeWidth="2"
//           >
//             <path d="M19 10l-7-7m0 0l-7 7m7-7v18"/>
//           </svg>
//         </button>

//         <style jsx>{`
//           /* Import the same font as Hero */
//           @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

//           /* CSS Variables matching Hero */
//           :root {
//             --primary-black: #000000;
//             --primary-white: #ffffff;
//             --accent-gray: #f8f9fa;
//             --text-gray: #64748b;
//             --text-dark: #1e293b;
//             --border-light: #e2e8f0;
//             --transition-smooth: cubic-bezier(0.4, 0, 0.2, 1);
//             --transition-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
//           }

//           /* ========================================
//              MINIMIZED FOOTER STYLES
//              ======================================== */
//           .minimized-footer {
//             position: fixed;
//             bottom: 0;
//             left: 0;
//             right: 0;
//             background: rgba(0, 0, 0, 0.9);
//             backdrop-filter: blur(5px);
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             padding: 0.5rem 1.5rem;
//             z-index: 100;
//             border-top: 1px solid rgba(255, 255, 255, 0.1);
//             transition: all 0.5s var(--transition-smooth);
//           }

//           .minimized-footer.hidden {
//             transform: translateY(100%);
//             opacity: 0;
//           }

//           .minimized-social-icons {
//             display: flex;
//             gap: 1.5rem;
//           }

//           .minimized-social-link {
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             width: 40px;
//             height: 40px;
//             border-radius: 50%;
//             background: rgba(255, 255, 255, 0.1);
//             color: white;
//             transition: all 0.3s var(--transition-smooth);
//             opacity: 0;
//             transform: translateY(10px);
//             animation: socialLinkFadeIn 0.6s var(--transition-smooth) forwards;
//           }

//           .minimized-social-link:hover {
//             background: rgba(255, 255, 255, 0.2);
//             transform: translateY(-2px) scale(1.1);
//           }

//           .expand-button {
//             background: transparent;
//             border: none;
//             color: white;
//             cursor: pointer;
//             padding: 0.5rem;
//             border-radius: 50%;
//             transition: all 0.3s var(--transition-smooth);
//           }

//           .expand-button:hover {
//             background: rgba(255, 255, 255, 0.1);
//           }

//           .expand-arrow {
//             transition: transform 0.4s var(--transition-smooth);
//           }

//           .expand-arrow.expanded {
//             transform: rotate(180deg);
//           }

//           /* ========================================
//              FULL FOOTER STYLES
//              ======================================== */
//           .footer-section {
//             width: 100vw;
//             min-width: 100vw;
//             background: var(--primary-black);
//             color: var(--primary-white);
//             margin: 0;
//             padding: 4rem 0 2rem 0;
//             box-sizing: border-box;
//             position: relative;
//             overflow: hidden;
//             transform: translateY(100%);
//             opacity: 0;
//             transition: all 0.6s var(--transition-smooth);
//           }

//           .footer-section.expanded {
//             transform: translateY(0);
//             opacity: 1;
//           }

//           .footer-container {
//             width: 100%;
//             max-width: 1200px;
//             margin: 0 auto;
//             padding: 0 5vw;
//             box-sizing: border-box;
//           }

//           .footer-content {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             margin-bottom: 3rem;
//           }

//           /* Brand Section */
//           .footer-brand {
//             flex: 1;
//           }

//           .brand-name {
//             font-family: 'Inter', sans-serif;
//             font-size: 1.8rem;
//             font-weight: 800;
//             color: var(--primary-white);
//             margin-bottom: 0.5rem;
//             letter-spacing: -0.02em;
//           }

//           .brand-tagline {
//             font-family: 'Inter', sans-serif;
//             font-size: 0.9rem;
//             font-weight: 400;
//             color: rgba(255, 255, 255, 0.7);
//             letter-spacing: 0.5px;
//           }

//           /* Social Section */
//           .footer-social {
//             flex: 1;
//             display: flex;
//             flex-direction: column;
//             align-items: flex-end;
//             text-align: right;
//           }

//           .social-text {
//             font-family: 'Inter', sans-serif;
//             font-size: 0.85rem;
//             font-weight: 500;
//             color: rgba(255, 255, 255, 0.8);
//             margin-bottom: 1rem;
//             letter-spacing: 0.5px;
//           }

//           .social-links {
//             display: flex;
//             gap: 1.5rem;
//             align-items: center;
//           }

//           .social-link {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             gap: 0.5rem;
//             text-decoration: none;
//             color: rgba(255, 255, 255, 0.9);
//             transition: all 0.3s var(--transition-smooth);
//             opacity: 0;
//             transform: translateY(10px);
//           }

//           .footer-social.visible .social-link {
//             animation: socialLinkFadeIn 0.6s var(--transition-smooth) forwards;
//           }

//           @keyframes socialLinkFadeIn {
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           .social-link:hover {
//             color: var(--primary-white);
//             transform: translateY(-2px);
//           }

//           .social-icon {
//             width: 40px;
//             height: 40px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             background: rgba(255, 255, 255, 0.1);
//             border-radius: 50%;
//             transition: all 0.3s var(--transition-smooth);
//           }

//           .social-link:hover .social-icon {
//             background: rgba(255, 255, 255, 0.2);
//             transform: scale(1.1);
//           }

//           .social-name {
//             font-family: 'Inter', sans-serif;
//             font-size: 0.75rem;
//             font-weight: 500;
//             letter-spacing: 0.5px;
//           }

//           /* Bottom Section */
//           .footer-bottom {
//             opacity: 0;
//             animation: fadeIn 0.8s var(--transition-smooth) 0.4s forwards;
//           }

//           @keyframes fadeIn {
//             to {
//               opacity: 1;
//             }
//           }

//           .footer-divider {
//             height: 1px;
//             width: 100%;
//             background: rgba(255, 255, 255, 0.1);
//             margin-bottom: 1.5rem;
//           }

//           .footer-legal {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//           }

//           .copyright {
//             font-family: 'Inter', sans-serif;
//             font-size: 0.75rem;
//             color: rgba(255, 255, 255, 0.6);
//           }

//           .legal-links {
//             display: flex;
//             gap: 1.5rem;
//           }

//           .legal-links span {
//             font-family: 'Inter', sans-serif;
//             font-size: 0.75rem;
//             color: rgba(255, 255, 255, 0.6);
//             cursor: pointer;
//             transition: color 0.3s var(--transition-smooth);
//           }

//           .legal-links span:hover {
//             color: rgba(255, 255, 255, 0.9);
//           }

//           /* Collapse Button */
//           .collapse-button {
//             position: absolute;
//             top: 1.5rem;
//             right: 1.5rem;
//             background: rgba(255, 255, 255, 0.1);
//             border: none;
//             color: white;
//             width: 40px;
//             height: 40px;
//             border-radius: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             cursor: pointer;
//             transition: all 0.3s var(--transition-smooth);
//           }

//           .collapse-button:hover {
//             background: rgba(255, 255, 255, 0.2);
//             transform: translateY(-2px);
//           }

//           /* ========================================
//              RESPONSIVE DESIGN
//              ======================================== */
//           @media (max-width: 768px) {
//             .footer-content {
//               flex-direction: column;
//               align-items: flex-start;
//               gap: 2rem;
//             }

//             .footer-social {
//               align-items: flex-start;
//               text-align: left;
//             }

//             .footer-legal {
//               flex-direction: column;
//               align-items: flex-start;
//               gap: 1rem;
//             }

//             .legal-links {
//               width: 100%;
//               justify-content: space-between;
//             }

//             .minimized-social-icons {
//               gap: 1rem;
//             }
//           }

//           @media (max-width: 480px) {
//             .footer-section.expanded {
//               padding: 3rem 0 1.5rem 0;
//             }

//             .brand-name {
//               font-size: 1.5rem;
//             }

//             .minimized-footer {
//               padding: 0.5rem 1rem;
//             }
//           }
//         `}</style>
//       </footer>
//     </>
//   );
// };

// export default Footer;