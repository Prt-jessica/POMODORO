import React from "react";
import Modal from "react-bootstrap/Modal";
/* 
function Modal(prop) {
    return (
        <modale>
            HELLOOO I AM the MODALE
        </modale>
        <div className={"container"}>
            <div className={"ModalText"}>{`take a break.`}</div>
            <div className={"ModalDivButton"}>
                <button type={`button`} onClick={props.handleClose}>
                    {`close`}
                </button>
                <button type={`button`} onClick={props.handleRelaunch}>
                    {`new timer`}
                </button>
                <button type={`button`} onClick={props.handleLaunchBreak}>
                    {`5 minutes break`}
                </button>
            </div>
        </div>
    );
}

export default Modal;
 */

function BreakModalCentered(props) {
    return (
        <Modal
            {...props}
            size={"lg"}
            aria-labelledby={"contained-modal-title-vcenter"}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id={"contained-modal-title-vcenter"}>
                    {"Modal heading"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{"Centered Modal"}</h4>
                <p>
                    {`Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.`}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <button type={"button"} onClick={props.onHide}>
                    {"Close"}
                </button>
            </Modal.Footer>
        </Modal>
    );
}

function TimerModal() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <React.Fragment>
            <button
                type={"button"}
                variant={"primary"}
                onClick={() => setModalShow(true)}>
                {"Launch vertically centered modal"}
            </button>

            <BreakModalCentered
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </React.Fragment>
    );
}

export default TimerModal;
