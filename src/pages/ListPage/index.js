import React, { useState, useContext } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { speak } from 'expo-speech';

import { LocationsContext } from '../../context/Locations';
import { Item } from './../../components/Item/index';
import styles from './styles';

const ListPage = () => {
  const [selectedId, setSelectedId] = useState(null);
  const { locations } = useContext(LocationsContext);

  function handlePress(item) {
    setSelectedId(item.id);
    speak(item.title);
  }

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => handlePress(item)}
        isSelected={item.id === selectedId}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={locations}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export { ListPage };
