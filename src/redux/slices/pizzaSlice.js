
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  axios from "axios"

export const  FetchPizzas = createAsyncThunk("pizza/createAsyncActionId" , async (params,ThunkApi) => {
const {categotyID,sortType,changePage} = params

console.log(ThunkApi)

   const {data} = await axios.get(`https://642ea8662b883abc64138fa3.mockapi.io/items?page=${changePage}&limit=4&
    ${categotyID > 0 ? `category=${ categotyID}&` : ''} 
    &sortBy=${sortType.replace('-', '')}
    &order=${sortType.includes('-') ? 'asc' : 'desc' }`)
        return data 

        
    }
  )
  

const  initialState = {
  items: [],
  status: 'loanding',   // loanding || success || error
} 

const pizzaSlice =  createSlice ({
  name: 'pizza', 
  initialState,
  reducers: {
    addPizzas(state,action){
      state.items = action.payload
    }
  },  extraReducers: {
    
    [FetchPizzas.pending]: (state) => {
        state.status = "loanding"
        state.status = []
        console.log(state,("ОТПРАВКА ЗАПРОСА"))
      },
      [FetchPizzas.fulfilled]: (state,action) => {
        state.items = action.payload
        state.status = "success"
        console.log(state, "УСПЕШНО ЗАПРОС БЫЛ ОТПРАВЛЕН")
      },
      [FetchPizzas.rejected]: (state) => {
        state.status = "error"
        state.items = []
        console.log(state, "ПРОИЗОШЛА ОШИБКА")
      },
  }
})



export const selectedPizza = (state)=> state.pizza

export const {addPizzas} = pizzaSlice.actions
export default pizzaSlice.reducer