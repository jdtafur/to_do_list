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
        this.deleteUserFromTask = this.deleteUserFromTask.bind(this);
    }

    componentDidMount() {
        this.props.loadTasks();
    }

    deleteUserFromTask(indexUser){
        const {idTaskSelected} = this.state;

        const index = this.props.tasks.findIndex(t => t.id === Number(idTaskSelected));
        const task = this.props.tasks.find(t => t.id === Number(idTaskSelected))

        task.responsible.splice(indexUser, 1);
        this.props.tasks.splice(index, 1, task);
        localStorage.setItem('tasks', JSON.stringify(this.props.tasks));

        this.closeModalResponsible();
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
                    deleteUserFromTask={this.deleteUserFromTask}
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
                                            <a onClick={() => {this.openModalResponsible(task.responsible,task.id)}}>
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

    openModalResponsible(responsible,taskId) {
        const changeState = (name, value) => {this.setState({[name]: value})}

        changeState('responsible',responsible);
        changeState('idTaskSelected',taskId);
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
