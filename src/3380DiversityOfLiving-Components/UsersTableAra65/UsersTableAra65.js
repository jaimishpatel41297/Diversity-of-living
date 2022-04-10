import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import { deleteUserPermanent, getAllUsers, getUser, updateUserData } from "../../3380DiversityOfLiving-Services/UsersServiceAra65";

function UsersTableAra65(props) {

    const [users, setUsers] = useState([]);
    const [editFormShow, setEditFormShow] = useState(false);
    const [editUser, setEditUser] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState("");
    const [refresh, setRefresh] = useState(false);

    //Functions to invoke on change
    function nameChange(e) {
        setName(e.target.value);
    }

    function emailChange(e) {
        setEmail(e.target.value);
    }

    function userTypeChange(e) {
        setUserType(e.target.value);
    }

    // Methods to perform CRUD
    function saveUser() {
        const newUser = editUser;
        newUser.name = name;
        newUser.email = email;
        newUser.usertype = userType;

        // Call update Service
        updateUserData(newUser._id, newUser)
            .then(handleEditClose())
            .then(setRefresh(true))

    }

    function deleteUser(e) {
        const userid = e.currentTarget.value;
        deleteUserPermanent(userid)
            .then(res => console.log(res))
            .then(setRefresh(true))
    }

    // Event handlers for the Modal
    const handleEditShow = (e) => {
        const userid = e.currentTarget.value;
        getUser(userid)
            .then(data => {
                setName(data.name)
                setEmail(data.email)
                setUserType(data.usertype)
                setEditUser(data)
            });
        setEditFormShow(true)
    };
    const handleEditClose = () => setEditFormShow(false);

    // Hook to get users
    useEffect(() => {
        getAllUsers()
            .then(users => setUsers(users))
    }, [])

    useEffect(() => {
        getAllUsers()
            .then(users => setUsers(users))
            .then(setRefresh(false))
    }, [refresh])

    // get user rows
    function getUserRows() {
        const userRows = users.map((item, key) => {
            return (
                <tr key={key}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td><button type="button" className="btn btn-outline-primary" value={item._id} onClick={handleEditShow}><i className="fas fa-edit"></i></button></td>
                    <td><button type="button" className="btn btn-outline-danger" value={item._id} onClick={deleteUser}><i className="far fa-trash-alt"></i></button></td>
                </tr>
            )
        })
        return userRows;
    }

    return (
        <table className="table mt-5">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {getUserRows()}
                <Modal show={editFormShow} onHide={handleEditClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4 className="card-title mt-3 text-center">Edit user with id: {editUser._id}</h4>
                        <form>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <input name="" className="form-control" placeholder="Full name" type="text" onChange={nameChange} value={name}></input>
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                </div>
                                <input name="" className="form-control" placeholder="Email address" type="email" onChange={emailChange} value={email}></input>
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <input name="" className="form-control" placeholder="User type" type="text" onChange={userTypeChange} value={userType}></input>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-secondary" onClick={handleEditClose}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-primary" onClick={saveUser}>
                            Save Changes
                        </button>
                    </Modal.Footer>
                </Modal>
            </tbody>
        </table>
    )
}

export default UsersTableAra65;