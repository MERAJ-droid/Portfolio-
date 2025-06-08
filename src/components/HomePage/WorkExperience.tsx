import React, { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconCode, IconClipboardList } from '@tabler/icons-react';

gsap.registerPlugin(ScrollTrigger);

type Experience = {
  title: string;
  hoverTitle: string;
  type: string;
  subTitle: ReactNode;
  link: string;
  icon: React.ComponentType<{ size?: number; stroke?: number; className?: string }>;
};

const WorkExperience: React.FC = () => {
  const experience: Experience[] = [
    {
      title: "NIT DURGAPUR",
      hoverTitle: "AI/ML RESEARCH INTERN",
      type: "INTERN",
      icon: IconCode as React.ComponentType<{ size?: number; stroke?: number; className?: string }>,
      subTitle: (
        <>
          <h1 className="font-bold">MAY 2025 - PRESENT</h1>
          <div className="mt-4">
           Working under academic mentorship to explore real-world applications of Deep Learning, Image Processing, and AI/ML technologies. Actively involved in model experimentation, literature review, and the development of intelligent systems using Python and popular deep learning frameworks.
            <br className="mt-4" />
            Currently contributing to a research initiative in the field of Deep Learning and Image Processing, with applications in Artificial Intelligence and Computer Vision.
          </div>
        </>
      ),
      link: "https://master--agraexpress.netlify.com",
      
    },
    {
      title: "TEACHNOOK",
      hoverTitle: "AIML",
      type: "INTERN",
      icon: IconClipboardList as React.ComponentType<{ size?: number; stroke?: number; className?: string }>,
      subTitle: (
        <>
          <h1 className="font-bold">AUG 2024 - SEP 2024</h1>
          <div className="mt-4">
            <ul>
              <li>Conducted extensive data preprocessing including image augmentation, normalization, and noise reduction to improve model performance and robustness.</li>
              <li>Detailed study on YOLO and HAAR Cascades for face recognition used in smart attendance system.</li>
            </ul>
          </div>
        </>
      ),
      link: "https://www.fiverr.com/alphacupcake",
    },
    // {
    //   title: "1STOP.AI",
    //   hoverTitle: "AIML",
    //   type: "INTERN",
    //   icon: IconRobot as React.ComponentType<{ size?: number; stroke?: number; className?: string }>,
    //   subTitle: (
    //     <>
    //       <h1 className="font-bold">AUG 2023 - SEP 2023</h1>
    //       <div className="mt-4">
    //         <ul>
    //           <li>Conducted extensive data preprocessing including image augmentation, normalization, and noise reduction to improve model performance and robustness.</li>
    //           <li>
    //           Built and implemented basic face detection
    //           models using OpenCV.
    //           </li>
    //         </ul>
    //       </div>
    //     </>
    //   ),
    //   link: "",
    // },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      experienceRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.from(ref, {
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: "top bottom-=100",
              end: "top center",
              scrub: 1,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background to-background/50"
    >
      <div className="container mx-auto px-4 overflow-x-hidden max-w-full">
        <h1 className="text-6xl font-bold text-primary mb-12 text-center">
          WORK EXPERIENCE
        </h1>
        <div className="space-y-16">
          {experience.map((job, index) => (
            <ExperienceCard
              key={index}
              job={job}
              ref={(el) => (experienceRefs.current[index] = el)}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type ExperienceCardProps = {
  job: Experience;
  isEven: boolean;
};

const ExperienceCard = React.forwardRef<HTMLDivElement, ExperienceCardProps>(
  ({ job, isEven }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col md:flex-row ${
          isEven ? "md:flex-row-reverse" : ""
        } items-center gap-8`}
      >
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-accent mb-2">{job.title}</h2>
          <h3 className="text-xl text-accent mb-4">{job.hoverTitle}</h3>
          <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm mb-4">
            {job.type}
          </span>
          <div className="text-xl opacity-80 overflow-x-hidden">{job.subTitle}</div>
        </div>
        <div className="w-full md:w-1/2 aspect-video bg-primary/10 rounded-lg flex items-center justify-center ">
        {job.icon && <job.icon size={100} stroke={1.5} />}
        </div>
    
      </div>
    );
  }
);

export default WorkExperience;
