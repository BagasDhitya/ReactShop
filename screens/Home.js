import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import color from '../themes/color';
import ProductCard from '../components/ProductCard';
import Menu from '../components/Menu';
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

  const data = [
    {
      banner: require('../assets/banners/1.png'),
    },
    {
      banner: require('../assets/banners/2.png'),
    },
    {
      banner: require('../assets/banners/3.png'),
    },
    {
      banner: require('../assets/banners/4.png'),
    },
  ];

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
        <View style={{alignSelf: 'center', marginTop: windowHeight * 0.02}}>
          <Text style={{fontSize: 18, color: color.blueAqua}}>React Shop</Text>
        </View>
        <View style={{marginTop: windowHeight * 0.03}}>
          <ScrollView horizontal>
            {data &&
              data.map(item => {
                return <Image source={item.banner} style={styles.image} />;
              })}
          </ScrollView>
        </View>
        <View style={{alignSelf: 'center', marginTop: windowHeight * 0.02}}>
          <Menu />
        </View>
        <View style={{marginTop: windowHeight * 0.1}}>
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
                    name={item.title.substr(0, 50) + '...'}
                    price={'$ ' + item.price}
                    rate={item.rating.rate}
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
                    name={item.title.substr(0, 50) + '...'}
                    price={'$ ' + item.price}
                    rate={item.rating.rate}
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
  image: {
    width: windowWidth * 1,
    height: windowHeight * 0.15,
  },
});
