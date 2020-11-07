import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class BeerBox extends Component {
    render() {
        return (
            <div><Link to={`/beers/${this.props.id}`}>
                <img src={this.props.image_url}/>
                <h1>{this.props.name}</h1>
                <h3>{this.props.tagline}</h3>
                <p>Created by: {this.props.name}</p>
                <hr/>
                </Link>
            </div>
        );
    }
}

export default BeerBox;