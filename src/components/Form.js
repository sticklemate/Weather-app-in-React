import React from "react";

class Form extends React.Component {

render(){

return (
<div className="weather-form">
<form onSubmit={this.props.getWeather}>

    <span className="input"><input className="input-city" type="text" name="city" placeholder=" Enter the City name"></input>
    <span></span>
    </span>
    
    <p><button>Get Weather</button></p>

</form>
</div>


);

}

}

export default Form;