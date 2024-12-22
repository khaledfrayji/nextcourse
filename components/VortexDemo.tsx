import React from "react";
import { Vortex } from "./ui/vortex";

export function VortexDemo() {
  return (
    <div className=" h-[10rem] border border-gray-100 overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
         recent projects
        </h2>
       
      </Vortex>
    </div>
  );
}
