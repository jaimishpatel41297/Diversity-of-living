export async function register(user){

    const newUser = {
        name: user.name,
        email: user.email,
        password: user.password,
        usertype: "User"
    }

    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/user/register`,
        {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(newUser)
        })
    .then(response => response.json())
}