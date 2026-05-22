import { configureStore } from "@reduxjs/toolkit";

import donorReducer from "../features/donerSlice"


export const Store = configureStore({
    reducer:{
        donor:donorReducer
    }
})