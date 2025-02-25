import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { baseApi } from "@/redux/api/baseApi"; // ✅ Import first to prevent circular dependency
import authReducer from "@/redux/features/auth/authSlice"; // ✅ Corrected imports
import registerReducer from "@/redux/features/auth/registerSlice"; // ✅ Corrected imports

// ✅ Fix: Handle storage creation for SSR
const createNoopStorage = () => ({
  getItem: async () => null,
  setItem: async (_key, value) => value,
  removeItem: async () => {},
});

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

// ✅ Persist Config (Avoid persisting API cache)
const persistConfig = {
  key: "morfitter-web-app",
  storage,
  whitelist: ["auth"], // ✅ Only persist authentication data
  blacklist: ["baseApi"], // ✅ Don't persist API cache
};

// ✅ Root Reducer - Wrapped with combineReducers first
const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
  register: registerReducer,
});

// ✅ Apply Persist Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Configure Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware), // ✅ Include baseApi middleware
});

// ✅ Create Persistor
export const persistor = persistStore(store);
