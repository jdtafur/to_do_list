import React, {Component} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import ModalContainer from "../modalContainer/ModalContainer";

class FormUser extends Component{

    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            rol: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.createUser = this.createUser.bind(this);

    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    createUser(event){
        event.preventDefault();

        const { fullName, rol} = this.state;
        const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

        let user = {id: users.length+1,
                    name: fullName,
                    rol: rol};
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        this.props.loadUsers();
        this.props.onHide();
    }

    render() {

        const {fullName, rol} = this.setState;

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
                                <Form onSubmit={this.createUser}>
                                    <Form.Group>
                                        <Form.Label>Nombre completo</Form.Label>
                                        <Form.Control required type="text" placeholder="Nombre completo" value={fullName} onChange={this.handleInputChange} name="fullName"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Rol</Form.Label>
                                        <Form.Control required  type="text" placeholder="Rol" value={rol} onChange={this.handleInputChange} name="rol"/>
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
export default FormUser;
