import { createNativeStackNavigator} from '@react-navigation/native-stack';
import React,{createContext} from 'react';
import DetailsRecent from '../components/Recent/DetailsRecent';
import Recent from '../components/Recent/Recent';

const Stack = createNativeStackNavigator();

export default function RecentStack() {
    return (
    <Stack.Navigator headerMode="none" screenOptions={{headerShown:false,gestureEnabled:false}}>
        <Stack.Screen name="Recent"  component={Recent}/>
        <Stack.Screen name="DetailsRecent" component={DetailsRecent}/>
    </Stack.Navigator>
  );
}
