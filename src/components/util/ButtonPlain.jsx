import React from "react";

export default function ButtonPlain({ children, ...props }) {
    return (
        <button className="text-indigo-800/90 hover:text-stone-950 font-medium" {...props}>
            {children}
        </button>
    );
}
