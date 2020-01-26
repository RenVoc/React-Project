import React from "react";

function Modal() {
    return (
        <div className="modal-window-wrap dsplNone" >
            <div className="modal-window">
                <div className="modal-close"></div>
                <div className="modal-window-body">
                    <div className="modal-window-image-block">
                    </div>
                    <div className="modal">
                        <div className="modalTitle">
                            <div><img src="my-app/src/images/mini-plane.svg" alt="" /></div>
                        </div>
                        <div className="modalContent">
                            <div className="form">
                                Form
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;