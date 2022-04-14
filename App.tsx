import React from 'react';
import {
  Text,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import AddResoults from './Components/AddResoults/AddResoults';
import Chart from './Components/Chart/Chart';
import Rung from './Components/Rung/Rung';

const App = () => (
  <SafeAreaView style={styles.container}>
    <SwiperFlatList>
      <SafeAreaView style={[styles.child, { justifyContent: 'center' }]}>
        <AddResoults />
      </SafeAreaView>

      <SafeAreaView style={[styles.child, { justifyContent: 'center' }]}>
        <Chart />
      </SafeAreaView>

      <SafeAreaView style={styles.child}>
        <Rung />
      </SafeAreaView>
    </SwiperFlatList>
  </SafeAreaView>
);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  child: { width },
});

export default App;
