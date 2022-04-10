export async function getAllUsers(){
    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/user`)
    .then(response => response.json())
}

export async function getUser(id){
    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/user/single/${id}`)
    .then(response => response.json())
}

export async function updateUserData(id, newUser){
    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/user/update/${id}`,{
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(newUser)
    });
}

export async function deleteUserPermanent(id){
    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/user/delete/${id}`,{
        method: 'DELETE',
        headers: {'Content-type': 'application/json'}
    });
}