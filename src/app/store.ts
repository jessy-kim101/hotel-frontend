import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UserApi } from '../features/user/usersApi';

import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
 import { loginAPI } from '../features/user/LoginApi';
import userSlice from '../features/login/userSlice';
import { bookingAPI } from "../features/booking/bookingApi";
import { roomAPI } from "../features/room/roomApi";
import { hotelAPI } from '../features/hotel/hotelApi';
import { ticketAPI} from '../features/ticket/ticketApi';


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    [UserApi.reducerPath]:UserApi.reducer,
    [loginAPI.reducerPath]:loginAPI.reducer,
    [bookingAPI.reducerPath]:bookingAPI.reducer,
    [roomAPI.reducerPath]:roomAPI.reducer,
    [hotelAPI.reducerPath]:hotelAPI.reducer,
    [ticketAPI.reducerPath]:ticketAPI.reducer,
    user:userSlice




})
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(UserApi.middleware)
          .concat(loginAPI.middleware)
            .concat(bookingAPI.middleware)
            .concat(roomAPI.middleware)
            .concat(hotelAPI.middleware)
            .concat(ticketAPI.middleware),

})

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;