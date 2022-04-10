import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
//import { getCurrentUser } from '../../3380DiversityOfLiving-Services/GetCurrentUserAra65';
import { login } from '../../3380DiversityOfLiving-Services/LoginServiceAra65';


function LoginAra65() {


    //Set hooks for username and password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginFlag, setLoginFlag] = useState(false);

    //Functions to invoke on change
    function passwordChange(e) {
        setPassword(e.target.value);
    }

    function emailChange(e) {
        setEmail(e.target.value);

    }

    function getToken(e) {

        e.preventDefault();

        console.log({ "email": email, "password": password })

        const user = {
            email: email,
            password: password
        }

        login(user)
            .then(user_token => {
                let { token } = user_token;
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('refresh', true);
                console.log(sessionStorage.getItem('token'));
            })
        if (sessionStorage.getItem('token') !== null) {
            setLoginFlag(true);
        }
        else {
            setLoginFlag(false);
        }


        //getCurrentUser(localStorage.getItem('token'))
        // .then(user_token => console.log(user_token))

    }
    //{loginFlag ? <Redirect to="/dashboard"></Redirect> : getForms()}

    function getForms() {
        return (
            <div className="card bg-light">
                <article className="card-body mx-auto" >
                    <h4 className="card-title mt-3 text-center">Log In</h4>
                    <form>
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
                            <input className="form-control" placeholder="Password" type="password" onChange={passwordChange}></input>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" onClick={getToken}>Login</button>

                            {/* {(redirection) ? ((redirection)?<Redirect from="/signup" to="/faqs" noThrow />: console.log("False")): console.log("False")
                            } */}
                        </div>
                    </form>
                </article>
            </div>
        )
    }

    return (
        <div className="container">
            {loginFlag ? <Redirect to="/dashboard"></Redirect> : getForms()}
        </div>
    )
}
export default LoginAra65;