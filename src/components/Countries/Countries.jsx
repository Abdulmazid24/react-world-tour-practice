import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  console.log(visitedFlags);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  const handleVisitedFlags = flag => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <main>
      <h3>World Countries: {countries.length}</h3>
      <div className="flag-container">
        {visitedFlags.map((flag, index) => (
          <img src={flag} key={index}></img>
        ))}
      </div>
      <div className="country-container">
        {countries.map(country => (
          <Country
            key={country.ccn3}
            country={country}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </main>
  );
};

export default Countries;
