import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = () => {
        if (email && password !== ""){
            axios({
                method: "post",
                url: `${process.env.REACT_APP_BASE_URL}login`,
                data: { email: email, password: password }
            })
            .then(res => {
                localStorage.setItem("fuelToken", res.data.token)
                window.location.pathname = "/dashboard"
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    return (
        <div className='contaner'>
            <h2>Login</h2>
            <div className="loginCont">
                <div className="formField">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="formField">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={login} className="login">Login</button>
            </div>
        </div>
    )
}

export default Login