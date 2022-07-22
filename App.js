import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import { ListPage } from './src/pages/ListPage';
import { MapPage } from './src/pages/MapPage';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar hideTransitionAnimation='slide' animated={true} />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Lista" component={ListPage} />
          <Drawer.Screen name="Mapa" component={MapPage} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

