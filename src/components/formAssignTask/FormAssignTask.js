import React, {Component} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalContainer from "../modalContainer/ModalContainer";

class FormAssignTask extends Component{

    constructor(props) {
        super(props);

        this.state = {
            taskId: '',
            userId: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.createTaskUsers = this.createTaskUsers.bind(this);
    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    createTaskUsers(event){
        event.preventDefault();

        const { taskId, userId} = this.state;
        const assignedTasks = localStorage.getItem('taskUsers') ? JSON.parse(localStorage.getItem('taskUsers')) : [];

        const index = assignedTasks.findIndex(element => element.taskId === taskId);

        if (index === -1){

            const user = this.props.users.find(user => user.id === Number(userId))

            const taskUser = {taskId: taskId, responsible:[user]}

            assignedTasks.push(taskUser);
            localStorage.setItem('taskUsers', JSON.stringify(assignedTasks));

        }else {
            const element = assignedTasks.find(element => element.taskId === taskId);

            const user = this.props.users.find(user => user.id === Number(userId))

            element.responsible.push(user);

            const taskUser = {taskId: element.taskId, responsible: element.responsible}

            assignedTasks.splice(index, 1, taskUser);
            localStorage.setItem('taskUsers', JSON.stringify(assignedTasks));


        }

        this.props.onHide();
    }

    render() {

        return (
            <>
                <ModalContainer
                    show={this.props.show}
                    onHide={this.props.onHide}
                    modalTitle={this.props.modalTitle}
                >
                    <Container>
                        <Row className="justify-content-center align-items-center">
                            <Col xs="11" sm="11" md="11" lg="11" xl="11">
                                <Form onSubmit={this.createTaskUsers}>
                                    <Form.Group>
                                        <Form.Label>Tarea</Form.Label>
                                        <Form.Control required onChange={this.handleInputChange} name="taskId" as="select">
                                            <option key={-1} value={-1}>Seleccionar</option>
                                            {
                                                this.props.tasks.map((task) => {
                                                    return (
                                                        <option key={task.id} value={task.id}>{task.title}</option>
                                                    )
                                                })
                                            }
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control required onChange={this.handleInputChange} name="userId" as="select">
                                            <option key={-1} value={-1}>Seleccionar</option>
                                            {
                                                this.props.users.map((user) => {
                                                    return (
                                                        <option key={user.id} value={user.id}>{user.name}</option>
                                                    )
                                                })
                                            }
                                        </Form.Control>
                                    </Form.Group>
                                    <div className="mt-3 button-container">
                                        <Button id="save-button" variant="default" type="submit">
                                            {this.props.nameAction}
                                        </Button>
                                        <Button variant="secondary" onClick={this.props.onHide}>
                                            Cancelar
                                        </Button>
                                    </div>
                                    <Form.Text className="text-muted text-center">
                                        Asegurate que todos los datos esten correctos.
                                    </Form.Text>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </ModalContainer>
            </>
        );
    }
}
export default FormAssignTask;
