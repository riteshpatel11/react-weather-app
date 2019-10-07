import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
          <div class="row">
            <div class="col">
              <input
                type="text"
                name="city"
                placeholder="city.."
                class="form-control "
              />
            </div>
            <br />
            <div class="col">
              <input
                type="text"
                name="country"
                placeholder="country.."
                class="form-control"
              />
            </div>
          </div>

          <br />
          <button class="btn btn-primary ">Get Weather</button>
        </form>
      </div>
    );
  }
}

export default Form;
