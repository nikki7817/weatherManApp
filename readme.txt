# WeatherMan App: Your Personal Weather Assistant

WeatherMan is a user-friendly web application designed to provide real-time weather information and forecasts for any location around the world. Developed using React.js, JavaScript, CSS, and HTML, this intuitive app fetches data from the OpenWeatherMap API to deliver accurate and up-to-date weather details.

## Key Features:
1. **Current Weather:** Enter the desired location, and WeatherMan instantly displays the current temperature, humidity, maximum and minimum temperatures, as well as a brief description of the weather conditions.

2. **Toggle Units:** WeatherMan allows users to easily toggle between Celsius and Fahrenheit, providing flexibility and convenience based on individual preferences.

3. **5-Day Forecast:** Get a quick overview of the upcoming five days, including the average temperature to help you plan ahead.

4. **Responsive Design:** With a clean and animated user interface, WeatherMan ensures an engaging experience on various devices, making it accessible wherever you go.

Stay informed about the weather in your area or any location you choose with WeatherMan – your go-to personal weather assistant!

## Prerequisites:
- **Node.js:** Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
- **Code Editor:** Preferably Visual Studio Code

## Steps:
1. **Clone the Repository:**
   Open your terminal or command prompt and navigate to the directory where you want to store your project. Run the following command to clone the repository:


```git clone https://github.com/nikki7817/weatherManApp.git```


2. **Navigate to the Project Directory:**
Change your working directory to the newly cloned project:


```cd weatherMan```


3. **Install Dependencies:**
Run the following command to install the required dependencies:


```npm install```


4. **API Key:**
Ensure that you have your OpenWeatherMap API key. If not, sign up at [OpenWeatherMap API](https://openweathermap.org/api) to obtain one.

5. **Set API Key:**
Open the `App.jsx` file and locate the `currentWeather` and `forecastWeather` variables. Add your API key to the end of these URLs:

```javascript
const currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY `;
const forecastWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=YOUR_API_KEY `;


Replace YOUR_API_KEY with your actual API key.

6. Run the App:
Start the development server with the following command:

```npm run dev```

This will start WeatherMan App on your localhost

7. **Explore:**
Explore your WeatherMan app, enter locations, toggle units, and experience the functionality you've implemented.

Now you have successfully installed and run your WeatherMan app locally!


