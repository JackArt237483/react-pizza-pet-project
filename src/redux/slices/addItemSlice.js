import { createSlice } from "@reduxjs/toolkit";


const  initialState = {
  totalPrizee: 0,
  items: []
} 

const addItemSlice =  createSlice ({
  name: 'cart', 
  initialState,
  reducers: {
    addItems(state,action){

      const findItem = state.items.find((obj) => obj.id === action.payload.id )

       if(findItem) {
         findItem.count++
       } else {
         state.items.push({
          ...action.payload, 
          count: 1})
       }

       state.totalPrizee = state.items.reduce((sum, obj)=>{
        return obj.price * obj.count + sum
       },0)
    },
    minusItem (state, actions) {
      const findItems = state.items.find((obj) => obj.id === actions.payload )

      if(findItems) {
        findItems.count--
      }
    },
    clearItems(state,action){
      state.items = state.items.filter(obj => obj.id !== action.payload)
    },
    removeItems(state){
        state.items = []
    }
    
  }
})

export const selectSort = ((state) => state.cart)
export const selectItemById = (id) => (state) => state.cart.items.find((obj) => obj.id === id)
//фцнкция которая вернет тебе один обьект и найдет его есть ли она в корзине 

export const {addItems,clearItems,removeItems, minusItem} = addItemSlice.actions
export default addItemSlice.reducer