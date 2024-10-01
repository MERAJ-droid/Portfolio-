import React, { useEffect } from 'react';
import '../index.css';

const Loading: React.FC = () => {
  useEffect(() => {
    const text = document.querySelector('.loading-text') as HTMLElement;
    text.classList.add('animate-text');
  }, []);

  return (
    <div className="loading-container">
      <h1 className="loading-text">YOU FOUND ME</h1>
    </div>
  );
};

export default Loading;
