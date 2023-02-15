import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from '../service/api'


const Store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([
            postsApi.middleware,
        ]),


})
export default Store;

