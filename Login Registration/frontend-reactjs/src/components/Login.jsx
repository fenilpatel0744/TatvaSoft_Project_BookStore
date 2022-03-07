import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {

    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async(e) => {
        e.preventDefault();
        const res = await fetch('/', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email,
                password
            })
        });
        const data = res.json();
        if(res.status === 400 || !data){
            window.alert("Invalid Credentials");
        }
        else{
            window.alert("Login Success");
            history('/');
        }
    }
    return (
        <>
            <div className="wrapper">
                <main>
                    <section className="create-account-page-wrapper">
                        <div className="container">
                            <div className="breadcrumb-wrapper">
                                <ol>
                                    <li>
                                        <a href="#/" title="Home">Home</a>
                                    </li>
                                    <li>
                                        <p>Login</p>
                                    </li>
                                </ol>
                            </div>
                            <h1 className="heading">Login or Create an Account</h1>
                            <div className="row">
                                <div className="column">
                                    <p className="new-customer">New Cusomer</p>
                                    <hr />
                                    <p className="para">Registration is free and easy.</p>
                                    <ul className="sentences">
                                        <li>Faster checkout</li>
                                        <li>Save multiplie shipping addresses</li>
                                        <li>View and track order and moves</li>
                                    </ul>
                                    <NavLink className="btn create-btn" to='/register'>Create an Account</NavLink>
                                    {/*<button className="btn create-btn">Create an Account</button>*/}
                                </div>
                                <div className="column">
                                    <h3 className="register-customer">Registered Customers</h3>
                                    <hr />
                                    <p className="para">If you have acoount with us, please log in.</p>

                                    <form method="POST">
                                        <div className="form-block">
                                            <div className="personal-information">
                                                <div className="form-row-wrapper">
                                                    <div className="form-col">
                                                        <div className="form-group">
                                                            <label htmlFor="email" id="email-label"
                                                            >Email Address *</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="email"
                                                                value={email}
                                                                onChange={(e)=>setEmail(e.target.value)}
                                                            />
                                                            <span className="error-msg">Invalid</span>
                                                        </div>
                                                    </div>
                                                    <div className="form-col">
                                                        <div className="form-group">
                                                            <label htmlFor="password" id="pass-label"
                                                            >Password *</label>
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                id="Password"
                                                                value={password}
                                                                onChange={(e)=>setPassword(e.target.value)}
                                                            />
                                                            <span className="error-msg">Invalid</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn red-btn" type="submit" onClick={login}>Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
export default Login;