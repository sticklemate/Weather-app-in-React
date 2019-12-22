import React from "react";


class Weather extends React.Component {

render(){


return (<div className="wrapper">
    
    
     {/* City */}
    {this.props.city && <div className="weather-box">City: {this.props.city}
    <p><i className="fas fa-city fa-3x"></i></p>
    </div>}

    {/* Temperature */}
    {this.props.city && <div className="weather-box">Current temperature: {this.props.temperature} &deg;<span>C</span>
    {this.props.temperature <30 && <p><i className="fas fa-temperature-low fa-3x"></i></p>}
    {this.props.temperature >=30 && <p><i className="fas fa-temperature-high fa-3x"></i></p>}
    </div>}

    {/* Humidity */}
    {this.props.city && <div className="weather-box">Humidity: {this.props.humidity} %
    <p><i className="fas fa-tint fa-3x"></i></p>
    </div>}

    {/* Conditions */}
    {this.props.city && <div className="weather-box">Conditions: {this.props.description}
    <p><i className="fas fa-cloud-moon fa-3x"></i></p>
    </div>}

    {/* Error message */}
    {this.props.error && <p id="error-msg"> {this.props.error}</p>}

</div>);


}

}


export default Weather;