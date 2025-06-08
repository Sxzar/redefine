import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const Achivements = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        const trigger = ScrollTrigger.create({
            trigger: el,
            start: '-100px center',
            end: 'bottom center',
            onEnter: () => {
                document.documentElement.classList.add('dark');
            },
            onLeave: () => {
                document.documentElement.classList.remove('dark');
            },
            onEnterBack: () => {
                document.documentElement.classList.add('dark');
            },
            onLeaveBack: () => {
                document.documentElement.classList.remove('dark');
            }
        });

        return () => {
            trigger.kill();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="container mx-auto flex flex-col items-center justify-center px-3 py-16 md:px-10"
        >
            <p className="font-general mb-10 text-[10px] uppercase">
                our universe in a nutshell
            </p>
            <AnimatedTitle
                title="ze<b>n</b>try at a glan<b>c</b>e"
                containerClass="special-font !text-black dark:!text-white"
            />

            <div className="mt-10 grid gap-7 md:grid-cols-2">
                {/* First Col */}
                <div className="flex flex-col items-end gap-7">
                    <div className="border-hsla relative w-2/3 rounded-xl md:mt-[200px]">
                        <div className="absolute top-10 left-10 z-10">
                            <p class="font-general text-[10px] uppercase">
                                products
                            </p>
                            <h3 className="special-font text-8xl font-black">
                                4<b>+</b>
                            </h3>
                        </div>
                        <video
                            src="/videos/card-1.webm"
                            loop
                            muted
                            autoPlay
                            playsInline
                        />
                    </div>

                    <div className="group relative h-64 w-full max-w-64 overflow-hidden rounded-xl bg-yellow-300">
                        <p className="special-font absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -skew-12 text-[10rem] font-black text-black transition-transform duration-700 ease-in-out group-hover:skew-x-0 group-hover:skew-y-0">
                            <b>30+</b>
                        </p>
                        <p class="font-general absolute right-0 bottom-0 p-4 text-[10px] text-black uppercase">
                            partners
                        </p>
                    </div>

                    <div className="relative ml-24 w-2/3 rounded-xl bg-violet-300 p-4">
                        <p className="font-general text-[10px] text-black uppercase">
                            Treasury
                        </p>
                        <h3 className="special-font text-6xl font-black text-black">
                            <b>140M+</b>
                        </h3>
                        <video
                            src="/videos/card-5.webm"
                            loop
                            muted
                            autoPlay
                            playsInline
                            className="mx-auto max-w-64"
                        />
                        <img src="/img/card5-bottom.svg" alt="statistics" />
                    </div>
                </div>

                {/* Second Col */}
                <div className="flex flex-col gap-7">
                    <div className="group relative size-fit max-w-100 overflow-hidden rounded-xl bg-violet-300">
                        <p class="font-general p-4 text-[10px] uppercase">
                            residents
                        </p>

                        <p className="special-font absolute top-6 left-1/2 -translate-x-1/2 -skew-12 text-[10rem] font-black transition-transform duration-700 ease-in-out group-hover:skew-x-0 group-hover:skew-y-0">
                            <b>500K+</b>
                        </p>

                        <img
                            src="/img/gallery-1.webp"
                            alt=""
                            className="relative z-10"
                        />
                    </div>

                    <div className="border-hsla max-w-64 rounded-xl p-4">
                        <h3 className="special-font font-zentry text-4xl uppercase">
                            w<b>o</b>rld-class
                            <br />b<b>a</b>ckers
                        </h3>
                        <div className="mt-4 flex justify-end leading-[10px]">
                            <span className="font-general text-[8px] uppercase">
                                coinbase ventures <br />
                                yzi labs <br />
                                spartan <br />
                                longhash <br />
                                pantera capital <br />
                                animoca brands <br />
                                defiance capital <br />
                                play ventures <br />
                                skyvision capital <br />
                                vessel capital <br />
                                arche fund <br />
                                synergis
                            </span>
                        </div>
                    </div>
                    <div className="group relative min-h-64 max-w-100 rounded-xl bg-white p-4">
                        <p className="font-general text-[10px] text-black uppercase">
                            Revenue generated <br /> 2024
                        </p>
                        <p className="special-font font-zentry absolute bottom-0 left-1/2 -translate-x-1/2 -skew-12 text-[10rem] font-black text-black transition-transform duration-700 ease-in-out group-hover:skew-x-0 group-hover:skew-y-0">
                            40<b>M</b>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achivements;
