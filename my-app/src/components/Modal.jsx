import React from "react";

function Modal() {
    return (
        <div className="modal-window-wrap dsplNone" >
            <div className="modal-window">
                <div className="modal-close"></div>
                <div className="modal-window-body">
                    <div className="modal">
                        <div className="modalTitle">
                            <div></div>
                        </div>
                        <div className="modalContent">
                            <form className="form">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;