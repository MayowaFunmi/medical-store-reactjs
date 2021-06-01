import React, { Component } from 'react'
import { Redirect } from 'react-router'
import AuthHandler from '../utils/AuthHandler'

class LogoutComponent extends Component {
    render() {
        AuthHandler.logoutUser();
        return <Redirect to='/' />
    }
}

export default LogoutComponent
