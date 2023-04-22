import React from 'react'
import { useEffect, useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import  axios from "axios"
import {setCategoryId,setChangePages} from '..//redux/slices/filterSlice'
import Categories from "../components/Categories"
import PizzaBlock from "../components/Pizzas/PizzaBlock"
import SkeletonPizza from "../components/Pizzas/SkeletonPizza";
import Sort from "../components/Sort";
import Pagination from '../components/pagination/Pagination';
import { AppHead } from '../App';


function Home() {

  const dispatch = useDispatch()
  const categotyID = useSelector((state)=> state.filter.categotyID)
  const sortType = useSelector((state)=> state.filter.sort.sortItems)
  const changePage = useSelector((state)=> state.filter.changePage)

  

  const {searchValue} = React.useContext(AppHead)
  const [myPizzas, setMyPizzas] = useState([])
  const [pizzasLoanding, setPizzaLoanding] = useState(true)

    const clickToValueCategory = (obj) => {
      dispatch(setCategoryId(obj))
    }


    const changesNumberPages = (num) => {
      dispatch(setChangePages(num))
    }

    useEffect(() => {
      setPizzaLoanding(true);
      axios.get(`https://642ea8662b883abc64138fa3.mockapi.io/items?page=${changePage}&limit=4&${
         categotyID > 0 ? `category=${ categotyID}&` : ''
      } &sortBy=${sortType.replace('-', '')}&order=${
        sortType.includes('-') ? 'asc' : 'desc'
      }`)
        .then((res) => {
          setMyPizzas(res.data);
          setPizzaLoanding(false);
          window.scrollTo(0, 0);
        });
    }, [ categotyID,sortType,changePage,searchValue]);
  

  return (
       <div className="container">
        <div className="content__top">
          <Categories
            valueStateOne={categotyID}
            clickCategory={clickToValueCategory}
          />
          <Sort/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            pizzasLoanding 
            ? Array(9).fill().map((_,index)=><SkeletonPizza key={index}/>)
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
        <Pagination  changesPage={changePage} onChangePages={changesNumberPages}/>
      </div>
  )
}

export default Home


 