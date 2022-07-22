import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Image } from 'react-native';

import LOCATIONS from './../../data/locations.json';
import styles from './styles';


const MapPage = () => {
  const markers = LOCATIONS.map(location => ({
    id: location.id,
    latitude: location.coordinates.lat,
    longitude: location.coordinates.lon,
    title: location.title,
    imgSrc: location.imgSrc,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
  }));

  return (
    <View style={styles.mapContainer}>
      <MapView
        initialRegion={markers[0]}
        style={styles.mapContent}
        annotations={markers}
      >
        {markers.map(marker => {
          return (
            <Marker key={marker.id} title={marker.title} coordinate={marker}>
              <Image source={{ uri: marker.imgSrc }} style={styles.mapImage} />
            </Marker>
          )
        })}
      </MapView>
    </View>
  );
}

export { MapPage };