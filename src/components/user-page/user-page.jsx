import React from 'react';
import { loginRequest } from '../../actions/actionCreator';
import { connect } from 'react-redux';

const UserPage = ({ loginRequest, login }) => {
    return (
        <div style={{marginTop: "400px"}}>
            <button onClick={() => loginRequest('', false)}>Sign out</button>
        </div>
    );
}

const mapStateToProps = state => ({
    login: state.login
});

export default connect(mapStateToProps, { loginRequest })(UserPage);