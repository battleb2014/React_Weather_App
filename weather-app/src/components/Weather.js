import React from 'react';

class Weather extends React.Component {
    render() {
        return(
            <div className='container'>
               { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
               { this.props.temperature && <p>Temperature: {this.props.temperature}</p> }
               { this.props.tempHigh && <p>Todays High: {this.props.tempHigh}</p> }
               { this.props.tempLow && <p>Todays Low: {this.props.tempLow}</p> }
               { this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
               { this.props.description && <p>Conditions: {this.props.description}</p> }
               { this.props.error && <p className='error'>{ this.props.error }</p>}
            </div>
        );
    }
}

export default Weather;