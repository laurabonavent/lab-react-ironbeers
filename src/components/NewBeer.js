import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from "axios";

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]:value
        })
  };

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
          name,
          tagline,
          description,
          first_brewed,
          brewers_tips,
          attenuation_level,
          contributed_by,
        })
            .then(responseFromApi => {
                this.setState({
                  name: '',
                  tagline: '',
                  description: '',
                  first_brewed: '',
                  brewers_tips: '',
                  attenuation_level: '',
                  contributed_by: '',
                })
                this.props.history.push("/beers");
            })
            .catch(err => alert(err));
  };

  render() {
    return (
      <div>
        <Navbar />
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(event) => this.handleChange(event)}
            />
          </label>
          <label>
            Tagline
            <input
              type="text"
              name="tagline"
              value={this.state.tagline}
              onChange={(event) => this.handleChange(event)}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={(event) => this.handleChange(event)}
            />
          </label>
          <label>
            First Brewed
            <input
              type="text"
              name="first_brewed"
              value={this.state.first_brewed}
              onChange={(event) => this.handleChange(event)}
            />
          </label>
          <label>
            Brewers Tips
            <input
              type="text"
              name="brewers_tips"
              value={this.state.brewers_tips}
              onChange={(event) => this.handleChange(event)}
            />
          </label>
          <label>
            Attenuation Level
            <input
              type="number"
              name="attenuation_level"
              value={this.state.attenuation_level}
              onChange={(event) => this.handleChange(event)}
            />
          </label>
          <label>
            Contributed by
            <input
              type="text"
              name="contributed_by"
              value={this.state.contributed_by}
              onChange={(event) => this.handleChange(event)}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
