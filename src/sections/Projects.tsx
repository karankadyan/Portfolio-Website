import aspireai from "@/assets/images/aspireai.png";
import womenhealthcare from "@/assets/images/womenhealthcare.png";
import waley from "@/assets/images/waley.png";
import crops from "@/assets/images/crops.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
    {
        company: "Website",
        year: "2025",
        title: "AspireAI - AI powered career coach",
        results: [
            {title: "Provides Industry Insights"},
            {title: "Help in Interview Preparation"},
            {title: "Generate your Resume and Cover Letter"},
        ],
        link: "https://github.com/karankadyan/aspire-ai",
        image: aspireai,
    },
    {
        company: "Streamlit",
        year: "2025",
        title: "Women's Health Assistant",
        results: [
            {title: "Image-based PCOS Detection"},
            {title: "PCOS Detection using user information"},
            {title: "Diet Plan and Period Tracker"},
        ],
        link: "https://github.com/karankadyan/Women-Healthcare-Assistant",
        image: womenhealthcare,
    },
    {
        company: "Streamlit",
        year: "2024",
        title: "Waley - NLP HealthCare Bot",
        results: [
            {title: "Operates with Voice Commands"},
            {title: "Diagnose Disease within seconds"},
            {title: "Provide Treatment and Management Strategies"},
        ],
        link: "https://github.com/karankadyan/Soulilution-HealthCare-Bot",
        image: waley,
    },
    {
        company: "iOS App",
        year: "2024",
        title: "AI Crop Disease Detection System",
        results: [
            {title: "Analyze images of crops and identify potential diseases."},
            {title: "Provide Treatment and Management Strategies."},
            {title: "Helps in Financial management for crops."},
        ],
        link: "https://www.linkedin.com/in/karankadyan20/details/projects/",
        image: crops,
    },
];

export const ProjectsSection = () => {
    return (
        <section className="pb-16 lg:py-24" id="projects">
            <div className="container">
                <SectionHeader title={"Real-World Results"} eyebrow={"Featured Projects"}
                               description={"See how I transformed concepts into engaging digital experiences."}/>
                <div className="flex flex-col md:mt-20 mt-10 gap-20">
                    {portfolioProjects.map((project, projectIndex) => (
                        <Card key={project.title}
                              className="pt-8 px-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                              style={{
                                  top: `calc(64px + ${projectIndex * 40}px)`,
                              }}>
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                                    <div
                                        className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase gap-2 tracking-widest text-sm text-transparent bg-clip-text">
                                        <span>{project.company}</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                                    <hr className="border-t-2 border-white/5 mt-4"/>
                                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                        {project.results.map((result, index) => (
                                            <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                                                <CheckCircleIcon className="size-5 md:size-6"/>
                                                <span>{result.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href={project.link}>
                                        <button
                                            className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                                            <span>View Project</span>
                                            <ArrowUpRight className="size-4"/>
                                        </button>
                                    </a>
                                </div>
                                <div className="relative">
                                    <Image src={project.image} alt={project.title}
                                           className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
