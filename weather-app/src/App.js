import React from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '3b7f67810e144bc4832c4de18725ad2d';

class App extends React.Component {
  state = {
    temperature: undefined,
    tempHigh: undefined,
    tempLow: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const data = await api_call.json();
    if(city && country) {
      console.log(data);
    this.setState({
      temperature: Math.floor(data.main.temp * 9/5 - 459.67), //temp returned in kelvin, so equation used to convert to fahrenheit
      tempHigh: Math.floor(data.main.temp_max * 9/5 - 459.67),
      tempLow: Math.floor(data.main.temp_min * 9/5 - 459.67),
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ''
    });
    } else {
      this.setState({
        temperature: undefined,
        tempHigh: undefined,
        tempLow: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter city and country.'
      });
    }
  }

  render() {
    return(
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather 
        temperature = {this.state.temperature}
        tempHigh = {this.state.tempHigh}
        tempLow = {this.state.tempLow}
        city = {this.state.city}
        country = {this.state.country}
        humidity = {this.state.humidity}
        description = {this.state.description}
        error = {this.state.error}
        />
      </div>
    );
  }
}

export default App;
