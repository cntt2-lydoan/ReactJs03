import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    deleteButtonClick = (idUser)=>{
        this.props.deleteUser(idUser);
    }
    mapimgDataUser = () => this.props.dataUserProps.map((value,key) =>(
        <TableDataRow 
        deleteButtonClick = {(idUser)=>this.deleteButtonClick(idUser)}
        editFunClick={(user) => this.props.editFun(value)} 
        changeEditUserStatus={()=>this.props.changeEditUserStatus()}
        key={key} 
        stt={key} 
        userName={value.name}
        tel={value.tel}
        permission={value.Permission}
        id={value.id}
        />
    ))  

    //this.props.editFun
    
    render() {
        console.log(this.props.dataUserProps);
        return (
            <div className="col">
                <table className="table table-striped table-hover table-inverse ">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Ten</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.mapimgDataUser()}
                    </tbody>
                </table>
                </div>

        );
    }
}

export default TableData;