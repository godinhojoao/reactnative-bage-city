import React, { useState, useContext } from 'react';
import { SafeAreaView, TextInput, Button } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import { LocationsContext } from '../../context/Locations';

import styles from './styles';

const AddLocationPage = ({ navigation }) => {
  const [locationTitle, setLocationTitle] = useState('');
  const [locationUrl, setLocationUrl] = useState('');
  const [locationLat, setLocationLat] = useState('');
  const [locationLon, setLocationLon] = useState('');
  const { locations, setLocations } = useContext(LocationsContext);

  function handleSaveLocation() {
    const newLocation = {
      id: uuidv4(),
      title: locationTitle,
      coordinates: {
        lat: locationLat,
        lon: locationLon
      },
      imgSrc: locationUrl
    };

    setLocationTitle('');
    setLocationUrl('');
    setLocationLat('');
    setLocationLon('');

    setLocations([...locations, newLocation]);

    navigation.navigate('Lista');
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setLocationTitle}
        value={locationTitle}
        placeholder="Título da localização" />
      <TextInput
        style={styles.input}
        onChangeText={setLocationUrl}
        value={locationUrl}
        placeholder="Url da imagem da localização" />
      <TextInput
        style={styles.input}
        keyboardType='number-pad'
        contextMenuHidden={true}
        onChangeText={setLocationLat}
        value={locationLat}
        placeholder="Latitude da localização" />
      <TextInput
        style={styles.input}
        keyboardType='number-pad'
        contextMenuHidden={true}
        onChangeText={setLocationLon}
        value={locationLon}
        placeholder="Longitude da localização" />
      <Button
        onPress={handleSaveLocation}
        title="Salvar localização"
        color="#841584"
        accessibilityLabel="Salvar localização"
      />
    </SafeAreaView>
  );
};

export { AddLocationPage };
