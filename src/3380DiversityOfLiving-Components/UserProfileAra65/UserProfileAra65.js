import React, { useState } from "react";
import { Redirect } from "react-router";
import userImg from "../../user.png";

function UserProfileAra65(props) {

    const [redirection, setRedirection] = useState(false);

    function redirectToFaqs() {
        setRedirection(true);
    }

    function getLinks() {
        return (
            <div>
                <li class="list-group-item"><button type="button" className="btn btn-primary" onClick={redirectToFaqs}>Faqs History</button></li>
                {redirection ? <Redirect to="/faqs"></Redirect> : null}
            </div>
        );

    }

    function getUserData() {
        return (
            <div className="text-left">
                <li className="list-group-item">Name: {props.userData.name}</li>
                <li className="list-group-item">Email: {props.userData.email}</li>
            </div>
        )
    }

    return (
        <div className="mt-5">
            <div className="card">
                <img src={userImg} width="auto" height="auto" className="logo" alt="logo" />
                <div className="card-body">
                    <h5 className="card-title string">User Profile</h5>
                    {getUserData()}
                </div>
                <ul className="list-group list-group-flush">
                    {getLinks()}
                </ul>
            </div>
        </div>
    )
}

export default UserProfileAra65;