import { useState } from "react";
import "./country.css"
const Country = ({ country, handleVisitedCountries }) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        handleVisitedCountries(country, visited);
        visited ? setVisited(false) : setVisited(true);
        
    }
    
    return (
        // conditionally class add
        <div className={`country ${visited&& 'visited'}`}>
            <img src={country.flags?.flags?.png} alt={country.flags.flags.alt}/>
            <h3>Name: {country.name.common}</h3>
            <h3>Population: {country.population.population}</h3>
            <h3>Area: {country.area.area}/{country.area.area >= 300000 ? " Big" : " Small"}</h3>
            <h3>Capital: {country.capital.capital}</h3>
            <h3>Region: { country.region.region}</h3>
            <button onClick={handleVisited} className="btn">
                {visited? "Visited" : "Not Visited" }</button>
        </div>
    );
};

export default Country;