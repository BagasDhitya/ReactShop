import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import color from '../themes/color';
import axios from 'axios';

import Star from '../assets/star_icon.svg';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Product = ({route}) => {
  let id = route.params?.id;

  const [product, setProducts] = useState();

  async function getProduct() {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Image style={styles.image} source={{uri: product?.image}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: windowWidth * 0.04,
          }}>
          <View
            style={{
              marginTop: windowHeight * 0.04,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Name</Text>
            <Text
              style={{
                marginRight: windowWidth * 0.5,
                marginTop: windowHeight * 0.01,
              }}>
              {product?.title}
            </Text>
          </View>
          <View
            style={{
              marginTop: windowHeight * 0.04,
              right: windowWidth * 0.4,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                left: windowWidth * 0.03,
              }}>
              Rating
            </Text>
            <View style={{flexDirection: 'row-reverse'}}>
              <Text
                style={{
                  marginTop: windowHeight * 0.01,
                  right: windowWidth * 0.02,
                }}>
                {product?.rating?.rate}
              </Text>
              <View
                style={{
                  marginTop: windowHeight * 0.007,
                  position: 'absolute',
                  marginRight: windowWidth * 0.05,
                }}>
                <Star width={20} height={20} />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: windowWidth * 0.04,
            marginTop: windowHeight * 0.03,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Description</Text>
          <Text
            style={{
              marginRight: windowWidth * 0.1,
              marginTop: windowHeight * 0.04,
              right: windowWidth * 0.229,
              textAlign: 'justify',
            }}>
            {product?.description}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: windowWidth * 0.04,
            marginTop: windowHeight * 0.03,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Price</Text>
          <Text
            style={{
              marginTop: windowHeight * 0.04,
              textAlign: 'justify',
              position: 'absolute',
            }}>
            ${product?.price}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  image: {
    width: windowWidth * 1,
    height: windowHeight * 0.3,
  },
});
