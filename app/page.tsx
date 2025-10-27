import './globals.css';
import React, { FC } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from 'gsap/all';
import Nav from '../components/Nav'
import Hero from '../components/Hero'
gsap.registerPlugin(ScrollTrigger,SplitText);

interface Props {
  
}

const Page: FC<Props> = ({  }) => {
  return (
    <main>
      <Nav />
      <Hero />
      <div className='h-dvh bg-black'> </div>
    </main>
  );
};

export default Page;