"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockDemo() {
  const code = `const Experience = () => {

{/* Hello, this is khaled enjoy :) */}

return ( 
<div className="p-4 border rounded-lg">
  <h1>Google Developer Groups</h1>
  <p>
  <strong>Role:</strong> Member of the Web Development Team
  </p>
  <p className="mb-2">
  <strong>Highlight:</strong> Organized workshops for students to build web portfolios and explore coding beyond the basics.
  </p>

  <h1 className="text-2xl font-bold mt-6 mb-4">Workshops & Mentorship</h1>
  <p className="mb-2">
  <strong>Focus:</strong> Live coding sessions with Tailwind CSS and React, emphasizing utility classes and mapping techniques.
  </p>
  <p className="mb-2">
  <strong>Outcome:</strong> Empowered students to create professional portfolios with modern tools.
  </p>
      
  <h1 className="text-2xl font-bold mt-6 mb-4">Web Developer Freelancer</h1>

  <p className="mb-2">
  <strong>Collaborations:</strong> Worked closely with clients to transform their vision into responsive, user-centric designs.
  </p>
            
  <p className="mb-2">
  <strong>Achievements:</strong> Consistently exceeded client expectations, improving website performance and user engagement by over 30%.
  </p>

</div>
        );
      };
      `;

  return (
    <div className="max-w-3xl p-4 mx-auto w-full">
      <h1
        className="text-center uppercase font-bold text-white pt-10 mt-30 mb-20 text-4xl lg:text-6xl"
        style={{ fontFamily: '"Tajawal", "Montserrat", sans-serif' }}
      >
        Work <span className="text-purple-300">Experience</span>
      </h1>
      <CodeBlock
        language="jsx"
        filename="Khaled's Experience.tsx"
        highlightLines={[3,7, 15, 23]}
        code={code}
      />
    </div>
  );
}
