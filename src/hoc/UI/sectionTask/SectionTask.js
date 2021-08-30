import {Button, Container, Row, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './SectionTask.css';

class SectionTask extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
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

        return (
            <Container className="content">
                <Row>
                    <Button className="button" onClick={this.openModalCreate}>Agregar tarea</Button>
                </Row>
            </Container>
        );
    }
}
export default SectionTask;
