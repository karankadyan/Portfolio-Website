"use client";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import Canva from "@/assets/icons/canva.svg"
import Openicon from "@/assets/icons/chatgpt.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import Cpp from "@/assets/icons/cpp.svg"
import Css3 from "@/assets/icons/css3.svg"
import Figma from "@/assets/icons/figma.svg"
import Firebase from "@/assets/icons/firebase.svg"
import Git from "@/assets/icons/git.svg"
import Github from "@/assets/icons/github.svg"
import Html5 from "@/assets/icons/html5.svg"
import Jetbrains from "@/assets/icons/jetbrains.svg"
import Jupyter from "@/assets/icons/jupyter.svg"
import Kaggle from "@/assets/icons/kaggle.svg"
import Linux from "@/assets/icons/linux.svg"
import Macos from "@/assets/icons/macos.svg"
import Mysql from "@/assets/icons/mysql.svg"
import Npmicon from "@/assets/icons/npm.svg"
import Python from "@/assets/icons/python.svg"
import Pytorch from "@/assets/icons/pytorch.svg"
import React from "@/assets/icons/react.svg"
import Squarejs from '@/assets/icons/square-js.svg'
import Tensorflow from "@/assets/icons/tensorflow.svg"
import Vsc from "@/assets/icons/vsc.svg"
import ML from "@/assets/icons/ml.svg"
import Windows from "@/assets/icons/windows.svg"
import Xcode from "@/assets/icons/xcode.svg"
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import {motion } from "framer-motion";
import {useRef} from "react";
import sectionHeader from "@/components/SectionHeader";

const toolboxItems = [
    {
        title: "ML",
        iconType: ML
    }, {
        title: "Canva",
        iconType: Canva
    },
    {
        title: "ChatGPT",
        iconType: Openicon
    },
    {
        title: "Chrome",
        iconType: ChromeIcon
    }, {
        title: "Python",
        iconType: Python
    },
    {
        title: "Tensorflow",
        iconType: Tensorflow
    }, {
        title: "Pytorch",
        iconType: Pytorch
    }, {
        title: "CPP",
        iconType: Cpp
    }, {
        title: "React",
        iconType: React
    }, {
        title: "NVM",
        iconType: Npmicon
    }, {
        title: "MySQL",
        iconType: Mysql
    }, {
        title: "HTML5",
        iconType: Html5
    }, {
        title: "CSS3",
        iconType: Css3
    }, {
        title: "JS",
        iconType: Squarejs
    }, {
        title: "Figma",
        iconType: Figma
    }, {
        title: "Firebase",
        iconType: Firebase
    }, {
        title: "Git",
        iconType: Git
    }, {
        title: "Github",
        iconType: Github
    }, {
        title: "Xcode",
        iconType: Xcode
    }, {
        title: "Visual Studio Code",
        iconType: Vsc
    }, {
        title: "Jetbrains",
        iconType: Jetbrains
    }, {
        title: "Jupyter",
        iconType: Jupyter
    }, {
        title: "Kaggle",
        iconType: Kaggle
    }, {
        title: "Linux",
        iconType: Linux
    }, {
        title: "MacOS",
        iconType: Macos
    }, {
        title: "Windows",
        iconType: Windows
    },
]

const hobbies = [
    {
        title: "Gaming",
        emoji: "🎮",
        left: "5%",
        top: "5%"
    },
    {
        title: "Music",
        emoji: "🎧",
        left: "50%",
        top: "5%"
    },
    {
        title: "Reading",
        emoji: "📚",
        left: "70%",
        top: "45%"
    },
    {
        title: "Photography",
        emoji: "📷",
        left: "35%",
        top: "40%"
    },
    {
        title: "Fitness",
        emoji: "🏋🏻‍♂️",
        left: "10%",
        top: "35%"
    },
    {
        title: "Painting",
        emoji: "🎨",
        left: "45%",
        top: "70%"
    }, {
        title: "Movies",
        emoji: "🎥",
        left: "5%",
        top: "65%"
    },
]

export const AboutSection = () => {
    const constrainRef = useRef(null);
    return (
        <section id="about">
            <div className="pb-20 lg:py-28">
                <div className="container">
                    <SectionHeader title={"About Me"} eyebrow={"A Glimpse Into My World"}
                                   description={"Learn more about who I am, what I do, and what inspires me."}/>
                    <div className="mt-20 flex flex-col gap-8">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
                            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                                <CardHeader title={"My Reads"} description={"Explore the books shaping my perspective"}/>
                                <div className="w-40 mx-auto mt-2 md:mt-0">
                                    <Image src={bookImage} alt={"BookCover"}/>
                                </div>
                            </Card>
                            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                                <CardHeader title={"My Toolbox"}
                                            description={"Explore the technology and tools I use to craft exception digital experiences."}
                                            className=""/>
                                <ToolboxItems items={toolboxItems} className=""
                                              itemsWrapperClassName="animate-move-left [animation-duration:45s]"/>
                                <ToolboxItems items={toolboxItems} className="mt-6 "
                                              itemsWrapperClassName="animate-move-right [animation-duration:45s]"/>
                            </Card>
                            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
                                <div>
                                    <CardHeader title={"Beyond the Code"}
                                                description={"Explore my interest and hobbies beyond the digital realm"}
                                                className=""/>
                                </div>
                                <div className="relative flex-1" ref={constrainRef}>
                                    {hobbies.map((hobby) => (
                                        <motion.div key={hobby.title}
                                                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                                                    style={{
                                                        left: hobby.left,
                                                        top: hobby.top,
                                                    }} drag
                                                    dragConstraints={constrainRef}
                                        >
                                            <span className="font-medium text-gray-900">{hobby.title}</span>
                                            <span>{hobby.emoji}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </Card>
                            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                                <Image src={mapImage} alt={"Map"} className="h-full w-full object-cover"/>
                                <div
                                    className="absolute top-1/2 left-1/2 -translate-x-3/5 -translate-y-3/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 animate-ping [animation-duration:2s]"/>
                                    <Image src={smileMemoji} alt={"smiling emoji"} className="size-20"/>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
