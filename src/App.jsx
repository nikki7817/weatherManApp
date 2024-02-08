//Importing UseState Hook and Axios for API 
import { useState } from 'react' 
import axios from 'axios'

//importing Components
import Forecast from './components/forecast'
import ToggleButton from './components/toggle'
import Search from './components/search'
import Current from './components/current'

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
        <Search
          location={location}
          setLocation={setLocation}
          getCurrentData={getCurrentData}
          errorMessage={errorMessage}
          c_weather={c_weather}
        />
        {showContainer && (
          <div className="container">
            <Current c_weather={c_weather} isFahrenheit={isFahrenheit} />
            {showContainer && (
              <Forecast location={location} f_weather={f_weather} isFahrenheit={isFahrenheit} />
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default App