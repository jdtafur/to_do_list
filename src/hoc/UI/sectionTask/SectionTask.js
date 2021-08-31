import {Button, Container, Row, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './SectionTask.css';
import FormTask from "../../../components/formTask/FormTask";

class SectionTask extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            modalCreate: false,
            modalEdit: false,
            idTaskSelected: -1,
        };

        this.openModalCreate = this.openModalCreate.bind(this);
        this.closeModalCreate = this.closeModalCreate.bind(this);
        this.openModalEdit = this.openModalEdit.bind(this);
        this.closeModalEdit = this.closeModalEdit.bind(this);
        this.loadTasks = this.loadTasks.bind(this);
    }

    componentDidMount() {
        this.loadTasks();
    }

    loadTasks(){
        const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        this.setState({tasks: tasks});
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

    render() {

        const {tasks, modalCreate, modalEdit, idTaskSelected} = this.state;

        return (
            <Container className="content">
                <FormTask
                    show={modalCreate}
                    onHide={this.closeModalCreate}
                    modalTitle="Crear Tarea"
                    nameAction="Crear"
                    action={1}
                    loadTasks={this.loadTasks}
                />
                <FormTask
                    show={modalEdit}
                    onHide={this.closeModalEdit}
                    modalTitle="Editar Tarea"
                    nameAction="Editar"
                    action={2}
                    idSelected={idTaskSelected}
                    loadTasks={this.loadTasks}
                />
                <Row>
                    <Button className="button" onClick={this.openModalCreate}>Agregar tarea</Button>
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
                            tasks.map((task) => {
                                return (
                                    <tr key={task.id}>
                                        <td>{task.title}</td>
                                        <td>{task.description}</td>
                                        <td>{task.state}</td>
                                        <td>
                                            <a>
                                                Ver
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
}
export default SectionTask;
