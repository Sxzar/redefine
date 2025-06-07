import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        });
        clipAnimation.fromTo(
            '.mask-clip-path',
            {
                clipPath: 'polygon(12% 0, 72% 18%, 85% 90%, 12% 100%)',
                borderRadius: '2rem'
            },
            {
                width: '100vw',
                height: '100vh',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                borderRadius: '0'
            }
        );
    });
    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mt-36 mb-8 flex flex-col items-center gap-5">
                <h2 className="font-general text-sm uppercase md:text-[10px]">
                    Welcome to Zentry
                </h2>
                <AnimatedTitle
                    title="Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared adventure"
                    containerClass="mt-5 !text-black text-center"
                />

                <div className="about-subtext">
                    <p>
                        The Game of Games begins - your life, now an epic MMORPG
                    </p>
                    <p>
                        Zentry unites every player from countless games and
                        platforms
                    </p>
                </div>
            </div>
            <div className="relative h-dvh w-screen" id="clip">
                <img
                    src="/img/stones.webp"
                    alt="stones"
                    className="float absolute z-50 hidden md:block"
                />
                <div className="mask-clip-path about-image">
                    <img
                        src="/img/about.webp"
                        alt="Background"
                        className="absolute top-0 left-0 size-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
