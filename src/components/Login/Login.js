import React, { Component } from "react";
import './Login.scss'
import { Link, Redirect } from 'react-router-dom'
import axios from "axios";

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            redirect: false
        }
    }

    handleUsername = e => {
        this.setState({ username: e.target.value })
    }
    handlePassword = e => {
        this.setState({ password: e.target.value })
    }

    handleClick = e => {
        const { username, password } = this.state;

        axios.post("/api/login", { username, password }).then(res => {
            this.setState({ redirect: true })
        })
    }

    handleEnter = e => {
        if (e.key === "Enter") {
            this.handleClick()
        }
        console.log("hit")
    }



    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/Main' />
        }
        return (
            <div className="login-page">
                <h1>Login</h1>
                <input type="text" onChange={this.handleUsername} placeholder="Username" />
                < br />
                <input type="password" onChange={this.handlePassword} onKeyPress={this.handleEnter} placeholder="Password" />
                <button onClick={this.handleClick} onKeyPress={this.handleEnter}>Log In</button>
                <h3>Don't have an account? <Link to="register">Register</Link> Today!</h3>
            </div>
        );
    }
}