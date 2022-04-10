import React, { useEffect } from 'react';
import LoginAra65 from '../LoginAra65/LoginAra65';
import RegisterAra65 from '../RegisterAra65/RegisterAra65';

function RegisterLoginAra65() {

    useEffect(() => {
        if (sessionStorage.getItem('refresh')) {
            sessionStorage.removeItem('refresh');
            window.location.reload();
        }
    })

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-5  align-self-center">
                    <RegisterAra65></RegisterAra65>
                </div>
                <div className="col-md-2 align-self-center">
                    <h1>OR</h1>
                </div>
                <div className="col-md-5  align-self-center">
                    <LoginAra65></LoginAra65>
                </div>
            </div>
        </div>
    )
}
export default RegisterLoginAra65;