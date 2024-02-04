import "../index.css"

function Forecast({location,f_weather,isFahrenheit}){

const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=8fcff2cc23c57fce7f28d07ed34964f4`

  // Function to calculate average temperature
  const avgtemp = () => {
    if (f_weather && f_weather.list) {
      const temperatures = f_weather.list.map(item => item.main.temp);
      const sum = temperatures.reduce((acc, temp) => acc + temp, 0);
      return sum / temperatures.length;
    }
    return null;
  };

  const averageTemperature = avgtemp();

  const getDateRange = () => {
    if (f_weather && f_weather.list) {
      const startDate = new Date(f_weather.list[0].dt * 1000).toLocaleDateString();
      const endDate = new Date(f_weather.list[f_weather.list.length - 1].dt * 1000).toLocaleDateString();
      return `${startDate} - ${endDate}`;
    }
    return null;
  };

  const dateRange = getDateRange();

    return(



<div className="forecast animate__animated animate__backInRight">

<h1>WeatherMan Prediction</h1>
<h2>Date : {dateRange || 'N/A'}</h2>

<h2>Average Temperature: {averageTemperature !== null  ? isFahrenheit
      ? // Convert Celsius to Fahrenheit
        ((averageTemperature * 9) / 5 + 32).toFixed(2) + '°F'
      : // Display Celsius
        averageTemperature.toFixed(2) + '°C'
    : 'Not Available'}</h2>

{f_weather && f_weather.list && f_weather.list.length > 0 && (
  <img
    src={`https://openweathermap.org/img/wn/${f_weather.list[0].weather[0].icon}.png`}
    
  />
)}


</div>

    )
}


export default Forecast
