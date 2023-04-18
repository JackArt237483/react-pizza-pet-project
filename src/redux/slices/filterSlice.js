import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   sort: {
    name: "популярности",
    sortItems: "rating"
  },
  categotyID: 0 
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
   reducers:{
      setCategoryId(state,actions){
           console.log("ClICK ME",actions)
           state.categotyID = actions.payload
      },
      setSort(state,actions) {
        state.sort = actions.payload
      }
   }
})

export const {setCategoryId,setSort} = filterSlice.actions
export default filterSlice.reducer