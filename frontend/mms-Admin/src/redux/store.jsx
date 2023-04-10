import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import modalReducer from './features/NewPasswordSuccess/modalSlice';

const rootReducer = combineReducers({
  modal: modalReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
