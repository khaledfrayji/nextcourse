import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b 
  from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white 
  text-4xl lg:text-7xl py-10 
  relative z-20 font-bold tracking-tight leading-relaxed"
        style={{ fontFamily: '"Tajawal", "Montserrat", sans-serif' }}
      >
       <span className="text-purple-300"> خالد </span>فريجي
        <br />
        <span className="uppercase">Khaled <span className="text-purple-300">Frayji</span></span>
      </h2>

      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Only when it is dark enough, can you see the stars, guiding you towards
        your true potential.
      </p>
      <Link href={'#about'}>
      <IoIosArrowDown size={40} color="white" className="my-20 animated-arrow" />
      </Link>
     
    </BackgroundLines>
  );
}
