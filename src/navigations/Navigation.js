import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitView from '../components/initView/InitView';
import TabComponent from './Tab';

const Stack = createNativeStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Platform.OS === 'ios' ? 'white' : 'transparent'
    },
};

const Navigation = () => {
    return (
        <NavigationContainer
            theme={MyTheme}
        >
            <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="InitView"  component={InitView}/>
            <Stack.Screen name="Tab"  component={TabComponent}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;