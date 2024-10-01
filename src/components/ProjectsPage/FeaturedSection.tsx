import { useEffect, useRef, useState } from 'react';
import BUZZUPBG from '../../assets/Buzzup.jpg'
// import Button from '../common/Button'
import { Canvas } from '@react-three/fiber';

import  TD from '../../assets/tds.mp4';
// import DV from '../../assets/dhanvantari.png';
import Penguin from '../models/Penguin';
export default function FeaturedSection()
{
    const [phaseIndex,setPhaseIndex] = useState(0);
    const ref = useRef<HTMLDivElement>(null)
    const phases = ['STARFLIX','DV',"PENGUIN"];

    useEffect(()=>{
        deltaPhase(0);
        resetTimer();
    },[])

    const isTransitioning = useRef(false);
    const intervalId = useRef<any>(0);

    function resetTimer()
    {
        clearInterval(intervalId.current);
        intervalId.current = setInterval(()=>{
            deltaPhase(1)
        },5000)   
    }

    function deltaPhase(delta:number)
    {
        if(isTransitioning.current)return;
        isTransitioning.current = true;
        setTimeout(() => {
            isTransitioning.current = false;
        }, (500));
        setPhaseIndex(prev=>{
            prev += delta;
            prev %= phases.length;
            if(prev < 0)prev = phases.length - 1;
            return prev;
        })
    }
    function setPhase(val:number)
    {
        if(isTransitioning.current)return;
        isTransitioning.current = true;
        setTimeout(() => {
            isTransitioning.current = false;
        }, (500));
        setPhaseIndex(prev=>{
            prev = val;
            prev %= phases.length;
            if(prev < 0)prev = phases.length - 1;
            return prev;
        })
    }

  return (
    <>
        <section className="h-screen flex flex-col items-center justify-between p-4 sm:pt-36 pb-16">
            <h1 className='z-20 font-bold opacity-70'>FEATURED PROJECTS</h1>
            <div className="container mx-auto flex justify-evenly md:justify-between items-end md:items-center z-20 h-128 pointer-events-none">
                <svg onClick={()=>{deltaPhase(-1);resetTimer()}} className="cursor-pointer pointer-events-auto hover:scale-125 hover:text-accent transition-all active:scale-90 active:text-primary" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M30 12L19.4142 22.5858C18.6332 23.3668 18.6332 24.6332 19.4142 25.4142L30 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg onClick={()=>{deltaPhase(1);resetTimer()}} className="cursor-pointer pointer-events-auto hover:scale-125 hover:text-accent transition-all active:scale-90 active:text-primary" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M18 12L28.5858 22.5858C29.3668 23.3668 29.3668 24.6332 28.5858 25.4142L18 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            {/* <div className="w-full absolute origin-left h-1 bg-primary scale-x-50 bottom-0"/> */}
            <div className="flex z-20 gap-4">
                {
                    phases.map((value,index)=>
                    {
                        if(phaseIndex == 1)
                        {
                            return <div onClick={()=>{setPhase(index);resetTimer()}} className={`cursor-pointer w-3 h-3 rounded-full transition-colors duration-700 ${(index==phaseIndex)?"bg-[#3B82F6]":"bg-[#3B82F6]/50"}`} key={value}></div>
                        }
                        return(
                            <div onClick={()=>{setPhase(index);resetTimer()}} className={`cursor-pointer w-3 h-3 rounded-full transition-colors duration-700 ${(index==phaseIndex)?"bg-primary":"bg-primary/50"}`} key={value}></div>
                        )
                    })
                }
            </div>
            <div className="absolute top-0 left-0 h-full w-full overflow-clip z-10">
            <div style={{translate:`-${(phaseIndex)*100}vw 0`}} className="w-[300vw] h-full flex transition-all duration-500">
                
            <div className="w-[100vw] h-full relative flex flex-col justify-center items-center p-4 lg:px-32 xl:px-64">
                    <video src={TD} className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop/>
                    <div className="z-10 text-center">
                        <h1 className='animate left font-black text-6xl md:text-9xl leading-tight'>STAR<span className='text-blue-500'>FLIX</span>
                        </h1>
                        <h1 className='animate left delay-1 font-extrabold text-2xl md:text-5xl leading-tight mt-4'>
                            Discover the <span className='text-accent-500'>Universe</span>
                        </h1>
                        <p className='animate left delay-2 font-light opacity-70 text-sm md:text-base mt-4'>
                            Embark on an interstellar journey with our astronaut explorer!
                        </p>
                        <div className="mt-8">
                            <a 
                                href='https://github.com/MERAJ-droid/StarFlix' 
                                target='_blank' 
                                className='bg-blue-500 text-white w-64 rounded-xl px-4 py-2.5 md:py-4 md:px-6 hover:scale-105 transition-transform active:scale-95 text-xs md:text-base inline-block'
                            >
                                EXPLORE NOW
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div className="w-[100vw] h-full relative flex flex-col justify-center items-center">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
                        <img src={DV} className="absolute top-0 left-0 w-full h-full object-cover z-0" alt="Background"/>
                        <div className="z-20 text-center">
                            <a target='_blank' href="https://github.com/nytrixis/Dhanvantari">
                                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br /> <br /><br />
                                <Button color='primary' className='mt-8 w-48'>View Project</Button>
                            </a>
                        </div>
                </div> */}


                <div className="w-[100vw] h-full relative flex flex-col md:flex-row sm:justify-center items-center p-4 lg:px-32 xl:px-64">
                    {/* <ModelCanvas className=''/> */}
                    <div className='w-full h-96' ref={ref}>
                        <Canvas camera={{fov:35,position:[0,0,6]}}>
                            <Penguin CanvasRef={ref}/>
                        </Canvas>
                    </div>
                    <img src={BUZZUPBG} className="absolute top-0 left-0 -z-20 w-full h-full object-cover"/>
                    <div className="w-full flex flex-col justify-center">
                    <h1 className='animate left font-black text-5xl md:text-5xl leading-tight'>That's all<span className='text-accent'>.</span></h1>
                    <h1 className='animate left delay-1 font-extrabold text-2xl md:text-5xl leading-tight'>More on my <span className='text-accent'>GitHub Page.</span></h1>
                    <br /><br /><br />

                    <div className="flex gap-4 mt-4">
                        <a href='https://github.com/nytrixis' target='_blank' className='bg-[#3B82F6] w-64 rounded-xl px-4 py-2.5 md:py-4 md:px-6 hover:scale-105 transition-transform active:scale-95 text-xs md:text-base grid place-content-center'>VISIT</a>
                    </div>
                    </div>
                </div>
                

                

            </div>
            </div>
        </section>
    </>
  )
}