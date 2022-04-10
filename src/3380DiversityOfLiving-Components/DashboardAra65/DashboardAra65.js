import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { getCurrentUser } from "../../3380DiversityOfLiving-Services/GetCurrentUserAra65";
import UserProfileAra65 from "../UserProfileAra65/UserProfileAra65";
import UsersTableAra65 from "../UsersTableAra65/UsersTableAra65";


function DashboardAra65() {

    const [user, setUser] = useState("");
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // To refresh after signing in
        if (sessionStorage.getItem('refresh')) {
            sessionStorage.removeItem('refresh');
            window.location.reload();
        }

        // Get data of user who is logged in already
        const userToken = sessionStorage.getItem('token');
        setUser(userToken);
        if (userToken !== null) {
            getCurrentUser(userToken)
                .then(data => setUserData(data))
        }
    }, [])

    function getBody() {
        if (user !== null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            {userData.usertype === "admin" ? <UsersTableAra65></UsersTableAra65> : null}
                        </div>
                        <div className="col-md-3">
                            <UserProfileAra65 userData={userData}></UserProfileAra65>
                        </div>
                    </div>
                </div>
            )
        }
        else { return (<Redirect to="/signup"></Redirect>) }
    }

    return (
        getBody()
    )
}

export default DashboardAra65;