import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const Register = () => {
    const history = useNavigate();
    const [user, setUser] = useState({

        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    let name, value;
    const handleChange = (e) => {
        //const {name, value} = e.target
        name = e.target.name;
        value = e.target.value;
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = async (e) => {
        e.preventDefault();
        const { firstname, lastname, email, password, confirmPassword } = user;
        if (password === confirmPassword) {
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname, lastname, email, password, confirmPassword
                })
            });
            const data = await res.json();
            if (res.status === 422 || !data) {
                window.alert("Invalid Credentials");
                console.log("Invalid Credentials");
            }
            else {
                window.alert("Successfully Registered");
                console.log("Successfully Registered");
                history('/');
            }
        }
        else{
            window.alert("Password not matched");
        }
    };

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
                                        <p>Create an Account</p>
                                    </li>
                                </ol>
                            </div>
                            <h1>Login or Create an Account</h1>
                            <div className="create-account-row">
                                <form action="" method="POST">
                                    <div className="form-block">
                                        <div className="personal-information">
                                            <div className="personal-information-header">
                                                <h2>Personal Information</h2>
                                                <p>
                                                    Please enter the following information to create your
                                                    account.
                                                </p>
                                            </div>
                                            <div className="form-row-wrapper">
                                                <div className="form-col">
                                                    <div className="form-group">
                                                        <label htmlFor="first-name" id="first-name-label"
                                                        >First Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="first-name"
                                                            name="firstname"
                                                            value={user.firstname}
                                                            onChange={handleChange} />
                                                        <span className="error-msg">Invalid</span>
                                                    </div>
                                                </div>
                                                <div className="form-col">
                                                    <div className="form-group">
                                                        <label htmlFor="last-name" id="last-name-label"
                                                        >Last Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="last-name"
                                                            name="lastname"
                                                            value={user.lastname}
                                                            onChange={handleChange}
                                                        />
                                                        <span className="error-msg">Invalid</span>
                                                    </div>
                                                </div>
                                                <div className="form-col full-width">
                                                    <div className="form-group">
                                                        <label htmlFor="email-address" id="email-address-label"
                                                        >Email Adress *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="email-address"
                                                            name="email"
                                                            value={user.email}
                                                            onChange={handleChange}
                                                        />
                                                        <span className="error-msg">Invalid</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="login-information">
                                            <div className="personal-information-header">
                                                <h2>Login Information</h2>
                                            </div>
                                            <div className="form-row-wrapper">
                                                <div className="form-col">
                                                    <div className="form-group">
                                                        <label htmlFor="password" id="password-label"
                                                        >Password *
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="password"
                                                            name="password"
                                                            value={user.password}
                                                            onChange={handleChange}
                                                        />
                                                        <span className="error-msg">Invalid</span>
                                                    </div>
                                                </div>
                                                <div className="form-col">
                                                    <div className="form-group">
                                                        <label
                                                            htmlFor="confirm-password"
                                                            id="confirm-password-label"
                                                        >Confirm Password *
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="confirm-password"
                                                            name="confirmPassword"
                                                            value={user.confirmPassword}
                                                            onChange={handleChange}
                                                        />
                                                        <span className="error-msg">Invalid</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="btn-wrapper">
                                                <button className="btn red-btn" type="submit" onClick={register}>
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
export default Register;