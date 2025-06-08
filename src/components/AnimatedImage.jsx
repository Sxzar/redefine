import { useRef, useState } from 'react';
import gsap from 'gsap';

const AnimatedImage = ({ imgMatch, i }) => {
    const frameRef = useRef(null);
    const [showImage, setShowImage] = useState(false);

    const handleEnter = () => {
        setShowImage(true);
    };

    const handleLeaveImage = () => {
        setShowImage(false);
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

    return (
        <span key={i} className="relative inline-block overflow-visible">
            {/* Black square trigger */}
            <span
                className="pulse-scale animated-word block h-8 w-8 cursor-pointer rounded-md bg-black"
                onMouseEnter={handleEnter}
            />

            {/* Image appears when hovering the square */}
            {showImage && (
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
