
import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

// מעבירים את ההיגיון שמתבצע
const store = configureStore({
    reducer:{
        cart: cartSlice,
    },
})


export default store;

//store - It is an object which provides the state of the application