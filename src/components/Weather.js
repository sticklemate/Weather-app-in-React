import React from "react";


class Weather extends React.Component {

render(){


return (<div className="wrapper">
    
      
    {this.props.city && <div className="weather-box">City: {this.props.city}
    <p><i className="fas fa-city fa-3x"></i></p>
    </div>}

    {this.props.city && <div className="weather-box">Temperature: {this.props.temperature} &deg;<span>C</span>
    <p><i className="fas fa-temperature-low fa-3x"></i></p>    
    </div>}

    {this.props.city && <div className="weather-box">Humidity: {this.props.humidity} %
    <p><i className="fas fa-tint fa-3x"></i></p>
    </div>}

    {this.props.city && <div className="weather-box">Conditions: {this.props.description}
    <p><i className="fas fa-cloud-moon fa-3x"></i></p>
    </div>}

    {this.props.error && <p> {this.props.error}</p>}

</div>);


}

}


export default Weather;