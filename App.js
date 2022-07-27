import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import { LocationsProvider } from './src/context/Locations';
import { ListPage } from './src/pages/ListPage';
import { MapPage } from './src/pages/MapPage';
import { AddLocationPage } from './src/pages/AddLocationPage';
import LOCATIONS from './src/data/locations.json';

export default function App() {
  const [locations, setLocations] = useState(LOCATIONS)
  const Drawer = createDrawerNavigator();

  return (
    <LocationsProvider locations={locations} setLocations={setLocations}>
      <StatusBar />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Lista" component={ListPage}/>
          <Drawer.Screen name="Mapa" component={MapPage} />
          <Drawer.Screen name="Adicionar localização" component={AddLocationPage} />
        </Drawer.Navigator>
      </NavigationContainer>
    </LocationsProvider>
  );
}

