import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/components/common';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <SafeAreaView>
          <Header headerText="Tech Stack" />
        </SafeAreaView>
      </Provider>
    );
  }
}
