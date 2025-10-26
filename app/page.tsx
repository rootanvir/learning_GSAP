import './globals.css';
import React, { FC } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from 'gsap/all';
import Nav from '../components/Nav'
gsap.registerPlugin(ScrollTrigger,SplitText);

interface Props {
  
}

const Page: FC<Props> = ({  }) => {
  return (
    <main>
      <Nav />
    </main>
  );
};

export default Page;