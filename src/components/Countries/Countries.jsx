import { use } from "react";
import Country from "../Country/Country";
import "./countries.css"
import { useState } from "react";


const Countries = ({ countriesPromise }) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country, visited) => {

        if (!visited) {

            const newVisitedCountry = [...visitedCountries, country];

            setVisitedCountries(newVisitedCountry);
        }
        else {

            const deleteVisitedCountry =
                visitedCountries.filter(
                    value => value.name.common !== country.name.common
                );

            setVisitedCountries(deleteVisitedCountry);
        }
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Total Country: {countries.length}</h1>
            <p>You can visit any country clicking the buttons.<br>
            </br>
                You can also track where you have gone.<br>
                </br><br />
                <b>Why you are waiting, Let's Visit Countries</b>
            </p>

            <div className="visitedCount">
                <h2>Total country visited: {visitedCountries.length}</h2>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="countries">
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3.cca3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                        >
                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;