import React, { useRef } from "react";
import ButtonWithBg from "../../util/ButtonWithBg";
import ButtonPlain from "../../util/ButtonPlain";
import NewProjectInput from "./NewProjectInput";
import Modal from "../../util/Modal";

const NewProject = ({ onAddProj, onCancleProj }) => {
    const modal = useRef();

    const title = useRef();
    const desc = useRef();
    const dueDate = useRef();

    const handleSave = (event) => {
        event.preventDefault();

        const enteredTitle = title.current.value;
        const enteredDesc = desc.current.value;
        const enteredDueDate = dueDate.current.value;

        // check invalid input from user
        if (
            // input due date is in the past
            ((new Date(enteredDueDate) < (new Date()).setHours(0, 0, 0, 0))) ||

            // some input field is empty
            enteredTitle.trim() === "" ||
            enteredDesc.trim() === "" ||
            enteredDueDate.trim() === ""
        ) {
            modal.current.open();
            return; // prevent doing below instrucitons
        }

        onAddProj({
            title: enteredTitle,
            desc: enteredDesc,
            dueDate: enteredDueDate,
        });
    };

    return (
        <>
            <Modal ref={modal} buttonText={"Close"}>
                <h2 className="text-xl font-bold text-stone-700 my-4">
                    Invalid Input
                </h2>
                <p>"Please make sure you provide a value for every input field</p>
                <p>and enter the valid due date."</p>
            </Modal>
            <form className="w-2/3 mt-16" onSubmit={handleSave}>
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <ButtonPlain onClick={onCancleProj}>Cancel</ButtonPlain>
                    </li>
                    <li>
                        <ButtonWithBg type="submit">Save</ButtonWithBg>
                    </li>
                </menu>
                <div>
                    <NewProjectInput type="text" ref={title} label={"TITLE"} />
                    <NewProjectInput
                        ref={desc}
                        label={"DESCRIPTION"}
                        isTextArea
                    />
                    <NewProjectInput
                        type="date"
                        ref={dueDate}
                        label={"DUE DATE"}
                    />
                </div>
            </form>
        </>
    );
};

export default NewProject;
