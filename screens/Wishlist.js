import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  FlatList,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import color from '../themes/color';

import {useSelector, useDispatch} from 'react-redux';
import {removeProduct} from '../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Wishlist = ({route}) => {
  const {cart, message} = useSelector(state => state.cartReducer);
  async function removeAll(selectedItem) {
    dispatch(removeProduct(selectedItem));
  }

  function alertRemove() {
    Alert.alert(
      'Warning',
      'Are you sure want to remove all your items?',
      [
        {
          text: 'Yes',
          onPress: () => removeAll,
        },
        {
          text: 'No',
          onPress: () => <></>,
        },
      ],
      {cancelable: false},
    );
  }

  const renderItem = ({item}) => {
    return (
      <View style={styles.item} key={item.product.id}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: windowWidth * 0.03,
            marginTop: windowHeight * 0.03,
          }}>
          <View>
            <Image style={styles.image} source={{uri: item.product.image}} />
          </View>
          <View
            style={{
              marginRight: windowWidth * 0.3,
              marginLeft: windowWidth * 0.03,
              marginTop: windowHeight * 0.01,
            }}>
            <Text>{item.product.title}</Text>
            <Text
              style={{marginTop: windowHeight * 0.04, position: 'absolute'}}>
              Quantity : {item.total}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignSelf: 'flex-end', marginRight: windowWidth * 0.05}}>
        <TouchableOpacity onPress={() => alertRemove()}>
          <Text>Remove All Items</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignSelf: 'center'}}>
        <FlatList
          data={cart}
          keyExtractor={item => item}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  image: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.07,
    backgroundColor: color.blueAqua,
  },
  item: {
    marginVertical: windowHeight * 0.02,
    width: windowWidth * 0.9,
    height: windowHeight * 0.13,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: color.blueAqua,
  },
});
