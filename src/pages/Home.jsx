import React from 'react'
import { useEffect, useState } from "react";
import Categories from "../components/Categories"
import PizzaBlock from "../components/Pizzas/PizzaBlock"
import SkeletonPizza from "../components/Pizzas/SkeletonPizza";
import Sort from "../components/Sort";
import Pagination from '../components/pagination/Pagination';
import { AppHead } from '../App';


function Home() {
  
  const {searchValue} = React.useContext(AppHead)
  const [myPizzas, setMyPizzas] = useState([])
  const [pizzasLoanding, setPizzaLoanding] = useState(true)
  const [selectedCategories, setSelectCategories] = useState(0)
  const [changePages, setChangePages] = useState(0)
  const [sortPizzas, setSortPizzas] = useState({
    name: "популярности",
    sortItems: "rating"},
    )

    useEffect(() => {
      setPizzaLoanding(true);
      fetch(`https://642ea8662b883abc64138fa3.mockapi.io/items?page=${changePages}&limit=4&${
        selectedCategories > 0 ? `category=${selectedCategories}&` : ''
      } &sortBy=${sortPizzas.sortItems.replace('-', '')}&order=${
        sortPizzas.sortItems.includes('-') ? 'asc' : 'desc'
      }`)
        .then((res) => res.json())
        .then((arr) => {
          setMyPizzas(arr);
          setPizzaLoanding(false);
          window.scrollTo(0, 0);
        });
    }, [selectedCategories, sortPizzas,changePages]);
  

  return (
       <div className="container">
        <div className="content__top">
          <Categories
            valueStateOne={selectedCategories}
            clickCategory={(i)=> setSelectCategories(i)}
          />
          <Sort
          valueStateTwo={sortPizzas}
          clickToSort={(i)=> setSortPizzas(i)}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            pizzasLoanding 
            ? Array(9).fill().map((_,index)=>   <SkeletonPizza key={index}/>)
            : myPizzas.filter(obj => {
              if(obj.title.includes(searchValue)){
                 return true
                }
              return false
               }) 
              .map((index,value) => (<PizzaBlock key={value} {... index}
              />
            ))
          }
        </div>
        <Pagination onChangePages={(number)=> setChangePages(number)}/>
      </div>
  )
}

export default Home


 