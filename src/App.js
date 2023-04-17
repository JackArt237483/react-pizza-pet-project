import Header from "./components/Header";
import Home from "./pages/Home"
import {Routes, Route} from 'react-router-dom'
import "./scss/app.scss"
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import React,{ useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {increment,decrement} from "./redux/slices/filterSlice"

export const AppHead = React.createContext({})

function App() {

  const count = useSelector((state) => state.filter.value)
  const dispatch = useDispatch()

  // const [searchValue, setSearchValue] = useState('')

  return (
    <>
    <div>
      <button aria-label= "increment_value"
      onClick={()=> dispatch(increment())}>
        +
      </button>
      <span>{count}</span>
      <button aria-label="decremnt_valie"
      onClick={()=> dispatch(decrement())}>
         -
      </button>
    </div>
    </>
  // <AppHead.Provider value={{searchValue,setSearchValue}}>
  //   <div className="wrapper">
  //     <Header/>
  //   <div className="content">
  //     <Routes>
  //        <Route path='/' element={<Home />}/>
  //        <Route path='/cart' element={<Cart/>}/>
  //        <Route path="*" element={<NotFound/>}/>
  //     </Routes>
  //     </div>
  // </div>
  // </AppHead.Provider>
  );
}

export default App;
