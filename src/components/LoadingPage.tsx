import React, { useEffect, useState } from 'react';
import '../index.css';

const Loading: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const text = document.querySelector('.loading-text') as HTMLElement;
    const container = document.querySelector('.loading-container') as HTMLElement;
    
    // Trigger animations after component mounts
    setTimeout(() => {
      setIsVisible(true);
      text?.classList.add('animate-text');
      container?.classList.add('animate-container');
    }, 100);

    // Add subtle floating particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 4 + 3) + 's';
      container?.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 7000);
    };

    const particleInterval = setInterval(createParticle, 800);

    return () => {
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <div className={`loading-container ${isVisible ? 'visible' : ''}`}>
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <h1 className="loading-text">YOU FOUND ME</h1>
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
