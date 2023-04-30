import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import splashSlice from './features/splashSlice';
import modalReducer from './features/NewPasswordSuccess/modalSlice';
import sidebarSlice from './features/sidebarSlice';
import profileSlice from './features/Profile/profileSlice';
import userSlice from './features/userSlice';

const rootReducer = combineReducers({
  splashScreen: splashSlice,
  modal: modalReducer,
  sidebar: sidebarSlice,
  profile: profileSlice,
  user: userSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// Had to return store and moved the persistor into main.jsx
export default store;
