import Home from "./pages/Home"
import {Routes, Route} from 'react-router-dom'
import "./scss/app.scss"
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import React from "react";
import FullInfoPizza from "./components/FullInfoPizza";
import MainLayout from "./layouts/MainLayout";



function App() {
 return (
    <Routes>
         <Route path="/" element={<MainLayout/>}>
            <Route path='' element={<Home />}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='pizza/:id' element={<FullInfoPizza/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
    </Routes>
  );
}

export default App;
