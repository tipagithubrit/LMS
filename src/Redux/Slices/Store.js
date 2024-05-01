import { configureStore } from "@reduxjs/toolkit";

// import AuthSliceReducer from './AuthSlice';
import authSliceReducer from './AuthSlice';

const store = configureStore({
    reducer: {
        auth : authSliceReducer
    },
    devTools : true
})

export default store;