import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import '../index.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/login', {
                email: email,
                password: password
            });
            localStorage.setItem('token', response.data.accessToken);
            navigate('/dashboard');
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div class="hold-transition login-page">
            <div class="login-box">
                <div class="login-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>
                <div class="card">
                    <div class="card-body login-card-body">
                        <p class="login-box-msg">Sign in to start your session</p>

                        <form onSubmit={Auth}>
                            <div class="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                />
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                        <span class="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                />
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                        <span class="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-8">
                                    <div class="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label for="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                                </div>
                            </div>
                        </form>

                        <div class="social-auth-links text-center mb-3">
                            <p>- OR -</p>
                            <a href="#" class="btn btn-block btn-primary">
                                <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
                            </a>
                            <a href="#" class="btn btn-block btn-danger">
                                <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                            </a>
                        </div>

                        <p class="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p class="mb-0">
                            <a href="register.html" class="text-center">Register a new membership</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
