import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/order
import store from './redux/store';
import { Provider } from 'react-redux';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Added this to be able to pass the state */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
