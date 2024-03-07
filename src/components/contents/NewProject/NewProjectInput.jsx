import React, { forwardRef } from "react";

const NewProjectInput = forwardRef(({ label, isTextArea, ...props }, ref) => {
    const className = "w-full p-1 border-b-2 rounded-md border-indigo-900/20 bg-white/75 text-indigo-800/90 focus:outline-none focus:border-indigo-800/70 drop-shadow-md";

    return (
        <p className="flex flex-col gap-3 my-4">
            <label className="font-semibold uppercase text-indigo-800/90 pl-1">
                {label}
            </label>
            {isTextArea ? (
                <textarea ref={ref} className={className} {...props} />
            ) : (
                <input ref={ref} className={className} {...props} />
            )}
        </p>
    );
});

export default NewProjectInput;
