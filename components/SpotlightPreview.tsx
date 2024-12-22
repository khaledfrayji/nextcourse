import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { BackgroundLinesDemo } from "./BackgroundLinesDemo";

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] relative pt-40 w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] overflow-hidden">

       <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="purple"/>
       <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="purple" />
     <BackgroundLinesDemo/>
    </div>
  );
}
