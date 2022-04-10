import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../logo.png';
import { Form } from 'react-bootstrap';

function NavbarAra65(props) {

    const [user, setUser] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('token') !== null) {
            setUser(true);
        }
    }, [])

    const pageLinks = [
        { linkName: "Home", linkVal: "home" },
        { linkName: "Compare", linkVal: "compare" },
        { linkName: "FAQS", linkVal: "faq" }
    ]

    function getLinks() {
        const links = pageLinks.map((link, key) => {
            if (link.linkVal === "home") {
                return (
                    <NavLink exact activeClassName="nav-link active" className="nav-link" to="/" key={key}>{link.linkName} </NavLink>
                )
            }
            else {
                return (
                    <NavLink exact activeClassName="nav-link active" className="nav-link" to={"/" + link.linkVal} key={key}>{link.linkName}</NavLink>
                )
            }
        });
        return links;
    }

    function getUserLink() {
        if (user) {
            return (<NavLink exact activeClassName="nav-link active" className="nav-link" to={"/dashboard"}><i className="fas fa-user"></i></NavLink>)
        }
    }

    function getLoginLogoutLink() {
        if (user) {
            return (<NavLink exact activeClassName="nav-link active" className="nav-link" to={"/logout"}>Logout</NavLink>)
        } else {
            return (<NavLink exact activeClassName="nav-link active" className="nav-link" to={"/signup"}>Register/Login</NavLink>)
        }
    }

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                <Nav>
                    <NavLink exact className="nav-link active display-" to="/">
                        <img src={logo} width="60" height="auto" className="logo" alt="logo" />
                        Diversity of Living
                    </NavLink>
                </Nav>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                    {getLinks()}
                    {getLoginLogoutLink()}
                </Nav>
            </Navbar.Collapse>
            {/* <Form inline>
                <Nav>
                    {getUserLink()}
                </Nav>
            </Form> */}
        </Navbar>
    )

}

export default NavbarAra65;
