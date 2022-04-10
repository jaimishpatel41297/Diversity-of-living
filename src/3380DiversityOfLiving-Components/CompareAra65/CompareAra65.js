import React, { useEffect, useState } from "react";
import { getCountries } from "../../3380DiversityOfLiving-Services/NumbeoServiceAra65";
import CountryDataAra65 from "../CountryDataAra65/CountryDataAra65";
import Spinner from 'react-bootstrap/Spinner';
import CalculationsAra65 from "../CalculationsAra65/CalculationsAra65";

function CompareAra65(){

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [country1, setCountry1] = useState("");
    const [country2, setCountry2] = useState("");
    const [countryCount, setCount] = useState([]);
    
    useEffect(() => {
        getCountries()
        .then(data => {
            setCountries(data.sort());
        })
        .then(() => {
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    function getSpinner(){
        if(loading){
            return(
                <div className="container p-lg-5">
                    <h2>Please wait while countries are getting loaded</h2>
                    <Spinner animation="border" role="status">
                        <span className="sr-only py-4">Loading...</span>
                    </Spinner>
                </div>
            )
        }
    }

    function getComponents(){
        return(
            <div className="row">
                <CountryDataAra65 data={countries} setCountry={setCountry1} setCount={increaseCountryCount}></CountryDataAra65>
                <CountryDataAra65 data={countries} setCountry={setCountry2} setCount={increaseCountryCount}></CountryDataAra65>
                <CalculationsAra65 first={country1} second={country2}></CalculationsAra65>
            </div>
        )
    }

    function increaseCountryCount(newCountry){
        
        var countArray = countryCount;
        if(newCountry !== "Select a country"){
            if(countArray.some(item => item.country === newCountry)) {
                countArray.forEach(item => {
                    if(item.country === newCountry) {
                        item.count++;
                    }
                })
            } else{
                countArray.push({
                    country: newCountry,
                    count : 1
                });    
            }
        }

        console.log(countArray);

        setCount(countArray);
    }

    return(
        <div className="container mt-5 mb-5">
            <div className="card text-white bg-info mb-3 text-left">
                <div className="card-header"><h2>Comparisons and Calculations</h2></div>
                <div className="card-body">
                    <h5 className="card-title">To get started with:-</h5>
                    <ol>
                        <li>Choose first country</li>
                        <li>Choose second country</li>
                        <li>Go through the calculations</li>
                        <li>Make your decision and here you go...</li>
                    </ol>
                </div>
            </div>
            {loading? getSpinner() : getComponents()}
        </div>
    )
}

export default CompareAra65;