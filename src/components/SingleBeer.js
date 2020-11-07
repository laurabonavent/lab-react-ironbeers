import React, { Component } from 'react';
import axios from "axios";

class SingleBeer extends Component {

    state = {}

    componentDidMount() {
        this.getSingleBeer();
    }

    // HERE
    getSingleBeer = () => {
        const { params } = this.props.match;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
        .then( responseFromApi =>{
            const theBeer = responseFromApi.data;
            this.setState(theBeer);
    })

    .catch((err)=>{
        console.log(err)
    })
}

    render() {
        return (
            <div>
                <img src={this.state.image_url} alt=""/>
                <h1>{this.state.name}</h1>
                <p>{this.state.attenuation_level}</p>
                <h3>{this.state.tagline}</h3>
                <p>{this.state.first_brewed}</p>
                <p>{this.state.description}</p>
                <p>{this.state.contributed_by}</p>
            </div>
        );
    }
}

export default SingleBeer;