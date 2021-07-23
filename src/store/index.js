import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import * as reducers from './reducers';
import rootSaga from './sagas';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const rootReducer = combineReducers(reducers);

const sagaMiddleware = createSagaMiddleware();
let middleware = [];

middleware = [sagaMiddleware, logger];

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(...middleware),
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
