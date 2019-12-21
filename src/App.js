/*jshint esversion: 6 */
import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY="7e070ed26fa13b00fb40a9901670b645";

class App extends React.Component {

getWeather = async () => {

const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Melbourne,AUS&appid=7e070ed26fa13b00fb40a9901670b645`);

const data = await api_call.json();
console.log(data);

}

render(){

  return (
  
    <div>

      <Title />
      <Form getWeather={this.getWeather} />
      <Weather />
    </div>
  
    );
}

};

export default App;
