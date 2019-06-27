import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <div className="row">
                        <div className="col-12">
                        <form method="post"> 
                                    <div className="card text-white bg-warning mb-3 mt-2">
                                            <div className="card-header text-center">Thêm mới User vào hệ thống</div>
                                            <div className="card-body text-primary">
                                                <div className="form-group">
                                                <input type="text"  name="name" className="form-control" placeholder="Ten User" />
                                                </div>
                                                <div className="form-group">
                                                <input type="text" name="tel" className="form-control" placeholder="Điện thoại" />
                                                </div>
                                                <div className="form-group">
                                                <select className="custom-select" name="Permission" required>
                                                    <option value>Chọn quyền mặc định</option>
                                                    <option value={1}>Admin</option>
                                                    <option value={2}>Modrator</option>
                                                    <option value={3}>Normal</option>
                                                </select>
                                                </div>
                                                <div className="form-group">
                                                    <input type="reset" className="btn btn-block btn-danger" 
                                                     value="Lưu" onClick={()=>this.props.changeEditUserStatus()}/>

                                                </div>
                                            </div>
                                            </div>
                                    </form>
                                </div>

                        </div>
        );
    }
}

export default EditUser;