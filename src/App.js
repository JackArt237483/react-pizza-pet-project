import Header from "./components/Header";
import Home from "./pages/Home"
import {Routes, Route} from 'react-router-dom'
import "./scss/app.scss"
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import React,{ useState } from "react";

export const AppHead = React.createContext({});

function App() {

  const [searchValue, setSearchValue] = useState('')

  return (
  <AppHead.Provider value={{searchValue,setSearchValue}}>
    <div className="wrapper">
      <Header/>
    <div className="content">
      <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path="*" element={<NotFound/>}/>
      </Routes>
      </div>
  </div>
  </AppHead.Provider>
  );
}

export default App;
