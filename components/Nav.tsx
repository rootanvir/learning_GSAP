"use client";
import React, { FC } from "react";
import { navLinks } from "../constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Nav: FC = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#ffffff",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
        
      }
    );
  });

  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-white shadow-md fixed top-0 left-0 z-50 text-gray-800">
      <a href="#home" className="flex items-center gap-2">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-10 h-10 object-contain"
        />
        <p className="text-xl font-semibold text-gray-300">Velcet pour</p>
      </a>

      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="text-gray-300 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
