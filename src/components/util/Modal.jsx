import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import ButtonWithBg from "./ButtonWithBg";

const Modal = forwardRef(({ children, buttonText }, ref) => {
    // ref that use for call the methods from interface (child)
    const dialog = useRef();

    // allow parent all *open* function
    useImperativeHandle(ref, () => {
        return {
            open() {
                // showModal() is a method of the HTMLDialogElement interface
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md drop-shadow-md font-raleway">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <ButtonWithBg>{buttonText}</ButtonWithBg>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
});

export default Modal;
