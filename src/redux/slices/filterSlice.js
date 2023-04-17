import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 5
}

export const filterSlice = createSlice ({
  name: "filter",
  initialState,
  reducers: {
     increment: (state) => {
        state.value += 1
     },
     decrement: (state) => {
      state.value -= 1
     },
     incrementByAmount: (action, state)=> {
        state.value += action.payload
     }
  }
})

export const  {increment, decrement, incrementByAmount} = filterSlice.actions
export default filterSlice.reducer