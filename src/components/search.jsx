import React from 'react';

function Search({ location, setLocation, getCurrentData, errorMessage, c_weather }) {
  return (
    <>
      <h1 className="weatherapp animate__animated animate__jello">
        Weather Man

      {c_weather && c_weather.weather && c_weather.weather.length > 0 && (
      <span> <img src={`https://openweathermap.org/img/wn/${c_weather.weather[0].icon}.png`} /></span>
      )}
      </h1>
      <div className="search">
        <input
          className="animate__animated animate__jello"
          value={location}
          onKeyDown={getCurrentData}
          type="text"
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter location"
        />
        {errorMessage && (
          <h2 className="animate__animated animate__wobble">{errorMessage}</h2>
        )}
      </div>
    </>
  );
}

export default Search;
