import React from "react";
import ButtonWithBg from "./util/ButtonWithBg";

const NavBar = ({ onStartAddProj, projects, onSelectProj, selectedProjId }) => {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                Your Projects
            </h2>

            <ButtonWithBg onClick={onStartAddProj}>+ Add Project</ButtonWithBg>

            <ul className="mt-8">
                {projects.map((project) => {
                    let classes =
                        "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
                    
                    // The project witch is currently selecting will be highlighted
                    classes +=
                        project.id === selectedProjId
                            ? " text-stone-200 bg-stone-800"    // highlight
                            : " text-stone-400";                // plain text

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
