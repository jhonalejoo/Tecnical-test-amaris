import { createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DetailsEpisode from '../components/Home/DetailsEpisode';
import DetailsSerie from '../components/Home/DetailsSerie';
import Home from '../components/Home/Home';

const Stack = createNativeStackNavigator();

export default function RecentStack() {
    return (
    <Stack.Navigator headerMode="none" screenOptions={{headerShown:false,gestureEnabled:false}}>
        <Stack.Screen name="Home"  component={Home}/>
        <Stack.Screen name="DetailsSerie" component={DetailsSerie}/>
        <Stack.Screen name="DetailsEpisode" component={DetailsEpisode}/>
    </Stack.Navigator>
  );
}
