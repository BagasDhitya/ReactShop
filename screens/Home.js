import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import color from '../themes/color';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Home = () => {
  const GET_ELECTRONICS =
    'https://fakestoreapi.com/products/category/electronics';
  const GET_JEWELERYS = 'https://fakestoreapi.com/products/category/jewelery';

  const [electronic, setElectronics] = useState([]);
  const [jewelery, setJewelerys] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getElectronics() {
    try {
      const response = await axios.get(GET_ELECTRONICS);
      if (electronic === []) {
        setLoading(false);
      } else {
        setLoading(true);
        setElectronics(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getJewelerys() {
    try {
      const response = await axios.get(GET_JEWELERYS);
      if (jewelery === []) {
        setLoading(false);
      } else {
        setLoading(true);
        setJewelerys(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getElectronics();
    getJewelerys();
    setLoading(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{marginTop: windowHeight * 0.05}}>
          <Text
            style={{
              marginLeft: windowWidth * 0.03,
              fontSize: 18,
              color: color.blueAqua,
              fontWeight: 'bold',
            }}>
            Electronics
          </Text>
          <ScrollView horizontal>
            {electronic && loading === true ? (
              electronic.map(item => {
                return (
                  <ProductCard
                    id={item.id}
                    image={{uri: item.image}}
                    name={item.title}
                    price={'$ ' + item.price}
                  />
                );
              })
            ) : (
              <View
                style={{
                  marginHorizontal: windowWidth * 0.45,
                  marginTop: windowHeight * 0.05,
                }}>
                <ActivityIndicator size={30} color={color.redMaroon} />
              </View>
            )}
          </ScrollView>
        </View>
        <View style={{marginTop: windowHeight * 0.05}}>
          <Text
            style={{
              marginLeft: windowWidth * 0.03,
              fontSize: 18,
              color: color.blueAqua,
              fontWeight: 'bold',
            }}>
            Jewelerys
          </Text>
          <ScrollView horizontal>
            {jewelery && loading === true ? (
              jewelery.map(item => {
                return (
                  <ProductCard
                    id={item.id}
                    image={{uri: item.image}}
                    name={item.title}
                    price={'$ ' + item.price}
                  />
                );
              })
            ) : (
              <View
                style={{
                  marginHorizontal: windowWidth * 0.45,
                  marginTop: windowHeight * 0.05,
                }}>
                <ActivityIndicator size={30} color={color.redMaroon} />
              </View>
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
