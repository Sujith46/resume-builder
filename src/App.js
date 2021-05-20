import React from 'react';

import Routes from './config/Routes';
import { Provider } from 'react-redux';
import Store from './redux/CreateStore';

import './global.scss';

function App() {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
}

export default App;
