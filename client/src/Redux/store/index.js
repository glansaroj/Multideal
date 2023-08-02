// Importing modules
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import users from "../reducerSlice/users";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';



// Persist config
const persistConfig = {
  key: 'root',
  storage,
}


// Combining store
const reducer = combineReducers({
  users,
});


const persistedReducer = persistReducer(persistConfig, reducer)



// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: [logger],
// });


//* NEW CODE HERE
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware:[logger]
})



export const persistor = persistStore(store)
// export default store;
