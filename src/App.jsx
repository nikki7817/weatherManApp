//Importing UseState Hook and Axios for API 
import { useState } from 'react' 
import axios from 'axios'

//importing Components
import Forecast from './components/forecast'
import ToggleButton from './components/toggle'

//Importing Css
import './index.css'
import 'animate.css';

function App() {

//Declaring the states and other stuff
const [location,setLocation] = useState('')

const [c_weather, set_c_weather] = useState(null);
const [f_weather, set_f_weather] = useState(null);

const [showContainer, setShowContainer] = useState(false); 
const [errorMessage, setErrorMessage] = useState(null);

const [isFahrenheit, setIsFahrenheit] = useState(false);

//Function to contol Toggle Behaviour
const handleToggle = (isToggled) => {
  setIsFahrenheit(isToggled);
};

//API URL
const currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8fcff2cc23c57fce7f28d07ed34964f4&units=metric `

const forecastWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=8fcff2cc23c57fce7f28d07ed34964f4&units=metric `


  //Function to Search location on Enter 
  const getCurrentData = (event) => {
    if(event.key === 'Enter'){
     if(errorMessage){
      {setErrorMessage("");}
     }
      axios.get(currentWeather).then((response) =>{
        set_c_weather(response.data)
        console.log(response.data)
        setShowContainer(true);
      })
      
      .catch((error) => {
        if (error.response) {

          console.error("Status code:", error.response.status);
          
          setErrorMessage("Oops! Enter a city that exists");
          console.error("Wrong City Name");

        } else if (error.request) {
          console.error("No response received from server");
        } 

        set_c_weather(null); // Clear previous data
        setShowContainer(false);
      });
      setLocation('')
    getForecastData(event)


    }
 
  }
//Get the data for 5 days from API
  const getForecastData = (event) => {
    if(event.key === 'Enter'){
      axios.get(forecastWeather).then((response) =>{
        set_f_weather(response.data)
        console.log(response.data)
        setShowContainer(true);
      })
      setLocation('')
  
    }
  
  }

  return (
    <>
    <div className="app">

      
    <ToggleButton onToggle={handleToggle} />

    
    {/* Current Weather Info */}
    <h1 className='weatherapp animate__animated animate__jello'>Weather Man

    {c_weather && c_weather.weather && c_weather.weather.length > 0 && (
    
    <span> <img src={`https://openweathermap.org/img/wn/${c_weather.weather[0].icon}.png`} /></span>

    )}


    </h1>
    <div className='search'>
      <input className='animate__animated animate__jello' value={location} onKeyDown={getCurrentData} type='text' onChange={event => setLocation(event.target.value)} placeholder='Enter location'/>
      {errorMessage && <h2 className='animate__animated animate__shakeX'>{errorMessage}</h2>}
    </div>

    {showContainer && ( // Conditionally render the container
      <div className="container">
        <div className='item1 animate__animated animate__backInLeft'>
        
          <h2 className='cityName'>{c_weather && c_weather.name} 
          
          </h2> 
          <h2 className='degree'> Temp  {isFahrenheit
                  ? // Convert Celsius to Fahrenheit
                    (c_weather && (c_weather.main.temp * 9) / 5 + 32).toFixed(2) + '°F'
                  : // Display Celsius
                    (c_weather && c_weather.main.temp).toFixed(2) + '°C'}
              </h2>
          <h2>Max Temp : {isFahrenheit
                  ? // Convert Celsius to Fahrenheit
                    (c_weather && (c_weather.main.temp_max* 9) / 5 + 32).toFixed(2)  + '°F'
                  : // Display Celsius
                    (c_weather && c_weather.main.temp_max).toFixed(2) + '°C'} </h2>
          <h2> {c_weather.weather[0].description}</h2>
          
          </div>


      <div className="item2 animate__animated animate__backInUp">
        <h2> {c_weather && c_weather.main.humidity}% Humid</h2>
        <h2 className='degree'> Feels  {isFahrenheit
                  ? // Convert Celsius to Fahrenheit
                    (c_weather && (c_weather.main.feels_like* 9) / 5 + 32).toFixed(2)  + '°F'
                  : // Display Celsius
                    (c_weather && c_weather.main.feels_like).toFixed(2) + '°C'}</h2>
        <h2>Min Temp : {isFahrenheit
                  ? // Convert Celsius to Fahrenheit
                    (c_weather && (c_weather.main.temp_min * 9) / 5 + 32) + '°F'
                  : // Display Celsius
                    (c_weather && c_weather.main.temp_min) + '°C'} </h2>
        <h2>Wind Speed: {c_weather.wind.speed} m/s</h2>

      </div>

{/* Conditionally render Forecast Data component */}
{showContainer && (<Forecast location={location} f_weather={f_weather} isFahrenheit={isFahrenheit}/>)}
      
    </div>
      )}

      </div>
     
      
    
      </>
  )
}

export default App