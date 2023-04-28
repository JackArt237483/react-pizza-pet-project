import {configureStore} from "@reduxjs/toolkit"
import filterSlice from "./slices/filterSlice"
import addItemSlice from "./slices/addItemSlice"
import pizzaSlice from "./slices/pizzaSlice"

export const store =  configureStore ({
  reducer: {
    filter: filterSlice,
    cart: addItemSlice,
    pizza: pizzaSlice
  }
})