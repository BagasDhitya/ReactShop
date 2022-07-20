import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import color from '../themes/color';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Wishlist = ({route}) => {
  let product = route.params?.product;

  return (
    <SafeAreaView style={styles.container}>
      {product ? (
        <></>
      ) : (
        <View style={{alignSelf: 'center', marginVertical: windowWidth * 0.85}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            No products yet!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
