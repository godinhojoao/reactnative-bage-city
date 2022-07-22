import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContent: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  mapImage: {
    height: 30,
    width: 30,
    borderRadius: 8
  }
});

export default styles;