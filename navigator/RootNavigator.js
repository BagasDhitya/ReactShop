import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import HomeNavigator from './HomeNavigator';
import Profile from '../screens/Profile';
import Transaction from '../screens/Transaction';
import Wishlist from '../screens/Wishlist';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import color from '../themes/color';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: color.blueAqua,
      }}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image source={require('../assets/focused/home.png')} />
            ) : (
              <Image source={require('../assets/unfocused/home.png')} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image source={require('../assets/focused/list.png')} />
            ) : (
              <Image source={require('../assets/unfocused/list.png')} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image source={require('../assets/focused/transaction.png')} />
            ) : (
              <Image source={require('../assets/unfocused/transaction.png')} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image source={require('../assets/focused/profile.png')} />
            ) : (
              <Image source={require('../assets/unfocused/profile.png')} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
