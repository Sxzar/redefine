import React from 'react';

const Button = ({ id, rightIcon, leftIcon, containerClass, children }) => {
    return (
        <button
            id={id}
            className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
        >
            {leftIcon}
            <span className="font-general relative inline-flex overflow-hidden text-xs uppercase">
                <div>{children}</div>
            </span>
            {rightIcon}
        </button>
    );
};

export default Button;
