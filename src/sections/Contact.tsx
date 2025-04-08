import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from '@/assets/images/grain.jpg';
import SectionHeader from "@/components/SectionHeader";

export const ContactSection = () => {
    return (
        <section id="contact">
            <div className="py-16 pt-12 lg:pd-24 lg:pt-20 z-0">
                <div className="container">
                    <SectionHeader title={" "} eyebrow={"Connect with me "} description={""}/>
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
                        <div className="absolute inset-0 opacity-5 -z-10"
                             style={{backgroundImage: `url(${grainImage.src})`}}/>
                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center w-3/2">
                            <div>
                                <h2 className="font-serif text-2xl">
                                    Let&apos;s Collaborate!
                                </h2>
                                <p className="text-sm mt-2 md:text-base">
                                    Have a job opportunity or an exciting project? Feel free to reach out via email, and let&apos;s discuss how we can work together.
                                </p>
                            </div>
                            <a href="mailto:karankadyan20@gmail.com">
                                <button
                                    className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                                    <span className="font-semibold">
                                        Contact Me
                                    </span>
                                    <ArrowUpRight size="4"/>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
