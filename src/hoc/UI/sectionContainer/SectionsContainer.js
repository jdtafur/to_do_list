import {Tab, Tabs} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./SectionsContainer.css";
import SectionTask from "../sectionTask/SectionTask";

class SectionsContainer extends React.Component{

    render() {
        return (
            <div >
                <Tabs id="noanim-tab-example"
                      className="sections-container"
                      defaultActiveKey="users"
                      transition={false}
                      >
                    <Tab eventKey="users" title="Usuarios">
                    </Tab>
                    <Tab eventKey="tasks" title="Tareas">
                        <SectionTask/>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}
export default SectionsContainer;
