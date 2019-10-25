import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import getMovies from '../getMovies';
import './Details.css'

export default class Details extends Component {

    //page for details of movies

    constructor() {
        super();
        this.state = {
            //welcomeMessage: 'Welcome to the details page'
            movies: {}
        };
    }

    //change title after three seconds
    componentDidMount() {
        //getting route 
        let moviesId = this.props.match.params.moviesId;
        //runs until the matching element is found
        let movies = getMovies().find((movies) => movies.id === moviesId);
        this.setState({ movies });
        //movies: movies
        //short for when both values have the same name
    }

    render() {

        //if the state is undefined it redirects to not found page
        if (this.state.movies === undefined) {
            //not found, redirect
            return (
                <div>
                    <Redirect to='/not-found' />
                </div>
            );
            //<Redirect to='/not-found' />

        } else {
            return (
                <div className='Details'>
                    <h1>{this.state.movies.name}</h1>
                    <div class='container image'>
                        <div>{this.state.movies.details}</div>
                        <img className='image'
                            src={this.state.movies.logo}
                            alt={this.state.movies.name} />
                    </div>
                    <Link to='/'>Back to home page</Link>
                </div>
            );
        }
    }
}