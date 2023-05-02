import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: {
    name: "популярности",
    sortItems: "rating"
  },
  categotyID: 0 ,
  changePage: 0, 
  searchValue: '',
}




const filterSlice = createSlice({
  name: "filter",
  initialState,
   reducers:{
      setCategoryId(state,actions){
           state.categotyID = actions.payload
      },
      setSearchValue(state,actions) {
        state.searchValue = actions.payload
      },
      setSort(state,actions) {
        state.sort = actions.payload
      }
      ,
      setChangePages(state,actions) {
        state.changePage = actions.payload
      },
      setParsPage(state,actions) { state.sort = actions.payload.sort
        state.changePage = Number(actions.payload.changePage)
        state.categotyID = Number(actions.payload.categotyID)
      }
   }
})


export const selectSort= ((state)=> state.filter.sort)
export const {setCategoryId,setSort,setChangePages,setParsPage,setSearchValue} = filterSlice.actions
export default filterSlice.reducer