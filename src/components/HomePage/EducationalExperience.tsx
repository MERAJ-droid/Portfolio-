import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EducationalExperience: React.FC = () => {
  const leftSectionRefs = useRef<HTMLDivElement[]>([]);
  const rightSectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    leftSectionRefs.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    rightSectionRefs.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const addToLeftRefs = (el: HTMLDivElement) => {
    if (el && !leftSectionRefs.current.includes(el)) {
      leftSectionRefs.current.push(el);
    }
  };

  const addToRightRefs = (el: HTMLDivElement) => {
    if (el && !rightSectionRefs.current.includes(el)) {
      rightSectionRefs.current.push(el);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-6xl font-bold text-center  text-primary mb-8 mt-8">EDUCATIONAL EXPERIENCE</h2>
      <div className="relative flex flex-col items-center">
        <div className="absolute h-full border-l-2 border-gray-300 left-1/2 transform -translate-x-1/2"></div>
        <div className="flex flex-col items-center">
          {/* Left Section */}
          <div className="flex w-full justify-end mb-8">
            <div ref={addToLeftRefs} className="w-1/2 pr-4 relative">
              <div className="absolute left-[-5px] top-0 h-full border-l-2 border-transparent"></div>
              <div className="relative bg-background pl-10">
                <h3 className="font-semibold text-3xl text-accent">Dr. B.C.Roy Engineering College, Durgapur</h3><br />
                <p className='text-xl'>B.Tech in Computer Science & Engineering</p><br />
                <p className='text-primary'>2022-2026</p>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex w-full justify-start mb-8">
            <div ref={addToRightRefs} className="w-1/2 pl-10 relative">
              <div className="absolute right-[-5px] top-0 h-full border-l-2 border-transparent"></div>
              <div className="relative bg-background pr-10 text-right">
                <h3 className="font-semibold text-3xl text-accent">Bidhan Chandra Institution, Durgapur</h3><br />
                <p className= 'text-xl'>Higher Secondary Education (PCM) - WBCHSE</p><br />
                <p className='text-primary'>2020-2022</p>
              </div>
            </div>
          </div>
          {/* Left Section */}
          {/* <div className="flex w-full justify-end mb-8">
            <div ref={addToLeftRefs} className="w-1/2 pr-4 relative">
              <div className="absolute left-[-5px] top-0 h-full border-l-2 border-transparent"></div>
              <div className="relative bg-background pl-10">
                <h3 className="font-semibold text-3xl text-accent">Carmel School, Steel Township, Durgapur</h3> <br />
                <p className='text-xl'>Secondary Education - ICSE</p><br />
                <p className='text-primary'>2007-2020</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default EducationalExperience;
