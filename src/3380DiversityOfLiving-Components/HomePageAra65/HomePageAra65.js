import React, { useEffect, useState } from "react";
import { getCountryCountData } from "../../3380DiversityOfLiving-Services/CountryCountServiceAra65";
import { getCountryData } from "../../3380DiversityOfLiving-Services/NumbeoServiceAra65";
import { Redirect } from 'react-router';

function HomePageAra65() {

    const [countryCountData, setCountryCountData] = useState([]);
    const [currentCountry, setCurrentCountry] = useState("");
    const [countryData, setCountryData] = useState([]);
    const [dataFlag, setDataFlag] = useState(false);

    var emptyFlag = true;

    useEffect(() => {
        getCountryCountData()
            .then(data => {
                console.log(data);
                data.sort(function (a, b) {
                    return b.count - a.count;
                })
                setCountryCountData(data);
            })
            .catch(error => console.log(error));
    })

    useEffect(() => {
        setDataFlag(true)
    }, [countryData])

    // Returns the indices retrieved of a country
    function getIndices() {

        var indices = [];

        if (countryData.purchasing_power_incl_rent_index !== undefined) {
            indices.push({
                index: "Purchasing power index",
                val: countryData.purchasing_power_incl_rent_index
            });
            emptyFlag = false;
        }
        if (countryData.health_care_index !== undefined) {
            indices.push({
                index: "Health care index",
                val: countryData.health_care_index
            });
            emptyFlag = false;
        }
        if (countryData.crime_index !== undefined) {
            indices.push({
                index: "Crime index",
                val: countryData.crime_index
            });
            emptyFlag = false;
        }
        if (countryData.pollution_index !== undefined) {
            indices.push({
                index: "Pollution index",
                val: countryData.pollution_index
            });
            emptyFlag = false;
        }
        if (countryData.quality_of_life_index !== undefined) {
            indices.push({
                index: "Quality of Life index",
                val: countryData.quality_of_life_index
            });
            emptyFlag = false;
        }
        if (emptyFlag && currentCountry !== 'Select a country') {
            indices.push({
                index: "No data available for this country",
                val: 0
            })
        }

        const rows = indices.map((item, key) => {
            return (
                <tr key={key} className="text-left">
                    <th scope="row">{item.index}</th>
                    <td>{item.val.toFixed(2)}</td>
                </tr>
            )
        })

        return (rows);
    }

    // To get the card body having the country data
    function getCard() {
        return (
            <div className="card-body">
                <h5 className="card-title">{currentCountry}</h5>
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

    async function setCountry(e) {
        const val = e.target.value;
        setCurrentCountry(val);
        console.log("Inside set country, " + e.target.value + "")
        await getCountryData(currentCountry)
            .then(data => setCountryData(data));
    }

    function showData() {
        if (currentCountry !== "") {
            return (
                <div>{getCard()}</div>
            )
        }
    }

    function getPopularChoices() {
        const buttons = countryCountData.map((item, key) => {
            return (
                <div className="card col-md-2 m-5 p-3" key={key}>
                    <button type="button" className="btn btn-secondary stretched-link" value={item.country} onClick={setCountry}>{item.country}</button>
                </div>
            )
        })
        return buttons;
    }

    return (
        <div className="container">
            <h1 className="mt-5">Most Popular countries</h1>
            <div className="row justify-content-center">
                {getPopularChoices()}
            </div>
            <div className="row justify-content-center m-5">
                <div className="card bg-light mb-3 col-md-6">
                    {dataFlag ? showData() : null}
                </div>
            </div>
        </div>
    )
}

export default HomePageAra65;
