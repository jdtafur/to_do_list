import {Button, Container, Row, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './SectionTask.css';
import FormTask from "../../../components/formTask/FormTask";
import FormAssignTask from "../../../components/formAssignTask/FormAssignTask";
import TableResponsibleModal from "../../../components/tableResponsibleModal/TableResponsibleModal";

class SectionTask extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            modalCreate: false,
            modalEdit: false,
            modalAssign: false,
            modalResponsible: false,
            responsible: [],
            idTaskSelected: -1,
        };

        this.openModalCreate = this.openModalCreate.bind(this);
        this.closeModalCreate = this.closeModalCreate.bind(this);
        this.openModalEdit = this.openModalEdit.bind(this);
        this.closeModalEdit = this.closeModalEdit.bind(this);
        this.openModalAssign = this.openModalAssign.bind(this);
        this.closeModalAssign = this.closeModalAssign.bind(this);
        this.openModalResponsible = this.openModalResponsible.bind(this);
        this.closeModalResponsible = this.closeModalResponsible.bind(this);
    }

    componentDidMount() {
        this.props.loadTasks();
    }

    render() {

        const {modalCreate, modalEdit, modalAssign,modalResponsible, idTaskSelected, responsible} = this.state;

        return (
            <Container className="content">
                <TableResponsibleModal
                    show={modalResponsible}
                    onHide={this.closeModalResponsible}
                    modalTitle="Responsables"
                    responsible={responsible}
                />
                <FormAssignTask
                    show={modalAssign}
                    onHide={this.closeModalAssign}
                    modalTitle="Asignar Tarea"
                    nameAction="Asignar"
                    tasks = {this.props.tasks}
                    users = {this.props.users}
                />
                <FormTask
                    show={modalCreate}
                    onHide={this.closeModalCreate}
                    modalTitle="Crear Tarea"
                    nameAction="Crear"
                    action={1}
                    loadTasks={this.props.loadTasks}
                />
                <FormTask
                    show={modalEdit}
                    onHide={this.closeModalEdit}
                    modalTitle="Editar Tarea"
                    nameAction="Editar"
                    action={2}
                    idSelected={idTaskSelected}
                    loadTasks={this.props.loadTasks}
                />
                <Row>
                    <Button className="button" onClick={this.openModalCreate}>Agregar tarea</Button>
                    <Button className="button" onClick={this.openModalAssign}>Asignar tarea</Button>
                </Row>
                <Row>
                    <Table responsive>
                        <thead>
                        <tr>
                            <th>titulo</th>
                            <th>descipcion</th>
                            <th>estado</th>
                            <th>Responsables</th>
                            <th>Acción</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.tasks.map((task) => {
                                return (
                                    <tr key={task.id}>
                                        <td>{task.title}</td>
                                        <td>{task.description}</td>
                                        <td>{task.state}</td>
                                        <td>
                                            <a onClick={() => {this.openModalResponsible(task.responsible)}}>
                                                ver
                                            </a>
                                        </td>
                                        <td>
                                            <a onClick={() => {this.openModalEdit(task.id)}}>
                                                Editar
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

    openModalResponsible(responsible) {
        const changeState = () => {this.setState({responsible: responsible})}

        changeState();
        this.setState({modalResponsible: true});
    }

    closeModalResponsible() {
        this.setState({modalResponsible: false});
    }

    openModalAssign() {
        this.setState({modalAssign: true});

    }

    closeModalAssign() {
        this.setState({modalAssign: false});
    }

    closeModalCreate(){
        this.setState({modalCreate: false});
    }

    openModalCreate() {
        this.setState({modalCreate: true});
    }

    closeModalEdit(){
        this.setState({modalEdit: false});
    }

    openModalEdit(idTask) {
        const changeState = () => {this.setState({idTaskSelected: idTask})}

        changeState();
        this.setState({modalEdit: true});
    }
}
export default SectionTask;
