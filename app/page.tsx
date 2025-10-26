import './globals.css';
import React, { FC } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger,SplitText);

interface Props {
  
}

const Page: FC<Props> = ({  }) => {
  return (
    <div className='flex justify-center'>
      <h1 className='text-3xl text-indigo-300'>
          Hello GSAP
      </h1>
    </div>
  );
};

export default Page;