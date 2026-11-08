import { configureStore } from "@reduxjs/toolkit";

import donorReducer from "../features/donerSlice"
import authReducer from "../features/authSlice"

export const Store = configureStore({
    reducer:{
        donor:donorReducer,
        auth:authReducer
    }
})