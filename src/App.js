/*jshint esversion: 6 */
import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";


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
        
        if(data.main){
          temperatureConverter(data.main.temp);
          
        function temperatureConverter(valNum) {
          valNum = parseFloat(valNum);
          data.main.temp=Math.floor(valNum-273.15);
        }
      }
      


          //Set states for all weather data if valid City is provided otherwise default to undefined
          if(city && data.main)
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

          //If no valid city is provided as Input
          else {
              this.setState({
                temperature:undefined, 
                city:data.undefined,
                humidity:undefined,
                description:undefined,
                error:"Please enter a valid City name!"
              
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
