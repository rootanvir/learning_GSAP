import React, { FC } from 'react';

interface Props {

}

const Hero: FC<Props> = ({ }) => {
    return (
        <section
            id="hero"
            className="relative h-screen w-full flex flex-col items-center justify-start bg-no-repeat bg-cover bg-center overflow-hidden noisy"
        >

            <img
                src="/images/hero-left-leaf.png"
                alt="left-leaf"
                className="absolute top-0 left-0 w-40 md:w-60 object-contain"
            />


            <img
                src="/images/hero-right-leaf.png"
                alt="right-leaf"
                className="absolute bottom-0 right-0 w-40 md:w-60 object-contain"
            />

            <h1 className="text-[80px] md:text-[140px] font-extrabold text-white tracking-widest mt-16">
                MOJITO
            </h1>

            <div className="absolute bottom-10 left-10 md:left-20">
                <p className="text-yellow-100 text-2xl md:text-4xl font-light leading-tight">
                    Sip the Spirit <br /> of summer
                </p>
            </div>
        </section>

    );
};

export default Hero;