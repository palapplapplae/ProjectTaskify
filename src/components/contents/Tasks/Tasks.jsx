import React from "react";
import NewTask from "./NewTask";
import ChartBar from "./ChartBar";

const Tasks = ({ tasks, onAdd, onDelete, onChangeStatus }) => {
    const handleChangeStatus = (id, event) => {
        onChangeStatus(id, event.target.value);
    };

    return (
        <>
            <h2 className="text-2xl font-bold text-stone-700 mt-2 mb-4">Tasks</h2>
            <div className="flex justify-between">
                <NewTask onAdd={onAdd} />
                <ChartBar tasks={tasks} />
            </div>
            
            {
                // if have no any tasks will show this paragraph
                tasks.length === 0 && (
                    <p className="text-stone-800 my-4">This project dose not have task yet.</p>
                )
            }

            <div className="h-[45vh]">
                {
                    // if have some tasks will show its details
                    tasks.length > 0 && (
                        <ul className="p-4 mt-8 rounded-md bg-stone-100 overflow-y-auto max-h-[100%]">
                            {
                                // loop through all element in tasks array to do the following instruction
                                tasks.map((task) => {
                                    let selectOptionClass = "mx-4 px-1 rounded-md";
                                    if (task.status === "0") selectOptionClass += " bg-sky-600/30";
                                    else if (task.status === "1")
                                        selectOptionClass += " bg-amber-500/40";
                                    else selectOptionClass += " bg-lime-500/40";

                                    return (
                                        <li key={task.id} className="flex justify-between my-4">
                                            <span>{task.text}</span>
                                            <div>
                                                <select
                                                    value={task.status}
                                                    onChange={(event) =>
                                                        handleChangeStatus(task.id, event)
                                                    }
                                                    className={selectOptionClass}
                                                >
                                                    <option value="0" className="bg-stone-50">
                                                        To do
                                                    </option>
                                                    <option value="1" className="bg-stone-50">
                                                        In progress
                                                    </option>
                                                    <option value="2" className="bg-stone-50">
                                                        Done
                                                    </option>
                                                </select>
                                                <button
                                                    className="text-stone-600 hover:text-red-500"
                                                    onClick={() => onDelete(task.id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    )
                }
            </div>
        </>
    );
};

export default Tasks;
