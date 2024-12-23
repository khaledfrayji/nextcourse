"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white fixed backdrop-blur-lg top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center p-6 md:px-12">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">
            K<span className="text-purple-300">F</span>
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <Link href={"/"} className="hover:text-purple-300 transition">
            Home
          </Link>
          <Link href={"#about"} className="hover:text-purple-300 transition">
            About
          </Link>
          <Link href={"#projects"} className="hover:text-purple-300 transition">
            Projects
          </Link>
          <Link href={"#contact"} className="hover:text-purple-300 transition">
            Contact
          </Link>
        </div>

        {/* Burger Menu Icon */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <IconX className="h-8 w-8 text-white" />
          ) : (
            <IconMenu2 className="h-8 w-8 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-0 bg-black bg-opacity-90 backdrop-blur-lg transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 py-16">
          <Link
            href={"/"}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-medium hover:text-purple-300 transition"
          >
            Home
          </Link>
          <Link
            href={"#about"}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-medium hover:text-purple-300 transition"
          >
            About
          </Link>
          <Link
            href={"#projects"}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-medium hover:text-purple-300 transition"
          >
            Projects
          </Link>
          <Link
            href={"#contact"}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-medium hover:text-purple-300 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
