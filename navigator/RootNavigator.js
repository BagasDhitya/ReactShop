import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import HomeNavigator from './HomeNavigator';
import Profile from '../screens/Profile';
import Transaction from '../screens/Transaction';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          title: 'Home',
          //   tabBarIcon: ({focused}) => {
          //     return focused && <HomeIcon />;
          //   },
        }}
      />
      <Tab.Screen name="Transaction" component={Transaction} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
