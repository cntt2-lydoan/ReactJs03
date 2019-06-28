import React, { Component } from 'react';
import { connect } from 'react-redux';
import editStatusReducer from './reducers/editStatusReducer';

class News extends Component {
    userEditStatusInstore = () =>{
        var {dispatch} = this.props;
        dispatch({type:'CHANGE_EDIT_STATUS'})
    }
    render() {
        return (
            <div>
                <h2>Day la Component News</h2>
                <button onClick={() => this.userEditStatusInstore()}>Click di</button>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}
export default connect(mapStateToProps)(News);