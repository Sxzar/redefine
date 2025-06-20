import React, { useRef, useState, useEffect } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef(null);

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const handleMiniVideoClick = () => {
        setHasClicked(true);

        setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
    };

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };

    useEffect(() => {
        if (isMobile) {
            setIsLoading(false);
        } else if (loadedVideos >= 3) {
            const timeout = setTimeout(() => {
                setIsLoading(false);
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [loadedVideos, isMobile]);

    const getVideoSrc = (index) => {
        const base = isMobile ? 'videos/mobile/hero-' : 'videos/hero-';
        return `${base}${index}.mp4`;
    };

    useGSAP(
        () => {
            if (hasClicked) {
                gsap.set('#next-video', { opacity: 1, pointerEvents: 'auto' });
                gsap.to('#next-video', {
                    transformOrigin: 'center center',
                    scale: 1,
                    width: '100%',
                    height: '100%',
                    duration: 1,
                    ease: 'power1.inOut',
                    onStart: () => nextVideoRef.current.play()
                });
                gsap.from('#current-video', {
                    transformOrigin: 'center center',
                    scale: 0,
                    duration: 1.5,
                    ease: 'power1.inOut'
                });
            }
        },
        { dependencies: [currentIndex], revertOnUpdate: true }
    );

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderRadius: '0 0 40% 10%'
        });
        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true
            }
        });
    });

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            {isLoading && !isMobile && (
                <div className="pointer-events-none absolute z-[100] flex h-dvh w-screen items-center justify-center bg-violet-50 transition-opacity duration-500">
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            )}
            <div
                id="video-frame"
                className="bg-blue-75 relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
            >
                <div>
                    <div className="absolute-center position-absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div
                            onClick={handleMiniVideoClick}
                            className="transtion-all origin-center scale-50 opacity-0 duration-500 ease-in hover:scale-100 hover:opacity-100"
                        >
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(upcomingVideoIndex)}
                                loop
                                muted
                                playsInline
                                poster={
                                    isMobile
                                        ? `/videos/mobile/hero-${currentIndex}.jpg`
                                        : undefined
                                }
                                id="current-video"
                                className="size-64 origin-center scale-150 object-cover object-center"
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>
                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        playsInline
                        poster={
                            isMobile
                                ? `/videos/mobile/hero-${currentIndex}.jpg`
                                : undefined
                        }
                        id="next-video"
                        className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />
                    <video
                        src={getVideoSrc(currentIndex)}
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={
                            isMobile
                                ? `/videos/mobile/hero-${currentIndex}.jpg`
                                : undefined
                        }
                        className="absolute top-0 left-0 size-full object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />
                </div>
                <h1 className="special-font hero-heading text-blue-75 absolute right-5 bottom-5 z-40">
                    G<b>a</b>ming
                </h1>
                <div className="left0 absolute top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="special-font hero-heading text-blue-100">
                            redefi<b>n</b>e
                        </h1>
                        <p className="mx-w-64 font-robert-regular mb-5 text-blue-100">
                            Enter the Metagame Layer <br /> Unleash the Play
                            Economy
                        </p>
                        <Button
                            id="watch-trailer"
                            leftIcon={<TiLocationArrow />}
                            containerClass="bg-yellow-300 flex-center gap-1"
                        >
                            Watch Trailer
                        </Button>
                    </div>
                </div>
            </div>
            <span className="special-font hero-heading absolute right-5 bottom-5 text-black">
                G<b>a</b>ming
            </span>
        </div>
    );
};

export default Hero;
