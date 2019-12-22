/*jshint esversion: 6 */
import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
// import * as JSONdata from "./data.json"

const API_KEY="7e070ed26fa13b00fb40a9901670b645";
const country="AUS";

class App extends React.Component {

  //Use of state Management for weather attributes
  state = {

  city: undefined,
  temperature: undefined,
  humidity: undefined,
  description: undefined,
  error: undefined
  
  }

//Function  call on button click
getWeather = async (e) => {
e.preventDefault();

const city = e.target.elements.city.value;

//Make API call to openweather.com with provided API keys to get the latest weather data
//Or Alternatively use the JSON file provided
const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

const data = await api_call.json();

//Convert temperature from Kelvin to Celsius
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  data.main.temp=Math.floor(valNum-273.15);
}
temperatureConverter(data.main.temp);


//Set states for all weather data if City is provided otherwise default to undefined
if(city)
{
console.log(data);

this.setState({
  
  temperature:data.main.temp, 
  city:data.name,
  humidity:data.main.humidity,
  description:data.weather[0].description,
  error:""

});

}

//If no city is provided as Input
else {
  this.setState({
  
    error:"Please enter a City name"
  
  });

}
}

render(){

  //Pasing props to custom components
  return ( 

    <div>

      <Title />
      <Form getWeather={this.getWeather} />
      <Weather 
      temperature={this.state.temperature}
      city={this.state.city}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}
      />
    </div>
  
      );
}

};



export default App;
