import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const MovieDetail = (props) => {
  return(
  <Card>
    <CardSection>
      <View style={styles.headerContentStyle}>
        <Image 
      style={styles.thumbnailStyle}
      source={{uri: props.movie.thumbnail_image}} />
      </View>
      <View style={styles.headerContentStyle}>
      <Text style={styles.headerTextStyle}>{props.movie.title}</Text>
      <Text>{props.movie.artist}</Text>
      </View>
    </CardSection>
    <CardSection >
       <Image style={styles.imageStyle} source={{uri:props.movie.image}} />
    </CardSection>

    <CardSection>
     <Button onPress={() => Linking.openURL(props.movie.url)}  >
        Check this on IMDB
       </Button>
      </CardSection>
      </Card>
);
};

const styles = {
  headerContentStyle: {
  	  flexDirection : 'column',
  	  justifyContent : 'space-around'
  },

headerTextStyle: {
  fontSize:18
},
  thumbnailStyle: {
  	  height: 50,
  	  width: 50

  },

  thumbnailContainerStyle: {
  	justifyContent: 'center',
  	alignItems  : 'center',
  	marginLeft: 10,
  	marginRight:10
  },
  imageStyle: {
  	height: 300,
  	flex: 1,
  	width: null
  }
};


export default MovieDetail;