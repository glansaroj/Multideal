// Importing modules
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import users from "../reducerSlice/users";
// import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import products from "../reducerSlice/products";



// <------- TEST CODE HERE ------------->

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};


const storage =
  typeof window === "undefined" ? createNoopStorage() : require("redux-persist/lib/storage").default;

export default storage;

// <--------- TEST CODE END HERE ------------->




// Persist config
const persistConfig = {
  key: 'root',
  storage,
}


// Combining store
const reducer = combineReducers({
  users,
  products,

});


const persistedReducer = persistReducer(persistConfig, reducer)


//* NEW CODE HERE
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [logger]
})



export const persistor = persistStore(store)
// export default store;
