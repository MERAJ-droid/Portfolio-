import { useEffect, useRef } from "react"
import { gsap } from "gsap";

export default function ProjectsList() {
    const Projects = [
        {
            sectionTitle: "Web Development Projects",
            data: [
                {
                    title: "DeFi",
                    hoverTitle: "DECENTRALIZED FINANCE APP",
                    subTitle: "ENABLING USERS TO LEND, BORROW AND TRADE CRYPTOCURRENCIES IN A SECURE AND TRANSPARENT, AND DECENTRALIZED MANNER.",
                    link: "https://github.com/MERAJ-droid/DeFi-App",
                },
                {
                    title: "SOCIALSPHERE",
                    hoverTitle: "DECENTRALIZED SOCIAL MEDIA APP",
                    subTitle: "AN INNOVATIVE SOCIAL MEDIA ECOSYSTEM THAT UTILIZES DECENTRALIZED TECHNOLOGY TO FOSTER GENUINE CONNECTIONS AND PROMOTE USER AUTONOMY OVER PERSONAL DATA..",
                    link: "https://github.com/MERAJ-droid/SocialSphere",
                },
                {
                    title: "WEATHERDEKHO",
                    hoverTitle: "WEATHER WEBAPP",
                    subTitle: "Real Time weather magic with corresponding background changes.",
                    link: "https://github.com/MERAJ-droid/WeatherDekho",
                },
                {
                    title: "WHEELSNDEALS",
                    hoverTitle: "E-COMMERCE WEBSITE",
                    subTitle: "E-COMMERCE WEBSITE FOR AUTOMOBILES.",
                    link: "https://github.com/MERAJ-droid/WheelsNdeals",
                },
                {
                    title: "STARFLIX",
                    hoverTitle: "ML PROJECT",
                    subTitle: "Exploring celestial formations through ML",
                    link: "https://github.com/MERAJ-droid/Starflix",
                },
                {
                    title: "PORTFOLIO SITE",
                    hoverTitle: "RECURSION",
                    subTitle: "A hub of all my skills and projects.",
                    link: "",
                },
                {
                    title: "MORE PROJECTS...",
                    hoverTitle: "GITHUB PAGE",
                    link: "https://github.com/MERAJ-droid/"
                },
            ]
        },
        
        
        
               
    ]


    return (
        <>
            {
                Projects.map((project,index) => {
                    return (
                        <section key={index} className="my-24">
                            <section className="container mx-auto p-4">
                                <h1 className="font-bold text-xl text-primary">{project.sectionTitle}</h1>
                            </section>
                            {
                                project.data.map((val,key) => {
                                    return (
                                        <Comp key={key} val={val}></Comp>
                                    )
                                })
                            }
                        </section>
                    )
                })
            }
        </>
    )
}

function Comp(props:{val:{
    title: string;
    hoverTitle: string;
    subTitle: string;
    notBlank?:boolean,
    link: string;
} | {
    title: string;
    hoverTitle: string;
    link: string;
    notBlank?:boolean,
    subTitle?: undefined;
}})
{
    const compRef = useRef<HTMLAnchorElement>(null);
    useEffect(()=>{
        let ctx = gsap.context(() => {
            gsap.from(
                compRef.current,{
                    yPercent:100,
                    opacity:0,
                    ease:"power4.out",
                    duration:1,
                    scrollTrigger:{
                        trigger:compRef.current,
                        start:"top 100%",
                        end:"bottom top",
                        // scrub:true,
                        // markers:true
                    }
                }
            )
        })
        return () => ctx.revert(); // cleanup! 
    },[])
    return(
        <a ref={compRef} href={props.val.link} target={props.val.notBlank?"":"_blank"} className="info-tile px-4 md:px-8 block overflow-clip group border-b-2 border-text/10 cursor-pointer relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-primary after:origin-bottom hover:after:origin-top after:-z-10 after:duration-500 after:transition-transform after:scale-y-0 hover:after:scale-y-100">
            <div className="container relative mx-auto flex justify-between items-center">
                <div className="h-full w-full relative">
                    <h1 className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter py-12 group-hover:-translate-y-full duration-500">{props.val.title}</h1>
                    <div className="absolute h-full top-0 left-0 flex flex-col justify-center group-hover:translate-y-0 translate-y-full duration-500">
                        <h1 className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter">{props.val.title}</h1>
                        <h1 className="text-lg md:text-2xl lg:text-3xl font-medium opacity-70">{props.val.hoverTitle}</h1>
                    </div>
                </div>
                <p className="text-text/70 w-3/5 lg:group-hover:opacity-70 lg:opacity-0 transition-opacity text-xs md:text-base">
                    {props.val.subTitle}
                </p>
            </div>
        </a>
    )
}