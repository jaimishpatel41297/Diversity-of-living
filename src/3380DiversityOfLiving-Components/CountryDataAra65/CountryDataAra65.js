import React, { useEffect, useState } from "react";
import { getCountryData } from "../../3380DiversityOfLiving-Services/NumbeoServiceAra65";
import Spinner from 'react-bootstrap/Spinner';

function CountryDataAra65(props){

    const [countryOption, setCountry] = useState("Select a country");
    const [countryData, setCountryData] = useState({});
    const [flag, setFlag] = useState(false);

    const [loading, setLoading] = useState(true);

    var emptyFlag = true;
    
    // This hook runs at every change of select
    useEffect(() => {

        setLoading(true);

        // To get country's data
        getCountryData(countryOption)
        .then(data =>{
            setCountryData(data);
        })
        .then(() => {
            setLoading(false);
        })
        .catch(error =>{
            console.log(error);
        })
    }, [countryOption])

    // Event handler on change of selection
    async function onCountrySelected(e) {
        const val = e.target.value;
        setCountry(val);
        props.setCountry(val);
        if(val !== "Select a Country") {
            setFlag(true);
        }
        else{
            setFlag(false);
        }

        props.setCount(val);
    }

    // Returns the indices retrieved of a country
    function getIndices() {

        var indices = [];
        
        if(countryData.purchasing_power_incl_rent_index !== undefined){
            indices.push({
                index : "Purchasing power index",
                val : countryData.purchasing_power_incl_rent_index
            });
            emptyFlag = false;
        }
        if(countryData.health_care_index !== undefined){
            indices.push({
                index : "Health care index",
                val : countryData.health_care_index
            });
            emptyFlag = false;
        }
        if (countryData.crime_index !== undefined){
            indices.push({
                index : "Crime index",
                val : countryData.crime_index
            });
            emptyFlag = false;
        } 
        if (countryData.pollution_index !== undefined){
            indices.push({
                index : "Pollution index",
                val : countryData.pollution_index
            });
            emptyFlag = false;
        }
        if (countryData.quality_of_life_index !== undefined) {
            indices.push({
                index: "Quality of Life index",
                val : countryData.quality_of_life_index
            });
            emptyFlag = false;
        }
        if(emptyFlag && countryOption !== 'Select a country'){
            indices.push({
                index : "No data available for this country",
                val : 0
            })
        }
    
        const rows = indices.map((item, key) => {
            return(
                <tr key={key} className="text-left">
                    <th scope="row">{item.index}</th>
                    <td>{item.val.toFixed(2)}</td>
                </tr>
            )
        })
        
        return(rows);
    }

    // To get the card body having the country data
    function getCard(){
        if(flag){
            return(
                <div className="card-body">
                    <h5 className="card-title">{countryOption}</h5>
                    <div className='card-text'>
                        <div className="table-responsive">
                        <table className="table">
                        <tbody>
                            {getIndices()}
                        </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            )
        }
    }

    function getSpinner(){
        if(loading){
            return(
                <div className="container p-lg-5">
                    <Spinner animation="border" role="status">
                        <span className="sr-only py-4">Loading...</span>
                    </Spinner>
                </div>
            )
        }
    }

    return(
        <div className="col-md-4">
            <h4>Choose Country</h4>
            <div className="container">
                <div className="card bg-light mb-3">
                    <div className="card-header">
                    <select className="form-control" aria-label="Default select example"  onChange={onCountrySelected}>
                        <option defaultValue=''>Select a country</option>
                        {
                            props.data.map((item, key) => {
                                return (
                                    <option defaultValue={item} key={key}>{item}</option>
                                )        
                            })
                        }
                    </select>
                    </div>
                    {getSpinner()}
                    {countryOption !== 'Select a country' && (!loading) ?  getCard() : null}
                </div>
            </div>
        </div>
    )
}

export default CountryDataAra65;