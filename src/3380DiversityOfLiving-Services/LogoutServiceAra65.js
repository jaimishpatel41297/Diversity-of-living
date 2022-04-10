export async function logout(){

    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/user/logout`,
        {
            method: 'GET',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(user)
        })
    .then(response => response.json())
}