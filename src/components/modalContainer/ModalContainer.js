import React from "react";
import {Button, Modal} from "react-bootstrap";
import "./ModalContainer.css";

export default function ModalContainer(props) {
    return (
        <Modal className="text-center"
               scrollable={true}
               centered={true}
               show={props.show}
               onHide={props.onHide}
               >
            <Modal.Header className="text-center custom-style">
                <Modal.Title className="w-100">{props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body class="custom-style">
                {props.children}
            </Modal.Body>
            <Modal.Footer class="footer-style">
                <Button id="save-button"
                        className="border"
                        variant="default"
                        onClick={props.action}
                >
                    {props.nameAction}
                </Button>
                <Button className="border" variant="secondary" onClick={props.onHide}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
