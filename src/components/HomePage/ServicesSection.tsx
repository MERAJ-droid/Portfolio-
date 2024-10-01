import React from 'react';
import { TransitionLink } from '../../contexts/PageLoaderContext';
import AnimatedText from '../common/AnimatedText';
import UIUX from '../../assets/uiux.mp4';
import AIML from '../../assets/AIML.mp4';
import Td from '../../assets/3d.mp4';
import FS from '../../assets/fullstack.mp4';

const MyComponent: React.FC = () => {
    return (
        <div className="bg-gradient-to-b from-background to-background/50">
            <div className="container mx-auto px-4">
                <div className="py-24 text-center">
                    <h1 className='text-xl sm:text-5xl lg:text-8xl font-extrabold mt-1 overflow-clip'>
                        <AnimatedText refresh text='MY SERVICES'/>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <ServiceSection
                        title="UI UX DESIGN"
                        subtitle="PROFESSIONAL"
                        videoSrc={UIUX}
                        years={3}
                        projects={7}
                        description=" With a keen eye for aesthetics and a deep understanding of user behavior, I create seamless digital experiences that delight users and drive engagement. From wireframing to prototyping, I leverage design tools and methodologies to bring innovative ideas to life. My approach combines user-centered design principles with the latest UI trends to deliver interfaces that are beautiful, highly functional and user-friendly."
                        linkText="UI UX DESIGN"
                    />

                    <ServiceSection
                        title="AIML DEVELOPMENT"
                        subtitle="PROFESSIONAL"
                        videoSrc={AIML}
                        years={2}
                        projects={2}
                        description="Pushing the boundaries of artificial intelligence and machine learning, I craft innovative solutions that transform raw data into actionable insights. From predictive analytics to natural language processing, my AIML projects harness the power of data to solve complex problems and drive decision-making."
                        projectLink={new URL("https://github.com/nytrixis").toString()}

                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <ServiceSection
                        title="3D WEB DESIGN"
                        subtitle="PROFESSIONAL"
                        videoSrc={Td}
                        years={1}
                        projects={1}
                        description="Crafting immersive digital experiences with Three.js and WebGL, I bring websites to life with stunning 3D graphics and interactive elements. My designs push the boundaries of web technology, creating visually captivating and performant interfaces that engage users and elevate brand presence in the digital space.  I optimize complex 3D scenes for smooth performance across devices, ensuring a seamless blend of artistry and technical prowess in every project."
                        linkText="3D WEB DESIGN"
                    />

                    <ServiceSection
                        title="FULL STACK WEB DEVELOPMENT"
                        subtitle="PROFESSIONAL"
                        videoSrc={FS}
                        years={3}
                        projects={10}
                        description="Mastering the art of full-stack web development, I create seamless, end-to-end solutions that bridge front-end aesthetics with back-end functionality. From crafting intuitive user interfaces to architecting robust server-side systems, I leverage cutting-edge technologies to build scalable and efficient web applications."
                        projectLink={new URL("https://github.com/nytrixis").toString()}
                    />
                </div>
            </div>
        </div>
    );
}

interface ServiceSectionProps {
    title: string;
    subtitle: string;
    videoSrc?: string;
    imageSrc?: string;
    years?: number;
    projects?: number;
    clients?: number;
    description: string;
    link?: string;
    linkText?: string;
    projectName?: string;
    projectLink?: string;
    skills?: string[];
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
    title,
    subtitle,
    videoSrc,
    imageSrc,
    years,
    projects,
    clients,
    description,
    link,
    linkText,
    projectName,
    projectLink,
    skills,
}) => {
    const cardClass = "border-2 p-4 h-36 border-white/10 rounded-lg fill-hover relative z-0 flex flex-col justify-center items-center bg-background/20 backdrop-blur-xl";
    const cardClass2 = "border-2 p-4 h-12 border-white/10 rounded-lg fill-hover relative z-0 flex flex-col justify-center items-center bg-background/20 backdrop-blur-xl";

    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg">
            {videoSrc && (
                <video src={videoSrc} className="absolute inset-0 w-full h-full object-cover opacity-50" autoPlay muted loop />
            )}
            {imageSrc && (
                <img src={imageSrc} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-50" />
            )}
            <div className="relative z-10 p-8 bg-gradient-to-t from-background via-background/80 to-transparent">
                <h2 className="text-4xl font-bold mb-2">{title}</h2>
                <h3 className="text-xl text-primary mb-4">{subtitle}</h3>
                <p className="mb-4">{description}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                    {years !== undefined && (
                        <div className={cardClass}>
                            <span className="text-4xl font-bold">{years}</span>
                            <span className="text-sm">Years</span>
                        </div>
                    )}
                    {projects !== undefined && (
                        <div className={cardClass}>
                            <span className="text-4xl font-bold">{projects}+</span>
                            <span className="text-sm">Projects</span>
                        </div>
                    )}
                    {clients !== undefined && (
                        <div className={cardClass}>
                            <span className="text-4xl font-bold">{clients}+</span>
                            <span className="text-sm">Clients</span>
                        </div>
                    )}
                </div>
                {skills && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {skills.map((skill, index) => (
                            <div key={index} className={cardClass2}>{skill}</div>
                        ))}
                    </div>
                )}
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-background px-6 py-2 rounded-full font-bold hover:bg-primary/80 transition-colors">
                        {linkText}
                    </a>
                )}
                {projectName && projectLink && (
                    <TransitionLink to={projectLink} className="inline-block bg-primary text-background px-6 py-2 rounded-full font-bold hover:bg-primary/80 transition-colors">
                        Play {projectName}
                    </TransitionLink>
                )}
                {projectLink && !projectName && (
                    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-background px-6 py-2 rounded-full font-bold hover:bg-primary/80 transition-colors">
                        View All Projects
                    </a>
                )}
            </div>
        </div>
    );
}

export default MyComponent;
