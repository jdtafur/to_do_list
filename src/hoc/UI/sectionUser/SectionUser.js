import {Button, Container, Row, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './SectionUser.css';

class SectionUser extends React.Component{

    render() {
        return (
            <Container className="content">
                <Row>
                    <Button className="button" onClick={()=>{}}>Agregar usuario</Button>
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
