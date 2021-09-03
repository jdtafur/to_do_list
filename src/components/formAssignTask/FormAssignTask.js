import React, {Component} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import ModalContainer from "../modalContainer/ModalContainer";

class FormAssignTask extends Component{

    constructor(props) {
        super(props);

        this.state = {
            taskId: '',
            userId: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.assignTask = this.assignTask.bind(this);
    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    assignTask(event){
        event.preventDefault();

        const { taskId, userId} = this.state;
        const index = this.props.tasks.findIndex(t => t.id === Number(taskId));
        const task = this.props.tasks.find(t => t.id === Number(taskId))
        const user = this.props.users.find(user => user.id === Number(userId))

        task.responsible.push(user);
        this.props.tasks.splice(index, 1, task);
        localStorage.setItem('tasks', JSON.stringify(this.props.tasks));

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
                                <Form onSubmit={this.assignTask}>
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
