import React from "react";
import noProjectsImg from "../../assets/no-projects-icon.png";
import ButtonWithBg from "../util/ButtonWithBg";

const SplashPage = ({ onStartAddProj }) => {
    return (
        <div className="mt-24 text-center w-2/3">
            <img
                className="w-16 h-16 object-contain mx-auto"
                src={noProjectsImg}
                alt="No project seleced icon"
            />
            <h2 className="text-xl font-bold text-indigo-900/75 my-4">
                No project Selected
            </h2>
            <p className="text-stone-700/90 mb-4">
                Select a project or get start with a new one
            </p>
            <ButtonWithBg
                onClick={onStartAddProj}
            >
                Create new project
            </ButtonWithBg>
        </div>
    );
};

export default SplashPage;
