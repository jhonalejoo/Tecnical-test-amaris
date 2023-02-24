import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorite from '../components/Favorite/Favorite';
import Search from '../components/Search/Search';
import { colors, fontFamily } from '../utils/constants';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import RecentStack from './RecentStack';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const TabComponent = () =>{
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'HomeStack') {
                iconName = 'home';
              } else if (route.name === 'Favorite') {
                iconName = 'heart';
              }else if (route.name === 'RecentStack') {
                iconName = 'redo';
              }else if (route.name === 'Search') {
                iconName = 'search';
              }
              // You can return any component that you like here!
              return <IconAwesome name={iconName} size={size} color={color} />;
            },
            headerShown:false,
            gestureEnabled:false,
            tabBarLabelStyle:{fontFamily: fontFamily.fontFamilyBold},
            tabBarActiveTintColor: colors.yellow,
            tabBarHideOnKeyboard:true,
            tabBarStyle:{backgroundColor: 'black'}
          })}
        >
        <Tab.Screen
         name="HomeStack"
         component={HomeStack}
         />
          <Tab.Screen
         name="Favorite"
         component={Favorite}
         />
          <Tab.Screen
         name="RecentStack"
         component={RecentStack}
         />
          <Tab.Screen
         name="Search"
         component={Search}
         />
       </Tab.Navigator>    
    ) 
}
export  default TabComponent;
