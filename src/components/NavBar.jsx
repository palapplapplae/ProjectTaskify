import React from "react";
import ButtonWithBg from "./util/ButtonWithBg";

const NavBar = ({ onStartAddProj, projects, onSelectProj, selectedProjId }) => {
    return (
        <aside className="w-1/3 px-8 py-16 bg-indigo-200/60 md:w-72 rounded-r-xl drop-shadow-md">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-indigo-900/90">
                Your Projects
            </h2>

            <ButtonWithBg onClick={onStartAddProj}>+ Add Project</ButtonWithBg>

            <ul className="mt-8">
                {projects.map((project) => {
                    let classes =
                        "w-full text-left font-medium px-2 py-1 rounded-md my-1 hover:text-stone-200 hover:bg-indigo-900/75";
                    
                    // The project witch is currently selecting will be highlighted
                    classes +=
                        project.id === selectedProjId
                            ? " text-blue-700 bg-white/75 drop-shadow-md"    // highlight (selected)
                            : " text-indigo-900";                // plain text

                    return (
                        <li key={project.id}>
                            <button
                                className={classes}
                                onClick={() => onSelectProj(project.id)}
                            >
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default NavBar;
