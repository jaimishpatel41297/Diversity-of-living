export async function getCurrentUser(token) {

    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/user/me`,
        {
            method: 'GET',
            headers: {'x-access-token': token},
        })
    .then(response => response.json())
}