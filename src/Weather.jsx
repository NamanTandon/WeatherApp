import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const Weather = () => {

    const[city,setCity] = useState();
    const [weather, setweather] = useState();
    const handleCityChange = (e) =>{
        setCity(e.target.value)
    }
    const fetchWeather = async() => {
        try{
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city }&appid=${'d29c639c48a08d8def44e95d26776147'}`)
                setweather(response)
            }
        catch(error){
                console.log("Error fetching weather data", error)

        }
    }
    const handleClick = () => {
        fetchWeather()
    }
  return (
    <div className='weather-container'>
        
        <input type="text"  placeholder= "Enter City Name" value = {city} onChange = {handleCityChange}/><br/><br/>
        <button onClick= {handleClick}>Get Weather</button>
        {weather &&(<>
        <div className='weather-info'>
                <h2>{weather.data.name}</h2>
                <p>Temperature is {weather.data.main.temp}</p>
                <p>{weather.data.weather[0].description}</p>
        </div>
        </>)}
        </div>
  )
}

export default Weather