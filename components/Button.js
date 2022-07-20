import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import color from '../themes/color';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Button = props => {
  return (
    <>
      {props.filled ? (
        <TouchableOpacity style={styles.filled} onPress={props.onPress}>
          <View style={{alignSelf: 'center', top: windowHeight * 0.015}}>
            <Text style={{color: color.white, fontWeight: 'bold'}}>
              {props.title}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.unfilled}>
          <View style={{alignSelf: 'center', top: windowHeight * 0.015}}>
            <Text style={{color: color.mediumGray, fontWeight: 'bold'}}>
              {props.title}
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  filled: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.05,
    borderRadius: 5,
    backgroundColor: color.blueAqua,
  },
  unfilled: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.05,
    borderRadius: 5,
    backgroundColor: color.lightGray,
  },
});
