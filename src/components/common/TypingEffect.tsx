// components/common/TypingEffect.tsx
import React, { useEffect, useState } from 'react';
import './TypingEffect.css';

const roles: string[] = ["Web Developer", "Coder", "Game Developer"];

const TypingEffect: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [subIndex, setSubIndex] = useState<number>(0);
  const [blink, setBlink] = useState<boolean>(true);
  const [reverse, setReverse] = useState<boolean>(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 0);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === roles[index].length ? 1000 : 150, parseInt(`${Math.random() * 350}`)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return (
    <div className="typing-effect">
      <span>{`${roles[index].substring(0, subIndex)}${blink ? "|" : " "}`}</span>
    </div>
  );
};

export default TypingEffect;
