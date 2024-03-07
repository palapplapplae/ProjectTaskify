import React from "react";

export default function ButtonWithBg({ children, ...props }) {
    return (
        <button
            className="px-4 py-2 text-xs md:text-base rounded-md
            bg-gradient-to-br from-[rgb(97,73,164)]/80 from-5% via-[rgba(49,74,170,1)]/80 via-45% to-[rgba(79,173,201,1)]/80 to-100%
            text-stone-100 hover:bg-stone-600 drop-shadow-md"
            {...props}
        >
            {children}
        </button>
    );
}
