import React from "react";

export default function ButtonPlain({ children, ...props }) {
    return (
        <button className="text-stone-600 hover:text-stone-950" {...props}>
            {children}
        </button>
    );
}
