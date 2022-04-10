import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { register } from '../../3380DiversityOfLiving-Services/RegisterServiceAra65';

function RegisterAra65() {

    //Set hooks for username and password
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [userFlag, setUserFlag] = useState(false);

    //Functions to invoke on change
    function nameChange(e) {
        setName(e.target.value);
    }

    function emailChange(e) {
        setEmail(e.target.value);
    }

    function passwordChange(e) {
        setPassword(e.target.value);
    }

    function confirmPassChange(e) {
        if (e.target.value !== password) {
            setErr("Password does not match");
        } else {
            setErr("");
        }
    }

    function getToken(e) {
        if (err === "") {
            e.preventDefault();

            const newUser = {
                name: name,
                email: email,
                password: password
            };

            register(newUser)
                .then(user_token => {
                    console.log(user_token);
                    let { token } = user_token;
                    sessionStorage.setItem('token', token);
                    sessionStorage.setItem('refresh', true);
                })
                .then(() => setUserFlag(true))
        }
    }

    function getForms() {
        return (
            <div className="card bg-light">
                <article className="card-body mx-auto" >
                    <h4 className="card-title mt-3 text-center">Create Account</h4>
                    <form>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                            </div>
                            <input name="" className="form-control" placeholder="Full name" type="text" onChange={nameChange}></input>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                            </div>
                            <input name="" className="form-control" placeholder="Email address" type="email" onChange={emailChange}></input>
                        </div>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                            </div>
                            <input className="form-control" placeholder="Create password" type="password" onChange={passwordChange}></input>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                            </div>
                            <input className="form-control" placeholder="Repeat password" type="password" onChange={confirmPassChange}></input>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" onClick={getToken}> Create Account  </button>
                        </div>
                        <div className="form-group">
                            <p className="text-danger">{err}</p>
                        </div>
                    </form>
                </article>
            </div>
        )
    }


    return (
        <div className="container">
            {/* <div className="col-md-5 mx-auto my-5"> */}
            {userFlag ? <Redirect to="/dashboard"></Redirect> : getForms()}
            {/* </div> */}
        </div>
    )
}

export default RegisterAra65;