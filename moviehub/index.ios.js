import React from 'react';
import {AppRegistry,View} from 'react-native';
import Header from './src/components/Header';
import MovieList from './src/components/MovieList';





const App = () => {
 
  return(
    <View style={{flex:1}}>
  <Header headerText={'Movie Hub'}/> 
  <MovieList />
 </View>
  );
}


AppRegistry.registerComponent('moviehub',()=>App);
