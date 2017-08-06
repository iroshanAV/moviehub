//import library to help the component
import React from 'react';
import {AppRegistry,View} from 'react-native';
import Header from './src/components/Header';
import MovieList from './src/components/MovieList';

//create a component


//root component walin child component ekata monawahari 
//pass karanna one nam api use karanawa 'props' 
const App = () => {
 
  return(
    <View style={{flex:1}}>
  <Header headerText={'Movie Hub'}/> 
  <MovieList />
 </View>
  );
}





//Render it to the device
AppRegistry.registerComponent('moviehub',()=>App);