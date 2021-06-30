import React, { Component } from 'react'
import { signup } from './utils'

export default class SignupPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit =  async (e) => {
        e.preventDefault();

        const token = await signup(this.state.email, this.state.password);
        this.props.login(token)
        this.props.history.push('/todos')
    }

    handleEmailChange = (e) => {
        this.setState({ password: e.target.value });
    }

    handlePasswordChange = (e) => {
        this.setState({ email: e.target.value });
    }

    render() {
        return (
            <div>
                Signup Page!!
            </div>
        )
    }
}
