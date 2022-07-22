import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import color from '../themes/color';

import ArrowRight from '../assets/arrow_right.svg';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const HeaderProfile = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: windowHeight * 0.02,
          marginLeft: windowWidth * 0.04,
        }}>
        <Image style={styles.image} source={props.image} />
        {props.credentials ? (
          <>
            <View style={{marginLeft: windowWidth * 0.03, alignSelf: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>{props.name}</Text>
              <Text>{props.email}</Text>
            </View>
            <TouchableOpacity
              onPress={props.option}
              style={{
                marginLeft: windowWidth * 0.65,
                alignSelf: 'center',
                position: 'absolute',
              }}>
              <ArrowRight width={20} height={20} />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={props.register}
              style={{
                marginLeft: windowWidth * 0.04,
                marginTop: windowHeight * 0.015,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontStyle: 'normal',
                  textDecorationLine: 'underline',
                }}>
                Register/Login? Click here!
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.1,
    borderWidth: 1,
    borderColor: color.blueAqua,
    borderRadius: 5,
  },
  image: {
    width: windowWidth * 0.13,
    height: windowHeight * 0.06,
    borderRadius: 30,
  },
});
