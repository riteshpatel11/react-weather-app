import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "dea1fed338793709bf9ff8b80cff70f3";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined
  };

  getWeather = async e => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description
      });
    }
  };

  render() {
    return (
      <div class="jumbotron vertical-center">
        <div class="card text-center ">
          <div class="card-header">
            <Titles />
          </div>

          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <Form getWeather={this.getWeather} />
            </li>
          </ul>
          <div class="card-body">
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
