import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

const AnimatedImage = ({ imgMatch, i }) => {
    const frameRef = useRef(null);
    const [showImage, setShowImage] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // handles delayed unmount

    const handleEnter = () => {
        setIsVisible(true); // mount image
        setShowImage(true); // trigger animation in
    };

    const handleLeaveImage = () => {
        setShowImage(false); // trigger animation out
        gsap.to(frameRef.current, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out'
        });
    };

    const handleMouseMove = (e) => {
        const el = frameRef.current;
        if (!el || !showImage) return;

        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 25;
        const rotateY = ((x - centerX) / centerX) * -25;

        gsap.to(el, {
            rotateX,
            rotateY,
            scale: 1.02,
            transformPerspective: 800,
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    useEffect(() => {
        const el = frameRef.current;

        if (showImage && el) {
            gsap.fromTo(
                el,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'back.out(1.7)'
                }
            );
        }

        if (!showImage && el) {
            gsap.to(el, {
                scale: 0,
                opacity: 0,
                duration: 0.4,
                ease: 'power2.in',
                onComplete: () => setIsVisible(false)
            });
        }
    }, [showImage]);

    return (
        <span
            key={i}
            className="animated-word relative z-10 inline-block overflow-visible"
        >
            {/* Black square trigger */}
            <span
                className="pulse-scale animated-word block h-8 w-8 cursor-pointer rounded-md bg-black dark:bg-white"
                onMouseEnter={handleEnter}
            />

            {/* Image appears when hovering the square */}
            {isVisible && (
                <div
                    className="pointer-events-none absolute top-0 left-0 z-50 flex items-center justify-center"
                    style={{
                        transform: 'translate(-50%, -50%)',
                        width: '240px',
                        height: '240px'
                    }}
                >
                    <img
                        ref={frameRef}
                        src={`img/${imgMatch[1]}`}
                        alt=""
                        onMouseLeave={handleLeaveImage}
                        onMouseMove={handleMouseMove}
                        className="pointer-events-auto rounded-lg border border-black object-cover"
                        style={{
                            width: '240px',
                            height: '240px',
                            transformOrigin: 'center',
                            transformStyle: 'preserve-3d',
                            backfaceVisibility: 'hidden',
                            willChange: 'transform'
                        }}
                    />
                </div>
            )}
        </span>
    );
};

export default AnimatedImage;
