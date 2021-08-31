import {Tab, Tabs} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./SectionsContainer.css";
import SectionTask from "../sectionTask/SectionTask";
import SectionUser from "../sectionUser/SectionUser";

class SectionsContainer extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            users: [],
        };

        this.loadTasks = this.loadTasks.bind(this);
        this.loadUsers = this.loadUsers.bind(this);
    }

    componentDidMount() {
        this.loadTasks();
        this.loadUsers();
    }

    loadUsers(){
        const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
        this.setState({users: users});
    }

    loadTasks(){
        const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        this.setState({tasks: tasks});
    }

    render() {

        const {tasks, users} = this.state;

        return (
            <div >
                <Tabs id="noanim-tab-example"
                      className="sections-container"
                      defaultActiveKey="users"
                      transition={false}
                      >
                    <Tab eventKey="users" title="Usuarios">
                        <SectionUser
                            loadUsers={this.loadUsers}
                            users={users}
                            loadTasks={this.loadTasks}
                            tasks={tasks}
                        />
                    </Tab>
                    <Tab eventKey="tasks" title="Tareas">
                        <SectionTask
                            loadTasks={this.loadTasks}
                            tasks={tasks}
                            loadUsers={this.loadUsers}
                            users={users}
                        />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}
export default SectionsContainer;
