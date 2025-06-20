import { useRef, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';

const BentoTilt = ({ children, className = '' }) => {
    const [transformStyle, setTransformStyle] = useState('');

    const itemRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!itemRef.current) return;

        const { left, top, width, height } =
            itemRef.current.getBoundingClientRect();
        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle('');
    };

    return (
        <div
            className={className}
            ref={itemRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hoverOpacity, setHoverOpacity] = useState(0);
    const hoverButtonRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!hoverButtonRef.current) return;
        const rect = hoverButtonRef.current.getBoundingClientRect();

        setCursorPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        });
    };

    const handleMouseEnter = () => setHoverOpacity(1);
    const handleMouseLeave = () => setHoverOpacity(0);

    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                muted
                autoPlay
                playsInline
                className="absolute top-0 left-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">
                            {description}
                        </p>
                    )}
                </div>

                {isComingSoon && (
                    <div
                        ref={hoverButtonRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs text-white/20 uppercase"
                    >
                        {/* Radial gradient hover effect */}
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                            style={{
                                opacity: hoverOpacity,
                                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`
                            }}
                        />
                        <TiLocationArrow className="relative z-20" />
                        <p className="relative z-20">coming soon</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <section className="bg-black pb-10">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-lg text-blue-50">
                        Into the Metagame Layer
                    </p>

                    <p className="font-circular-web max-w-md text-lg text-blue-50 opacity-50">
                        Immerse yourself in a rich and ever-expanding universe
                        where a vibrant array of products converge into an
                        interconnected overlay experience on your world.
                    </p>
                </div>

                <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={
                            <>
                                radia<b>n</b>t
                            </>
                        }
                        description="The game of games app transforming moments across Web2 & Web3 titles into rewards"
                        isComingSoon
                    />
                </BentoTilt>
                <div className="grid h-[90vh] grid-rows-2 gap-7 md:grid-cols-2">
                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title={
                                <>
                                    zig<b>m</b>a
                                </>
                            }
                            description="The NFT collection merging Zentry's IP, AI, and gaming - pushing the boundaries of NFT innovation."
                            isComingSoon
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={
                                <>
                                    n<b>e</b>xus
                                </>
                            }
                            description="The metagame portal uniting humans & AI to play, compete and earn, shaping profiles that reflect their legacy."
                            isComingSoon
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                        <BentoCard
                            src="videos/feature-4.mp4"
                            title={
                                <>
                                    az<b>u</b>l
                                </>
                            }
                            description="The agent of agents elevating agentic AI experience to be more fun and productive."
                            isComingSoon
                        />
                    </BentoTilt>
                </div>
                <div className="mt-7 flex flex-row-reverse gap-7 md:flex-row">
                    <BentoTilt className="bento-tilt_2 w-1/2">
                        <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                            <h1 className="bento-title special-font max-w-64 text-black">
                                M<b>o</b>re co<b>m</b>ing soo<b>n</b>!
                            </h1>
                            <TiLocationArrow className="m-5 scale-[5] self-end" />
                        </div>
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_2 w-1/2">
                        <video
                            src="videos/feature-5.mp4"
                            muted
                            loop
                            autoPlay
                            playsInline
                            className="size-full object-cover object-center"
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    );
};

export default Features;
