import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
<<<<<<< HEAD
  return movieData.map((data, idx) => <MovieCard key={idx} {...data}/>);
  };
=======
    return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);
  }
>>>>>>> c5c6760f8a33bf29de9e42bf7aa81020ca466ae9

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    );
  }
}
