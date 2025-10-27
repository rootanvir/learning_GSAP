'use client'
import { useGSAP } from '@gsap/react';
import React, { FC } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/dist/SplitText';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, SplitText);          



interface Props {

}

const Hero: FC<Props> = ({ }) => {
    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 50,
            duration: 1,
            ease: 'expo-out',
            stagger: .09
        });
        gsap.timeline({
            scrollTrigger:{
                trigger:'#hero',
                start  : 'top top',
                end    :'bottom top',
                scrub  :true,
            }
        }).to('.right-leaf',{y:200},0)
          .to('.left-leaf',{y:-200},0)

    },[]);
    return (
        <section
            id="hero"
            className="relative h-screen w-full flex flex-col items-center justify-start bg-no-repeat bg-cover bg-center overflow-hidden noisy"
        >
            <img
                src="/images/hero-left-leaf.png"
                alt="left-leaf"
                className="left-leaf absolute top-0 left-0 w-40 md:w-60 object-contain"
            />


            <img
                src="/images/hero-right-leaf.png"
                alt="right-leaf"
                className="right-leaf absolute bottom-0 right-0 w-40 md:w-60 object-contain"
            />

            <h1 className="title text-[80px] font-modern md:text-[140px] font-extrabold text-white tracking-widest mt-16">

                MOJITO
            </h1>


            <div className="absolute bottom-10 left-10 md:left-20">
                <p className="subtitle font-modern text-yellow-100 text-2xl md:text-4xl font-light leading-tight">
                    Sip the Spirit <br /> of summer
                </p>
            </div>


            <div className="absolute bottom-10 right-10 md:right-20 text-right">
                <p className="text-white font-mono md:text-lg">
                    Lorem ipsum dolor sit, amet consectetur  adipisicing elit. <br />Repudiandae, sapiente debitis voluptatem voluptatibus <br /> voluptatum tempore.
                </p>
                <a
                    href="#cocktails"
                    className="mt-2 inline-block text-indigo-400 hover:text-indigo-300 transition-colors duration-200 font-medium"
                >
                    View Cocktails
                </a>
            </div>
        </section>

    );
};

export default Hero;