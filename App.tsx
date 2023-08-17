import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import ListProcess from './components/ListProcess';
import store from './redux/store';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.screen}>
        <View style={styles.contain}>
          <Text style={styles.title}>Expense Tracker</Text>
        </View>
        <ListProcess />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {width: '100%', height: '100%', backgroundColor: '#000'},
  title: {fontSize: 24, fontWeight: '900', color: '#fafafa'},
  contain: {
    width: '100%',
    height: 100,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
});

export default App;
