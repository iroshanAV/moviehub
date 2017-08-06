import React from 'react';
import {Text,TouchableOpacity} from 'react-native';



const Button = ({onPress,children}) => {
  return (
      <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
   <Text style={styles.textStyle}>{children}</Text>
   </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
   	alignSelf:'center',
   	 color: '#e8103b',
   	fontSize: 16,
   	fontWeight : '600',
   	paddingTop: 10,
   	paddingBottom: 10
   },

	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#4d4d4d',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#e8103b',
		marginLeft: 5,
		marginRight: 5,
		
	}
};
export default Button;