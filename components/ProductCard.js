import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import color from '../themes/color';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ProductCard = props => {
  return (
    <TouchableOpacity style={styles.container} key={props.key}>
      <Image style={styles.image} source={props.image} />
      <View style={styles.title}>
        <Text>{props.name}</Text>
      </View>
      <View style={[styles.title]}>
        <Text style={{color: color.black, fontWeight: 'bold'}}>
          {props.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: color.blueAqua,
    marginTop: windowHeight * 0.03,
    marginLeft: windowWidth * 0.03,
  },
  image: {
    marginTop: windowHeight * 0.05,
    width: windowWidth * 0.35,
    height: windowHeight * 0.22,
    alignSelf: 'center',
  },
  title: {
    marginTop: windowHeight * 0.02,
    marginLeft: windowWidth * 0.02,
  },
});
