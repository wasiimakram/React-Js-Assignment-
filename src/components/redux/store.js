import {createStore} from 'redux'; // Store Created
import allReducers from '../redux/reducers';

// Redux Persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, allReducers)
const store = createStore(
    persistedReducer, // Pass all reducers to Store
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Chrome Extension
);
let persistor = persistStore(store)

export{
    store,
    persistor
}

