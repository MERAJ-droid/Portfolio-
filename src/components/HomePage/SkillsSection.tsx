import { RefObject, useRef } from "react"
import useIntersectionObserver from "../../hooks/useInterSectionObsever";

export function SkillsSection()
{
    return (
        <section className="my-24">
            <h1 className="container px-8 mx-auto font-bold text-primary text-3xl mb-8">SKILLS</h1>
            <div className="flex container mx-auto px-8 gap-4 justify-center items-start flex-wrap">
                {
                    [
                        {
                            title:"Frontend Development",
                            fields:{
                                "HTML":.95,
                                "CSS":.95,  
                                "Javascript":.95,
                                "Typescript":.9,
                                "React":.9,
                                "TailwindCSS":.9,
                            }
                        },
                        {
                            title:"Backend Development",
                            fields:{
                                "NODEJS":.95,
                                "EXPRESSJS":.95,
                                "Python":.9,
                                "PHP":.75,
                                "REST APIs":.9,
                            }
                        },
                        {
                            title:"Programming Languages",
                            fields:{
                                "C++":.95,
                                "Python":.9,
                                "Javascript":.95,
                                "Typescript":.9,
                                "Java":.8,
                            }
                        },
                        {
                            title:"AI/ML & Data Science",
                            fields:{
                                "TensorFlow":.85,
                                "PyTorch":.8,
                                "OpenCV":.85,
                                "Scikit-learn":.85,
                                "YOLO":.8,
                                "HAAR Cascades":.75,
                            }
                        },
                        {
                            title:"Data Analysis",
                            fields:{
                                "Pandas":.9,
                                "NumPy":.9,
                                "Matplotlib":.85,
                                "Jupyter":.9,
                                "Data Preprocessing":.85,
                            }
                        },
                        {
                            title:"Database & Cloud",
                            fields:{
                                "MongoDB":.9,
                                "MySQL":.85,
                                "Firebase":.8,
                                "Database Design":.85,
                            }
                        },
                        {
                            title:"Development Tools",
                            fields:{
                                "Git | Github":.95,
                                "Docker":.8,
                                "Postman":.9,
                                "VS Code":.95,
                                "Linux":.8,
                            }
                        },
                        {
                            title:"UI/UX & Design",
                            fields:{
                                "Figma":.85,
                                "Responsive Design":.9,
                                "User Experience":.8,
                                "Prototyping":.8,
                            }
                        }
                        
                    ].map((category,index)=>{
                        return(
                            <SkillCard key={index} title={category.title} fields={category.fields}/>
                        )
                    })
                }
            </div>
        </section>
    )
}
function SkillCard(props:{title:string,fields:{[key:string]:number|undefined}})
{
    const cardRef = useRef<HTMLDivElement>(null);
    return(
        <div ref={cardRef} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] xl:w-[calc(25%-0.75rem)] md:p-4">
            <h1 className="font-bold text-2xl xl:text-3xl mb-4 text-center lg:text-left">{props.title}</h1>
            <div className="flex-col flex gap-2 mt-4">
                {
                    Object.keys(props.fields).map((field,index)=>{
                        return(
                            <div key={index} className="bg-primary/50 rounded-lg relative p-3 md:p-4 duration-300 hover:scale-[1.02] group">
                                <h1 className="z-10 relative font-bold opacity-90 hover:opacity-100 duration-300 uppercase text-sm md:text-base">{field}</h1>
                                <SkillFill style={{"transitionDelay":`${index}00ms`}} card={cardRef} field={field} fields={props.fields}></SkillFill>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
function SkillFill(props:{fields:{[key:string]:number|undefined},field:string,card:RefObject<HTMLDivElement>,style:{[key:string]:string}})
{
    const fillRef = useRef<HTMLDivElement>(null);

    const isIntersecting = useIntersectionObserver(props.card,{threshold:.2});

    return(
        <div ref={fillRef} className={`fill-ref-class h-full absolute left-0 top-0 bg-primary rounded-lg origin-left duration-1000 ${isIntersecting?"scale-x-100":"scale-x-0"} flex items-center justify-end px-3 md:px-4`} style={{...props.style,width:props.fields[props.field]! * 100 + "%"}}>
            <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-tr from-primary to-accent duration-300 opacity-0 group-hover:opacity-100 rounded-lg"></div>
            <div className="relative z-10 hidden md:block text-sm">{(props.fields[props.field]!*100).toFixed(0)}%</div>
        </div>
    )
}
