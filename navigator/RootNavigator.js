import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import HomeNavigator from './HomeNavigator';
import Profile from '../screens/Profile';
import Transaction from '../screens/Transaction';
import Wishlist from '../screens/Wishlist';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import color from '../themes/color';

import HomeUnfocused from '../assets/unfocused/home.svg';
import ListUnfocused from '../assets/unfocused/list.svg';
import TransactionUnfocused from '../assets/unfocused/transaction.svg';
import ProfileUnfocused from '../assets/unfocused/profile.svg';

import HomeFocused from '../assets/focused/home.svg';
import ListFocused from '../assets/focused/list.svg';
import TransactionFocused from '../assets/focused/transaction.svg';
import ProfileFocused from '../assets/focused/profile.svg';

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
              <HomeFocused width={30} height={30} />
            ) : (
              <HomeUnfocused width={30} height={30} />
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
              <ListFocused width={30} height={30} />
            ) : (
              <ListUnfocused width={30} height={30} />
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
              <TransactionFocused width={30} height={30} />
            ) : (
              <TransactionUnfocused width={30} height={30} />
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
              <ProfileFocused width={30} height={30} />
            ) : (
              <ProfileUnfocused width={30} height={30} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
