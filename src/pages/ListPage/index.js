import React, { useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { speak } from 'expo-speech';

import LOCATIONS from './../../data/locations.json';
import { Item } from './../../components/Item/index';
import styles from './styles';

const ListPage = () => {
  const [selectedId, setSelectedId] = useState(null);

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
        data={LOCATIONS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export { ListPage };
