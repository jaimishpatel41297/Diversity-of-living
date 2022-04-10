export async function getCountryCountData(){
    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/countrycount`)
        .then(response => response.json());
}

export async function increaseCountryCount(country){
    return await fetch(`${process.env.REACT_APP_API}/countrycount/${country}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }
    )
        .then(response => response.json);
}