import {Button, Container, Row, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './SectionUser.css';
import FormUser from "../../../components/formUser/FormUser";
import FormTask from "../../../components/formTask/FormTask";

class SectionUser extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            modalCreate: false,
        };

        this.openModalCreate = this.openModalCreate.bind(this);
        this.closeModalCreate = this.closeModalCreate.bind(this);
        this.loadUsers = this.loadUsers.bind(this);
    }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers(){
        const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
        this.setState({users: users});
    }

    closeModalCreate(){
        this.setState({modalCreate: false});
    }

    openModalCreate() {
        this.setState({modalCreate: true});
    }

    render() {

        const {users, modalCreate} = this.state;

        return (
            <Container className="content">
                <FormUser
                    show={modalCreate}
                    onHide={this.closeModalCreate}
                    modalTitle="Crear usuario"
                    nameAction="Crear"
                    loadUsers={this.loadUsers}
                />
                <Row>
                    <Button className="button" onClick={this.openModalCreate}>Agregar usuario</Button>
                </Row>
                <Row>
                    <Table responsive>
                        <thead>
                        <tr>
                            <th>nombre completo</th>
                            <th>rol</th>
                            <th>tareas</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.rol}</td>
                                        <td>
                                            <a>
                                                Ver
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
}
export default SectionUser;
