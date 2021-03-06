import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className='App-header'>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/todos">Todos</Link>
                <button onClick={this.props.event}><Link to="/">Logout</Link></button>
            </div>
        )
    }
}
