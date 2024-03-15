import { configureStore } from "@reduxjs/toolkit";
 import counterReducer from '../slice/Slice'
export const store=configureStore({
    reducer:{
        cartState:counterReducer
    },
})