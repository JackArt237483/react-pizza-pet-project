import React from 'react'
import Categories from "../components/Categories"
import PizzaBlock from "../components/Pizzas/PizzaBlock"
import SkeletonPizza from "../components/Pizzas/SkeletonPizza";
import Sort from "../components/Sort";
import { useEffect, useState } from "react";

function Home() {

  const [myPizzas, setMyPizzas] = useState([])
  const [pizzasLoanding, setPizzaLoanding] = useState(true)


  useEffect (()=> {
     fetch('https://642ea8662b883abc64138fa3.mockapi.io/items').then((res) => {
      return res.json()
      })
      .then((arr)=> {

        setTimeout(() => {
          setMyPizzas(arr)
          setPizzaLoanding(false)
        }, 2000);
      })
      window.scrollTo(0, 0)
  },[])
  

  return (
       <div className="container">
        <div className="content__top">
          <Categories/>
          <Sort/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            pizzasLoanding 
            ? Array(9).fill().map((_,index)=>   <SkeletonPizza key={index}/>)
            : myPizzas.map((object,value) => (<PizzaBlock key={value} {... object}
              />
            ))
          }
        </div>
      </div>
  )
}

export default Home
