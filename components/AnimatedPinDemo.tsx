"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { CiLink } from "react-icons/ci";
const data = [
  {
    title: "EduConnect",
    description: "A platform for connecting educators and learners.",
    image: "/educonnect.png",
    link: "https://kf-educonnect.netlify.app/",
    iconLists: ["/react.webp", "/tail.svg", "/ts.svg"], // Replace these icons with the tech stack you used
  },
  {
    title: "Dental Website",
    description: "A modern and responsive website for dental services.",
    image: "/smiley.png",
    link: "https://kf-smiley.netlify.app/",
    iconLists: ["/react.webp", "/tail.svg", "/js.webp","/motion.webp"], 
  },
  {
    title: "Campaign Website",
    description: "A website to manage and promote campaigns.",
    image: "/camp.png",
    link: "https://kf-camp.netlify.app/",
    iconLists: ["/react.webp", "/tail.svg", "/js.webp","/figma.png"], 
  },
  {
    title: "Weather Website",
    description: "A weather forecasting website with real-time updates.",
    image: "/weather.png",
    link: "https://kf-weather.netlify.app/",
    iconLists: ["/react.webp", "/tail.svg", "/ts.svg"], 
  },
];


export function AnimatedPinDemo() {
  return (
    <>
     
      <div className="flex flex-wrap  items-center justify-center p-10 gap-16 mt-10">
        {data.map((element, index) => (
          <PinContainer key={index} title={element.title} href={element.link}>
            <div className="flex basis-full flex-col tracking-tight p-4  rounded text-slate-100/50 sm:basis-1/2 w-[20rem]">
              <img
                src={element.image}
                alt={element.title}
                className="rounded mb-3  transform rotate-[5deg] w-full"
              />
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 line-clamp-1">
                {element.title}
              </h3>
              <div className="text-base pb-8 font-normal line-clamp-1">
                <span className="text-gray-300 ">{element.description}</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {element.iconLists.map((icon, index) => (
                    <img
                    key={index}
                      src={icon}
                      alt={`icon${index}`}
                      className="border border-white/[0.2] rounded-full lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center"
                    />
                  ))}
                </div>
                <CiLink size={30} />
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </>
  );
}
