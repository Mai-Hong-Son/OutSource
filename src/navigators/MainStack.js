import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {navigationOptions} from './navigationUtils';
import Screen from './constant';
import Home from '../screens/home';
import Maps from '../screens/maps';
import Profile from '../screens/profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
Ionicons.loadFont();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === Screen.HOME) {
            iconName = 'home-outline';
          } else if (route.name === Screen.MAPS) {
            iconName = 'map-outline';
          } else if (route.name === Screen.PROFILE) {
            iconName = 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name={Screen.HOME}
        component={Home}
        options={{title: 'Trang chủ'}}
      />
      <Tab.Screen
        name={Screen.MAPS}
        component={Maps}
        options={{title: 'Bản đồ'}}
      />
      <Tab.Screen
        name={Screen.PROFILE}
        component={Profile}
        options={{title: 'Cá nhân'}}
      />
    </Tab.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...navigationOptions,
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default MainStack;
