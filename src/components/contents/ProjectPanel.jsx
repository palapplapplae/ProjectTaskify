import React from "react";
import ButtonPlain from "../util/ButtonPlain";
import Tasks from "./Tasks/Tasks";

const ProjectPanel = ({ project, tasks, onDelete, onAddTask, onDeleteTask, onChangeTaskStatus }) => {
    // format the due date for easy reading
    const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }
    );

    return (
        <div className="w-2/3 mt-16">
            <header className="pb-4 mb-4 border-b-2 border-indigo-800/20">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold text-stone-600 mb-2">
                        {project.title}
                    </h1>
                    <ButtonPlain onClick={onDelete}>Delete</ButtonPlain>
                </div>
                <p className="mb-4 text-stone-800/50">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.desc}</p>
            </header>
            <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} onChangeStatus={onChangeTaskStatus}></Tasks>
        </div>
    );
};

export default ProjectPanel;
