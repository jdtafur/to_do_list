import {Button, Container, Row, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './SectionUser.css';
import FormUser from "../../../components/formUser/FormUser";

class SectionUser extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            modalCreate: false,
        };

        this.openModalCreate = this.openModalCreate.bind(this);
        this.closeModalCreate = this.closeModalCreate.bind(this);
    }

    closeModalCreate(){
        this.setState({modalCreate: false});
    }

    openModalCreate() {
        this.setState({modalCreate: true});
    }

    render() {

        const {modalCreate} = this.state;

        return (
            <Container className="content">
                <FormUser
                    show={modalCreate}
                    onHide={this.closeModalCreate}
                    modalTitle="Crear usuario"
                    nameAction="Crear"
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
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
}
export default SectionUser;
