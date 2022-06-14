/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,

  ScrollView,

  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Ayahs from './components/Ayahs';


const App = () => {

  return (
    <SafeAreaView >
      <View style={styles.container}>



        <Ayahs />


      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {



  },

});

export default App;
