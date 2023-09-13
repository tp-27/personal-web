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
        imgURL: aedme1,
        videoURL: ''
    },
    {
        label: "Development",
        content: `The front-end user interface of this application was built with JavaScript, HTML/CSS. In the background, I used the BeautifulSoup4 Python library in order to scrape HTML content from university websites which contained information about where AEDs were located. Next, I used the Nominatim API with the addresses obtained and generated all of the corresponding coordinates. With the help of Google Maps API I was able to use the coordinates and along with HTML Geolocation to generate routes and directions from the user to an AED location. In order to find the distance between the user's location and the nearest AED I implemented the Haversine Formula which calculates the distance between two points on a sphere given their longitude and latitude distances. `,
        imgURL: '',
        videoURL: ''
    },
    {
        label: "Why",
        content: `After joining the student-led first response team at the University of Guelph and receiving my emergency medical responder certification I learned why AEDs were important and how to use one. Many of my friends who weren't on the team didn't know what an AED was given that there were so many all around campus. This notion led me to come up with the idea of AEDMe which serves as an informational platform for the awareness and usage of AEDs. This project allowed me to leverage my development skills in order deliver an application that would hopefully serve others on campus. `,
        imgURL: '',
        videoURL: ''
    },
    {
        label: "Demo",
        content: `Coming soon`,
        imgURL: '',
        videoURL: '/public/videos/aed_demo.mp4'
        
    },
  ]

  const canoeNavData = [
    { 
        label: "What",
        content: "CanoeNav is your virtual travel agent for the Ontario backcountry. It helps you to easily plan and book canoe trips.",
        imgURL: canoeNav,
        videoURL: ''
    },
    {
        label: "Development",
        content: `This is a project that I am currently building. I plan to utilize the Leaflet API in order to develop an interactive map where users can view campsites for a given Ontario provincial park by lake. Users will be able to create an account and login to the application. I will be using Firebase to handle authentification. The user information will be stored into an SQL database.`,
        imgURL: '',
        videoURL: ''
    },
    {
        label: "Why",
        content: `One of my favourite hobbies is backcountry camping. Since 2018, every summer I have gone on a week long portage at various Ontario parks. These trips bring me back to a pure headspace free of distraction from the faculties of modern society. I am grateful to be able to experience the beauty of backcountry camping. There are many components into planning a canoe trip, from tracking paddling distance to finding a route suiting to your experience level. I personally have never found an online resource that streamlines this experience and decided to build one myself in order to help others who are interested in trying backcountry camping. The preparation process can be intimidating and I hope this application can be a helping hand so that others can find tranquility and solace.  `,
        imgURL: '',
        videoURL: ''
    },
    {
        label: "Demo",
        content: "Coming soon",
        imgURL: '',
        videoURL: '/public/videos/aed_demo.mp4'
        
    },
  ]

  const moleculeData = [
    { 
        label: "What",
        content: "This application allows you to virtual interaction with a molecular model uploaded by you.",
        imgURL: molecule,
        videoURL: ''
    },
    {
        label: "Development",
        content: `This project was created using C, Python, JavaScript, HTML/CSS`,
        imgURL: '',
        videoURL: ''
    },
    {
        label: "Why",
        content: `This project was built as a corner stone project for a Software Development and Systems Integration course at the University of Guelph`,
        imgURL: '',
        videoURL: ''
    },
    {
        label: "Demo",
        content: "Coming soon",
        imgURL: '',
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
                  href="https://drive.google.com/file/d/1YV0lbtzitNe7RtgGSY77zD95C02Ejqoq/view?usp=sharing">Resume</a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10">
              {/* <h2 className="text-5xl py-2  font-medium md:text-6xl">Thomas Phan</h2> */}
              <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-5 overflow-hidden md:h-96 md:w-96">
                <div
                  className="h-full w-full bg-cover m-r-100"
                  style={{
                    backgroundImage: `url('/profile_pic.jpg')`,
                  }}
                />
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
              tabData={aedData}
            />
          </div>
        </section>

        <section className="bg-white w-full min-h-screen">  
          <div className="w-full min-h-screen text-black flex items-start justify-center bg-opacity-60 p-10 dark:text-black">
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
