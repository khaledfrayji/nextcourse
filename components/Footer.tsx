import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center">
      <h1
        className="text-center uppercase font-bold text-white md:mt-30 text-4xl max-w-[55vw] lg:text-6xl"
        style={{ fontFamily: '"Tajawal", "Montserrat", sans-serif' }}
      >
        Ready to level up your{" "}
        <span className="text-purple-300">digital presence?</span>
      </h1>
      <h4 className="text-white py-10 px-10 font-sans text-center  ">
        Hit me up, and let’s chat about how I can help you crush your goals!
      </h4>
      <Link href={"mailto:khaledfrayji7@gmail.com"}>
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Let's get in touch
          </div>
        </button>
      </Link>
      <div className="flex gap-5 justify-center items-center py-10">
        <Link href={"https://github.com/khaledfrayji"}><Image src={"/git.svg"} alt="github" width={40} height={40}/></Link>
        <Link href={"https://instagram.com/khaled.frayji"}><Image src={"/insta.svg"} alt="instagram" width={40} height={40}/></Link>
        <Link href={"https://www.linkedin.com/in/khaledfrayji"}><Image src={"/link.svg"} alt="linkedin" width={40} height={40}/></Link>
      </div>
      <h6 className="text-white font-sans py-5 text-sm">Copyright &copy; 2025 Khaled Frayji</h6>
    </footer>
  );
};

export default Footer;
