import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

export const Item = ({ item, onPress, isSelected }) => {
  const backgroundColor = isSelected ? '#6b0083' : '#b503dd';
  const textColor = isSelected ? '#808080' : '#f5f5f5';

  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
      <Image
        style={styles.itemImage}
        source={{ uri: item.imgSrc }}
      />
      <View>
        <Text style={[styles.itemTitle, { color: textColor }]}>{item.title}</Text>
        <Text style={[styles.itemSubtitle, { color: textColor }]}>
          {item.coordinates.lat}, {item.coordinates.lon}
        </Text>
      </View>
    </TouchableOpacity>
  );
}