import soulilution from "@/assets/images/soulilution.png";
import csrbox from "@/assets/images/csrbox.png";
import imarticus from "@/assets/images/imarticus.png";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import {Fragment} from "react";

const experiences = [
    {
        name: "Deep Learning Intern",
        position: "Soulilution IT Services (P) Ltd.",
        text: "I developed a machine learning model leveraging Gemini AI to intelligently reformat text for a job portal website. This model enhances job postings by optimizing their structure and readability, ensuring a more polished and professional presentation. By applying my skills in AI and text processing, I contributed to improving the overall user experience and engagement on the platform.",
        avatar: soulilution,
    },
    {
        name: "Data Analyst Intern",
        position: "IBM-CSRBOX",
        text: "I developed a water quality detection model that aligns with the Sustainable Development Goals (SDG). This project not only analyzes water quality but also generates comprehensive reports using an integrated Exploratory Data Analysis (EDA) module. To enhance accessibility and usability, I implemented a sleek and interactive Streamlit interface, providing users with clear and insightful visualizations.",
        avatar: csrbox,
    },
    {
        name: "AI & ML Intern",
        position: "Imarticus Learning Pvt Ltd",
        text: "During my internship training, I worked extensively with Power BI and provided technical support to my teammates while consistently being a top performer. I developed multiple machine learning models, including those for heart disease detection, breast cancer prediction, and rainfall prediction. Additionally, I expanded my expertise in machine learning, MySQL, and various other technologies, strengthening my analytical and problem-solving skills.",
        avatar: imarticus,
    },
];

export const ExperiencesSection = () => {
    return (
        <div className="py-16 lg:py-24 ">
            <div className="container">
                <SectionHeader title={"Where I Have Worked Before"} eyebrow={"Experience"}
                               description={"Just dont take my word for it. See from where I have grown my skills and experience."}/>
                <div
                    className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
                    <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
                        {[...new Array(2)].fill(0).map((_, idx) => (
                            <Fragment key={idx}>
                                {experiences.map((experience) => (
                                    <Card key={experience.name}
                                          className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                                        <div className="flex gap-4 items-center ">
                                            <div
                                                className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                                <Image src={experience.avatar} alt={experience.name}
                                                       className="max-h-full rounded-full"/>
                                            </div>
                                            <div>
                                                <div className="font-semibold">{experience.name}</div>
                                                <div className="text-sm text-white/40">{experience.position}</div>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-sm md:mt-6 md:text-base">{experience.text}</p>
                                    </Card>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
