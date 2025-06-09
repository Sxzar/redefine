import React from 'react';
import AnimatedTitle from './AnimatedTitle';
import Button from './Button';

const Identity = () => {
    return (
        <section className="container mx-auto flex min-h-dvh flex-col items-center justify-center px-3 py-16 md:px-10">
            <p class="font-general mb-10 text-center text-[10px] uppercase">
                who we are
            </p>
            <AnimatedTitle
                title="we're b<b>u</b>ilding <br /> a new [img:gallery-6.webp]  realit<b>y</b><br /> that rew<b>a</b>rds <br /> play<b>e</b>rs [img:gallery-5.webp]  and <br /> e<b>m</b>powers<br /> hu<b>m</b>ans & ai<br /> to [img:gallery-7.webp]  thri<b>v</b>e"
                containerClass="special-font !text-black dark:!text-white"
            />
            <p className="font-general mx-auto my-10 max-w-sm text-center text-[10px]">
                Zentry envisions a future where players, emerging tech, and a
                new economy unite at the convergence of gaming and AI.
            </p>
            <Button containerClass="cursor-pointer text-white !bg-black dark:!bg-yellow-300 dark:text-black">
                discover who we are
            </Button>
        </section>
    );
};

export default Identity;
