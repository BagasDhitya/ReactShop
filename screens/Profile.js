import {StyleSheet, Text, View, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import color from '../themes/color';
import HeaderProfile from '../components/HeaderProfile';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginVertical: windowHeight * 0.03, alignSelf: 'center'}}>
        <HeaderProfile
          image={{
            uri: `https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png`,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
