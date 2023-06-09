import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import userSlice from "./userSlice";
import postSlice from "./postSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["users"],
};

const rootReducer = {
  posts: postSlice.reducer, 
  users: userSlice.reducer,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


// const storeData = async (key, value) => {
//   try {
//     await AsyncStorage.setItem(key, value);
//     console.log('Data stored successfully');
//   } catch (error) {
//     console.log('Error storing data:', error);
//   }
// };

// const retrieveData = async (key) => {
//   try {
//     const value = await AsyncStorage.getItem(key);
//     if (value !== null) {
//       console.log('Retrieved data:', value);
//     } else {
//       console.log('Data not found');
//     }
//   } catch (error) {
//     console.log('Error retrieving data:', error);
//   }
// };