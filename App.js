import React from 'react';
import HomePage from "./src/components/HomePage";
import { Provider } from 'react-redux';
import store from './src/store';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <HomePage/>
        </Provider>
    );
  }
}

