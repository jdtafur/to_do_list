import React, {Component} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalContainer from "../modalContainer/ModalContainer";

class FormTask extends Component{

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            state: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.createTask = this.createTask.bind(this);
    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    createTask(event){
        event.preventDefault();

        const { title, description, state} = this.state;
        const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('task')) : [];

        let task = {id: tasks.length+1,
                    title: title,
                    description: description,
                    state: state};
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.props.onHide();
    }

    EditTask(event){
        event.preventDefault();

        const { title, description, state} = this.state;
        const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('task')) : [];

        let task = {id: this.props.idSeleted,
            title: title,
            description: description,
            state: state};

        const index = tasks.findIndex(element => element.id === this.props.idSeleted);
        tasks.splice(index, 1, task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.props.onHide();
    }

    render() {

        const {title, description, state} = this.setState;

        return (
            <>
                <ModalContainer
                    show={this.props.show}
                    onHide={this.props.onHide}
                    modalTitle={this.props.modalTitle}
                    nameAction={this.props.nameAction}
                    action={this.props.action}
                >
                    <Container>
                        <Row className="justify-content-center align-items-center">
                            <Col xs="11" sm="11" md="11" lg="11" xl="11">
                                <Form onSubmit={this.props.action === 1 ? this.createTask : this.EditTask}>
                                    <Form.Group>
                                        <Form.Label>Titulo</Form.Label>
                                        <Form.Control required type="text" placeholder="titulo" value={title} onChange={this.handleInputChange} name="title"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Descripción</Form.Label>
                                        <Form.Control required  type="text" placeholder="descripción" value={description} onChange={this.handleInputChange} name="description"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Estado</Form.Label>
                                        <Form.Control required  type="text" placeholder="estado" value={state} onChange={this.handleInputChange} name="state"/>
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
export default FormTask;
