import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import BeerBox from './BeerBox';

class Beers extends Component {
    state = {
        beers: []
    }

    componentDidMount() {
        // GET /apibeers
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then(responseFromApiBeers => {
            this.setState({
                beers: responseFromApiBeers.data
            })
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                {this.state.beers.map( beer => {
                    return (
                        <BeerBox
                            id={beer._id}
                            key={beer._id}
                            image_url={beer.image_url}
                            name={beer.name}
                            tagline={beer.tagline}/>
                        
                    )
                })}

                <BeerBox

                />
            </div>
        );
    }
}

export default Beers;