import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';  // Correct import for both persistStore and persistReducer
import storage from 'redux-persist/lib/storage';  // Storage import for localStorage/sessionStorage
import reducer from './reducers';  // Import your root reducer

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);  // Create the Redux store with persisted reducer

const persistor = persistStore(store);  // Create the persistor instance

export { store, persistor };
