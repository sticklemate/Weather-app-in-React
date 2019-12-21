import React from "react";

class Form extends React.Component {

render(){

return (

<form onSubmit={this.props.getWeather}>

    <input type="text" name="city" placeholder="Enter City name..."></input>
    <input type="text" name="Country" placeholder="Enter Country name..."></input>
    <button>Get Weather</button>


</form>



);

}

}

export default Form;