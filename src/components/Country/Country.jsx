import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedFlags }) => {
  console.log(handleVisitedFlags);
  const { name, flags, capital, population, area } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited ? 'visited' : 'no-visited'}`}>
      <div className="img-container">
        <img src={flags.png} alt="" />
      </div>

      <div style={{ color: visited ? 'green' : 'black' }}>
        <h3>{name.common}.</h3>
        <h4>Capital: {capital}.</h4>

        <p>Population: {population}</p>
        <p>Area: {area}</p>
      </div>
      <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
      {visited ? 'I have Visited this Country.' : 'I want to visited'}
      <button
        onClick={() => {
          handleVisitedFlags(country.flags.png);
        }}
      >
        Add Flag
      </button>
    </div>
  );
};

export default Country;
