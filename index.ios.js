import React from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { fetchInitialState } from './store/actions/actions';
import { Provider, connect } from 'react-redux';

import configureStore from './store/configure-store';
import MapScreen from './components/Map'
import HomeScreen from './components/HomeScreen'

const Routes = StackNavigator({
  Home: { screen: HomeScreen },
  Map: { screen: MapScreen }
}, {
  headerMode: 'none'
})

const store = configureStore();

// store.dispatch(fetchInitialState());
store.subscribe(() => {
    console.log('State Change: ', store.getState());
});

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store} >
        <Routes />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('barfinder', () => App)
