function Current({ c_weather, isFahrenheit }) {
    if (!c_weather) {
      // check if current weather data is available
      return null;
    }
  
    return (
      <>


        <div className='item1 animate__animated animate__backInLeft'>
          <h2 className='cityName'>{c_weather.name}</h2>
          <h2 className='degree'>
            Temp{' '}
            {isFahrenheit
              ? ((c_weather.main.temp * 9) / 5 + 32).toFixed(2) + '°F'
              : c_weather.main.temp.toFixed(2) + '°C'}
          </h2>
          <h2>
            Max Temp :{' '}
            {isFahrenheit
              ? ((c_weather.main.temp_max * 9) / 5 + 32).toFixed(2) + '°F'
              : c_weather.main.temp_max.toFixed(2) + '°C'}
          </h2>
          <h2>{c_weather.weather[0].description}</h2>
        </div>
  
        <div className='item2 animate__animated animate__backInUp'>
          <h2>{c_weather.main.humidity}% Humid</h2>
          <h2 className='degree'>
            Feels{' '}
            {isFahrenheit
              ? ((c_weather.main.feels_like * 9) / 5 + 32).toFixed(2) + '°F'
              : c_weather.main.feels_like.toFixed(2) + '°C'}
          </h2>
          <h2>
            Min Temp :{' '}
            {isFahrenheit
              ? ((c_weather.main.temp_min * 9) / 5 + 32).toFixed(2) + '°F'
              : c_weather.main.temp_min.toFixed(2) + '°C'}
          </h2>
          <h2>Wind Speed: {c_weather.wind.speed} m/s</h2>
        </div>
      </>
    );
  }
  
  export default Current;
  