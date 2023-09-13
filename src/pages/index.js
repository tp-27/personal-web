import React from 'react';
import { Inter } from 'next/font/google';
import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube}from 'react-icons/ai';
import Image from 'next/image';
import profile_pic from '/public/profile_pic.jpg';
import { useVideoAutoPlayback } from '/src/hooks/useVideoAutoPlayback';
import { TabsDefault } from '@/components/Tabs';
import aedme1 from '/public/aedme_1.png';
import canoeNav from '/public/canoe-nav.png';
import molecule from '/public/molecule.png';
import { useState } from "react";



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
 
  const [parentRef, videoRef] = useVideoAutoPlayback({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  const slides = [
    "/public/aedme_1.png", 
  ]

  // FIX ME  - Import as component
  const aedData = [
    { 
        label: "What",
        content: `AEDMe is a web application that locates the nearest automated electronic defibrilator from your current location.`,
        imgURL: aedme1
    },
    {
        label: "Development",
        content: `content`,
        imgURL: ''
    },
    {
        label: "Why",
        content: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
        imgURL: ''
    },
    {
        label: "Demo",
        content: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
        imgURL: ''
        
    },
  ]

  const canoeNavData = [
    { 
        label: "What",
        content: "This application gamifies the mundance tasks of everyday life. It is to-do list that feels like a game you want to improve on and get better at.",
        imgURL: canoeNav
    },
    {
        label: "Development",
        content: `This was created with Java and SQL`,
        imgURL: ''
    },
    {
        label: "Why",
        content: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
        imgURL: ''
    },
    {
        label: "Demo",
        content: "Video",
        imgURL: ''
        
    },
  ]

  const moleculeData = [
    { 
        label: "What",
        content: "This application gamifies the mundance tasks of everyday life. It is to-do list that feels like a game you want to improve on and get better at.",
        imgURL: molecule
    },
    {
        label: "Development",
        content: `This was created with Java and SQL`,
        imgURL: ''
    },
    {
        label: "Why",
        content: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
        imgURL: ''
    },
    {
        label: "Demo",
        content: "Video",
        imgURL: ''
        
    },
  ]

  
  return (    
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Thomas Phan Portfolio</title>
        <link rel="icon" href="/favicon.ico" />                    
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <section className="min-h-screen px-10 md:px-20 lg:px-40">
            <nav className="py-10 mb-12 flex justify-between">  {/* py-10 is padding top/bottom */}
              <h1 className="text-xl text-teal-600 dark:text-white">Thomas Phan</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}className="cursor-pointer text-2xl fill-black dark:fill-white"/>
                </li>
                <li>
                  <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" 
                  href="#">Resume</a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10">
              {/* <h2 className="text-5xl py-2  font-medium md:text-6xl">Thomas Phan</h2> */}
              <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-5 overflow-hidden md:h-96 md:w-96">
                <img src="/profile_pic.jpg" alt="headshot" className="object-contain h-300 w-100"/>
                {/* <Image src={profile_pic} layout="fill" objectFit="cover"/> */}
              </div>
              <h3 className="text-2xl mt-20 md:text-3xl text-black dark:text-white">Software Developer</h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400">I'm a passionate and dedicated fourth-year student pursuing a Bachelor of Computing degree in Computer Science at the University of Guelph. I possess a keen interest in technology and am driven by the goal of creating innovative solutions. This drive is particularly evident in the rigor I apply to developing personal projects.</p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-500">
              <a href="https://www.linkedin.com/in/phanthomas/"><AiFillLinkedin/></a>
            </div>
        </section>
        <section className="px-10 md:px-20 lg:px-40 py-10">
          <div>
            <h3 className="text-3xl py-1 text-black dark:text-white">My story</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
            Beyond the classroom, I find solace and beauty in nature during the summers through canoe trips to Algonquin Park or Kawartha Lakes. When winter arrives, you'll spot me on the mountains (more like hills in Ontario) mindlessly snowboarding down freshly groomed slopes. Between these adventures, I'm often at my keyboard, diligently learning new technologies and languages to aid me in building my next personal project. Below, you'll find a glimpse of some of my recent projects.
            </p>
          </div>

          <h3  className="text-3xl py-1 text-black dark:text-white py-10">Portfolio</h3>   
        </section>

        <section className="bg-custom-one w-full min-h-screen">
          <div className="w-full min-h-screen text-white flex items-start justify-center bg-opacity-60 p-10 dark:text-white">
            <TabsDefault 
              tabData={aedData} // FIX ME - IMPORT AS COMPONENT 
            />
          </div>
        </section>

        <section className="bg-white w-full min-h-screen">  
          <div className="w-full min-h-screen text-black flex items-start justify-center bg-opacity-60 p-10 dark:text-white">
            <TabsDefault
              tabData={canoeNavData}
            />
          </div>
        </section>

        <section className="bg-gray-400 w-full min-h-screen">  
          <div className="w-full min-h-screen text-black flex items-start justify-center bg-opacity-60 p-10 dark:text-white">
            <TabsDefault
              tabData={moleculeData}
            />
          </div>
        </section>

      </main>
    </div>
  );
}
