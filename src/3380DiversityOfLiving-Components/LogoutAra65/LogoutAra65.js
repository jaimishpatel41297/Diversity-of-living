import React from "react";
import { Redirect } from "react-router";

function LogoutAra65(){
    sessionStorage.removeItem('token');
    sessionStorage.setItem('refresh', true);
    return(
        <Redirect to="/dashboard"></Redirect>
    )
}

export default LogoutAra65;