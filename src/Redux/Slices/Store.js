import { configureStore } from "@reduxjs/toolkit";

// import AuthSliceReducer from './AuthSlice';
import authSliceReducer from './AuthSlice';
import CourseSliceReducer from "./CourseSlice";
import razorpaySliceReducer from "../Slices/RazorpaySlice";

const store = configureStore({
    reducer: {
        auth : authSliceReducer,
        course : CourseSliceReducer,
        razorpay : razorpaySliceReducer,
    },
    devTools : true
})

export default store;