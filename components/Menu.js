import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Electronic from '../assets/electronics.svg';
import Jewelry from '../assets/jewelry.svg';
import Mens from '../assets/menClothes.svg';

import Women from '../assets/womenClothes.svg';
import React from 'react';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Menu = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginVertical: windowHeight * 0.02,
        }}>
        <TouchableOpacity
          style={{marginLeft: windowWidth * 0.03, alignItems: 'center'}}>
          <Electronic width={40} height={40} />
          <Text style={{marginTop: windowHeight * 0.01}}>Electronic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: windowWidth * 0.3, alignItems: 'center'}}>
          <Jewelry width={40} height={40} />
          <Text style={{marginTop: windowHeight * 0.01}}>Jewelry</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginVertical: windowHeight * 0.02,
        }}>
        <TouchableOpacity
          style={{alignItems: 'center', marginLeft: windowWidth * 0.05}}>
          <Mens width={50} height={50} />
          <Text style={{marginTop: windowHeight * 0.01, textAlign: 'center'}}>
            Men's{`\n`}Clothing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: windowWidth * 0.3, alignItems: 'center'}}>
          <Women width={50} height={50} />
          <Text style={{marginTop: windowHeight * 0.01, textAlign: 'center'}}>
            Women's{`\n`}Clothing
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.2,
  },
});
