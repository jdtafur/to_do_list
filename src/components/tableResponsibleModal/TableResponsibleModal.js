import React from "react";
import {Button, Table} from "react-bootstrap";
import ImageDelete from "../../assets/images/icon_eliminar.png"
import ModalContainer from "../modalContainer/ModalContainer";

export default class TableResponsibleModal extends React.Component{

    render() {
        return (
            <ModalContainer
                show={this.props.show}
                onHide={this.props.onHide}
                modalTitle={this.props.modalTitle}>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Rol</th>
                        <th>Retirar</th>
                    </tr>
                    </thead>
                    <tbody>{
                        this.props.responsible.map((resp , index)=> {
                            return (
                                <tr key={resp.id}>
                                    <td>{resp.name}</td>
                                    <td>{resp.rol}</td>
                                    <td>
                                        <a style={{borderRadius:10, padding:8,backgroundColor:"#3e61a6"}}
                                           className="justify-content-center align-items-center"
                                           onClick={()=>{this.props.DeleteProduct(index)}}
                                        >
                                            <img style={{height:18, width:18}} src={ImageDelete} alt="delete"/>
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }</tbody>
                </Table>
                <Button className="border rounded" variant="primary" onClick={this.props.onHide}>
                    Aceptar
                </Button>
            </ModalContainer>
        )
    }
}
