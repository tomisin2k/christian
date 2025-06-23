import React, { useState, useEffect } from 'react';
import './hero.css'; // Changed from './Hero.css' to './hero.css'

const Hero = () => {
  // State to control which scene is currently displayed
  const [currentScene, setCurrentScene] = useState('A');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoError, setVideoError] = useState(null);

  // Load animation on mount
  useEffect(() => {
    setIsLoaded(true);
    console.log('Hero component mounted');
  }, []);

  // Looping animation effect - switches scenes every 20 seconds
  useEffect(() => {
    console.log('Setting up animation loop');
    
    const loopAnimation = () => {
      console.log('Starting animation transition');
      setIsAnimating(true);
      
      // Brief delay for animation to start, then switch content
      setTimeout(() => {
        setCurrentScene(prev => {
          const newScene = prev === 'A' ? 'B' : 'A';
          console.log(`Switching to scene ${newScene}`);
          return newScene;
        });
        setTimeout(() => {
          setIsAnimating(false);
          console.log('Animation transition completed');
        }, 500); // Increased from 100ms to 500ms for smoother transition
      }, 800); // Transition duration
    };

    // Start first animation after 20 seconds (reduced to 5s for testing)
    const initialTimer = setTimeout(loopAnimation, 5000);
    // Then repeat every 20 seconds (reduced to 10s for testing)
    const intervalTimer = setInterval(loopAnimation, 10000);

    return () => {
      console.log('Cleaning up animation timers');
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  // Scene A Content (Initial)
  const sceneAContent = {
    heading: "Christan Maldonado",
    tagline: "Financial Architect",
    subheading: "Transforming 1099 contractors & online entrepreneurs into wealth-building machines through strategic tax optimization.",
    video: "/videos/herovid1.mp4"
  };

  // Scene B Content (After animation)
  const sceneBContent = {
    heading: "Ready to Scale?",
    tagline: "Your Financial Future Awaits",
    subheading: "Join elite entrepreneurs who've cut taxes by 40% and built generational wealth. One application separates you from financial freedom.",
    video: "/videos/herovid2.MP4"
  };

  const currentContent = currentScene === 'A' ? sceneAContent : sceneBContent;

  // Handle video errors
  const handleVideoError = (e) => {
    console.error('Video loading error:', e);
    setVideoError(`Failed to load video: ${currentContent.video}`);
  };

  console.log(`Rendering Scene ${currentScene}`, {
    isAnimating,
    isLoaded,
    videoError,
    currentContent
  });

  return (
    <section className={`hero-section ${isLoaded ? 'loaded' : ''}`} aria-label="Christian Maldonado Hero Section">
      <div className="hero-container">
        
        {/* Animated background elements */}
        <div className="hero-bg-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
        </div>
        
        {/* Left Side - Text Content */}
        <div className={`hero-text-side ${isAnimating ? 'animating' : ''} ${currentScene === 'B' ? 'scene-b' : ''}`}>
          <div className="hero-text-content" key={currentScene}>
            
            {/* Tagline */}
            <div className="hero-tagline">
              {currentContent.tagline}
            </div>
            
            <header>
              <h1 className="hero-heading">
                <span className="heading-line">{currentContent.heading}</span>
              </h1>
              
              <h2 className="hero-subheading">
                {currentContent.subheading}
              </h2>
            </header>
            
            {/* Call to Action Button */}
            <div className="cta-container">
              <button 
                className="hero-cta-button"
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
              
              {/* Trust indicator */}
              <div className="trust-indicator">
                <span className="trust-text">Trusted by 500+ entrepreneurs</span>
              </div>
            </div>

            {/* Error display (only shows if there's an error) */}
            {videoError && (
              <div className="video-error-message">
                <p>{videoError}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Video Content */}
        <div className={`hero-video-side ${isAnimating ? 'animating' : ''}`}>
          <div className="hero-video-container">
            <video
              className="hero-video"
              src={currentContent.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/hero-poster.jpg"
              aria-label="Christian Maldonado introduction video"
              onError={handleVideoError}
            >
              Your browser does not support the video tag.
            </video>
            
            {/* Modern video overlay with gradient */}
            <div className="video-overlay"></div>
            
            {/* Video corner accent */}
            <div className="video-accent"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;