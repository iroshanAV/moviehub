import React,{Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios'; 
import MovieDetail from './MovieDetail';
import customData from './../Movies.json';

class MovieList extends Component {
state ={movies: []};


    componentWillMount(){
  axios.get('../Movies.json')
    .then(response => this.setState({movies:response.data}));
    }

    renderMovies(){
     return this.state.movies.map(movie => 
     <MovieDetail key={movie.title} movie={movie} />);
    } 

    

    render(){

        console.log(this.state);
 return(
     <ScrollView style={styles.containerStyle}>
      {this.renderMovies()}
         </ScrollView>
 );
    }
}


const styles={
  containerStyle : {
      backgroundColor:'#4d4d4d'
  }

};


export default MovieList;