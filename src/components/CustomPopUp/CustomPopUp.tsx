import {Button, Modal} from "react-bootstrap"

interface CustomPopUpProps {
    show: boolean;
    handleClose: () => void;
    header: string;
    cancelButton: {
        text: string;
        onClick?: () => void;
    };
    confirmButton: {
        text: string;
        onClick?: () => void;
    };
    body: React.ReactNode;
}

const CustomPopUp = ({show, handleClose, header, cancelButton, confirmButton, body}: CustomPopUpProps) => {

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{header}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {body}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    cancelButton.onClick && cancelButton.onClick();
                    handleClose();
                }}>
                    {cancelButton.text}
                </Button>
                <Button variant="primary" onClick={() => {
                    confirmButton.onClick && confirmButton.onClick();
                    handleClose();
                }}>
                    {confirmButton.text}
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default CustomPopUp;