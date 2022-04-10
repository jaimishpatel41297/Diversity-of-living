import React, { useEffect, useState } from 'react';
import { getCountryData } from '../../3380DiversityOfLiving-Services/NumbeoServiceAra65';

function CalculationsAra65(props){

    // State for indices data of different countries 
    const [firstCountryData, setFirstCountryData] = useState({});
    const [secondCountryData, setSecondCountryData] = useState({});
    // const [differences, setDifferences] = useState([]);

    useEffect(() => {
        // To get first country's data
        getCountryData(props.first)
        .then(data =>{
            setFirstCountryData(data);
        })
        .catch(error =>{
            console.log(error);
        })

        // To get second country's data
        getCountryData(props.second)
        .then(data =>{
            setSecondCountryData(data);
        })
        .catch(error =>{
            console.log(error);
        })
    }, [props.first, props.second])

    // To get card body
    function getCardBody(){
        if(props.first !== "" && props.second !== ""){
            return(
                <div className="card-body">
                    <div className="card-title">
                        <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <td className="p-0"><h5>Index</h5></td>
                                <td className="p-0"><h5>Difference</h5></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className='card-text'>
                        <table className="table">
                        <tbody>
                            {getTableRows()}
                        </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }

    // This will create an array of indices that single country has
    function getIndices(countryData) {
        var indices = [];
        var emptyFlag = true;
        
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
        if(emptyFlag){
            indices.push({
                index : "No data available for this country",
                val : 0
            })
        }

        return(indices);
    }

    // This will calculate the difference of indices between both countries
    function getDifferences(){
        const firstCountryIndices = getIndices(firstCountryData);
        const secondCountryIndices = getIndices(secondCountryData);

        var differencesArr = [];

        firstCountryIndices.forEach(item1 => {
            secondCountryIndices.forEach(item2 => {
                if(item1.index === item2.index){
                    const diff = item1.val - item2.val;
                    
                    const diffObj = {
                        index : item1.index,
                        diff : diff.toFixed(2)
                    }
                    differencesArr.push(diffObj);
                }
            });
        })

        return differencesArr;
    }

    function getTableRows(){
        const differences = getDifferences();
        const tableRows = differences.map((item, key) => {
            if(item.index === 'Purchasing power index' && item.diff < 0){
                return(
                    <tr key={key}>
                        <th scope="row" className="text-left">{item.index}</th>
                        <td className="table-danger">{item.diff}</td>
                    </tr>
                )
            }
            else if(item.index === 'Health care index' && item.diff < 0){
                return(
                    <tr key={key}>
                        <th scope="row" className="text-left">{item.index}</th>
                        <td className="table-danger">{item.diff}</td>
                    </tr>
                )
            }
            else if(item.index === 'Crime index' && item.diff > 0){
                return(
                    <tr key={key}>
                        <th scope="row" className="text-left">{item.index}</th>
                        <td className="table-danger">{item.diff}</td>
                    </tr>
                )
            }
            else if(item.index === 'Pollution index' && item.diff > 0){
                return(
                    <tr key={key}>
                        <th scope="row" className="text-left">{item.index}</th>
                        <td className="table-danger">{item.diff}</td>
                    </tr>
                )
            }
            else if(item.index === 'Quality of Life index' && item.diff < 0){
                return(
                    <tr key={key}>
                        <th scope="row" className="text-left">{item.index}</th>
                        <td className="table-danger">{item.diff}</td>
                    </tr>
                )
            }
            else {
                return(
                    <tr key={key}>
                        <th scope="row" className="text-left">{item.index}</th>
                        <td className="table-success">{item.diff}</td>
                    </tr>
                )
            }
        })

        return tableRows;
    }

    return(
        <div className="col-md-4">
            <h4>Calculations</h4>
            <div className="container">
                <div className="card bg-light mb-3">
                    <div className="card-header">Difference is calculated in respect to first country chosen</div>
                    {getCardBody()}
                </div>
            </div>
        </div>
    )
}

export default CalculationsAra65;