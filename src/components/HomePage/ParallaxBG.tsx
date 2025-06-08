import { useRef, useEffect, ReactNode } from "react";
import BG from "../../assets/Frontt.jpg";
import BGFront from "../../assets/Frontt.jpg?url";
import BGFront2 from "../../assets/Frontt.jpg?url";
import Wallpaper1 from "../../assets/wallpaper1.png?url";
import Wallpaper2 from "../../assets/wallpaper2.png?url";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SmallImage from "../../assets/toppng.com-spider-man-homecoming-by-spiderman-hanging-upside-dow-461x687.png";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxBG(props:{children:ReactNode})
{

    const headingRef = useRef<HTMLHeadingElement>(null);
    const BGFront2Ref = useRef<HTMLImageElement>(null);
    const BGFrontRef = useRef<HTMLImageElement>(null);
    const SmallImageRef = useRef<HTMLImageElement>(null);
    const centerDiv = useRef<HTMLDivElement>(null);
    const mainDiv = useRef<HTMLDivElement>(null);
    
    useEffect(() => {        
        let ctx = gsap.context(() => {
            
            gsap.to(
                centerDiv.current,{
                    width:"10vw",
                    scrollTrigger:{
                        trigger:mainDiv.current,
                        start:"-1% 0%",
                        end:"bottom -100%",
                        scrub:true,
                        // markers:true
                    }
                }
            )

            // Enhanced Spider-Man animations
            gsap.fromTo(
                SmallImageRef.current,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                    },
                }
            )

            // Subtle swinging motion for Spider-Man
            gsap.to(SmallImageRef.current, {
                rotation: 8,
                transformOrigin: "top center", 
                duration: 3,
                yoyo: true,
                repeat: -1,
                ease: "power2.inOut"
            });

            gsap.fromTo(
                headingRef.current,{
                    y:50,
                },
                {
                    y:-500,
                    scrollTrigger:{
                        trigger:mainDiv.current,
                        start:"30% 35%",
                        end:"60% 0%",
                        scrub:true,
                        // markers:true
                    }
                }
            )
            gsap.fromTo(
                BGFrontRef.current,{
                    yPercent:0
                },
                {
                    yPercent:-20,
                    scrollTrigger:{
                        trigger:mainDiv.current,
                        start:"10% 10%",
                        end:"75% 0%",
                        scrub:true,
                        // markers:true
                    }
                }
            )
            gsap.fromTo(
                BGFront2Ref.current,{
                    yPercent:0
                },
                {
                    yPercent:-30,
                    scrollTrigger:{
                        trigger:mainDiv.current,
                        start:"10% 10%",
                        end:"75% 0%",
                        scrub:true,
                        // markers:true
                    }
                }
            );
            
            //intro
            gsap.from(mainDiv.current,
                {
                    opacity:0,
                    ease: "power4.out",
                    duration:4,
                },
            );
            [BGFrontRef,BGFront2Ref].forEach((ref,index)=>{
                gsap.from(ref.current,
                    {
                        y:-200,
                        ease: "power4.out",
                        duration:4,
                        delay:.2*index
                    },
                )
            })
        });

        // Mouse interaction effect
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            const deltaX = (clientX - centerX) / centerX;
            const deltaY = (clientY - centerY) / centerY;
            
            gsap.to(SmallImageRef.current, {
                x: deltaX * 15,
                y: deltaY * 15,
                duration: 0.8,
                ease: "power2.out"
            });

            // Subtle parallax for background layers
            gsap.to(BGFrontRef.current, {
                x: deltaX * 5,
                y: deltaY * 5,
                duration: 1.2,
                ease: "power2.out"
            });

            gsap.to(BGFront2Ref.current, {
                x: deltaX * 8,
                y: deltaY * 8,
                duration: 1,
                ease: "power2.out"
            });
        };

        // Add mouse event listener
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            ctx.revert(); // cleanup GSAP
            window.removeEventListener('mousemove', handleMouseMove); // cleanup mouse listener
        };
      }, []);

    return (
        <>
            <link rel="prefetch" href={BG} />
            <div className="overflow-x-clip flex justify-center">
                <div ref={mainDiv} className="flex w-max gap-4 items-end">
                    <div className="h-[70vh] w-[50vw] border-2 border-white/20 rounded-2xl">
                        <img className="w-full h-full object-cover rounded-2xl" src={Wallpaper1} alt="" />
                    </div>
                    <div ref={centerDiv} className='relative flex h-screen w-screen flex-col justify-center items-center overflow-clip border-2 border-white/20 rounded-b-2xl'>
                        <img className='absolute top-0 w-full h-full object-cover opacity-100' src={BG} alt="" />
                        <img ref={BGFront2Ref} className='hidden md:block absolute top-0 w-full h-full object-cover' src={BGFront2} alt="" />
                        
                        <div className='hidden md:block absolute top-0 w-full h-full' ref={BGFrontRef}>
                            <img className='w-full h-full object-cover' src={BGFront} alt="" />
                            <div className="h-96 bg-background"></div>
                        </div>
                        <div className="h-screen w-full bg-background/50 pointer-events-none absolute top-0 left-0"></div>
                        <div className='' ref={headingRef}>
                            <img
                                ref={SmallImageRef} 
                                src={SmallImage} 
                                alt="Spider-Man swinging"
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-19 h-19 object-contain z-0"
                            />
                            {props.children}
                        </div>
                    </div>
                    <div className="h-[70vh] w-[50vw] border-2 border-white/20 rounded-2xl">
                        <img className="w-full h-full object-cover rounded-2xl" src={Wallpaper2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
