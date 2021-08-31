import React from "react";
import {Modal} from "react-bootstrap";
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
            <Modal.Body className="custom-style">
                {props.children}
            </Modal.Body>
        </Modal>
    );
}
