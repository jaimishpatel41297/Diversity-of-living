// Service file to pull all calls for Numbeo API Data

// Get countries
export async function getCountries(){
    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/numbeo/countries`)
        .then(response => response.json());
}

// Get single country data
export async function getCountryData(country){

    const countryObject = {
        "country": country
    }

    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/numbeo/country_data`,
        {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(countryObject)
        })
    .then(response => response.json());
}

export async function getFAQ(){
  return await fetch(`${process.env.REACT_APP_API_BASE_URL}/faq/`)
        .then(response => response.json());
}

export async function deleteFAQ(id){
  const deleteData = JSON.stringify({"id" : id});
  return fetch(`${process.env.REACT_APP_API_BASE_URL}/faq/`,
    {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: deleteData
    })
    .then (response => response.json())
}

export async function getCountryCount(){
  return await fetch(`${process.env.REACT_APP_API_BASE_URL}/countrycount`)
      .then(response => response.json());
}
