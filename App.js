/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import { colors } from './src/utils/constants';
import Navigation from './src/navigations/Navigation';
import { Provider } from 'react-redux'
import store from './src/state/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
    <View style={{flex: 1}}>
    <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        hidden = {false}
        backgroundColor= {colors.black}
        />
     <Navigation/> 
    </View>
    </Provider>
  );
};

export default App;
