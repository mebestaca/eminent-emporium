import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer:persistedReducer,
    middleware: (defaultMiddlewares) => defaultMiddlewares().concat(middleWares)
});
export const persistor = persistStore(store);