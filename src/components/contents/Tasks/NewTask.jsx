import React, { useState } from "react";
import ButtonPlain from "../../util/ButtonPlain";

const NewTask = ({ onAdd }) => {
    // use useState to track the input and clear when user click button
    const [enterTask, setEnterTask] = useState("");
    const handleEnterTask = (event) => {
        // scope the input text within 80 letters
        if (event.target.value.length < 81) {
            setEnterTask(event.target.value);
        }
    };

    const handleClick = () => {
        // if invalid input (emoty string) won't add to the tasks list
        if (enterTask.trim() === "") {
            return;
        }

        onAdd(enterTask); // sent task text to mother class for extend the tasks array
        setEnterTask("");
    };

    return (
        <div className="flex item-center gap-3">
            <input
                type="text"
                className="w-[23vw] px-2 py-1 rounded-md bg-white/75 drop-shadow-md"
                onChange={handleEnterTask}
                value={enterTask}
            />
            <ButtonPlain onClick={handleClick}>Add Task</ButtonPlain>
        </div>
    );
};

export default NewTask;
