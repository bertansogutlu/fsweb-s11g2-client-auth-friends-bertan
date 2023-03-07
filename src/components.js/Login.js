import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [login, setLogin] = useState({ username: 'workintech', password: 'wecandoit' });
    console.log(login)

    const submit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:9000/api/login', login)
            .then(function (response) {
                console.log(response);
                localStorage.setItem("token", response.data.token);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <form onSubmit={submit}>
            <div className="Login">
                <h2>LOGIN</h2>
                <label>
                    <h3>Username</h3>
                    <input value={login.username} onChange={(event) => setLogin({ ...login, username: event.target.value })}></input>
                </label>
                <label>
                    <h3>Password</h3>
                    <input value={login.password} onChange={(event) => setLogin({ ...login, password: event.target.value })}></input>
                </label>
                <button>
                    SUBMIT
                </button>
            </div>
        </form>
    )
}
