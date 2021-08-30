import React from "react";
import {Navbar} from "react-bootstrap";
import "./Toolbar.css"

export default function Toolbar() {
    return (
        <>
            <Navbar variant="default" className="toolbar">
                <Navbar.Brand>To do list</Navbar.Brand>
            </Navbar>
        </>
    );
}
