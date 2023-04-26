import React, { useRef } from 'react'
import { useEffect, useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import qs from "qs"
import  axios from "axios"
import {setCategoryId,setChangePages} from '..//redux/slices/filterSlice'
import Categories from "../components/Categories"
import PizzaBlock from "../components/Pizzas/PizzaBlock"
import SkeletonPizza from "../components/Pizzas/SkeletonPizza";
import Sort, { typesSort } from "../components/Sort";
import Pagination from '../components/pagination/Pagination';
import { AppHead } from '../App';
import { useNavigate } from 'react-router-dom';


function Home() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isSearch = useRef(false);
  const isMound =  useRef(false)
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

    const fetchPizzas = () => {
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
    };


    useEffect(()=> {
      if(window.location.serach) {
           const params = qs.parse(window.location.search.substring(1))
           console.log(params)

         const sort = typesSort.find((obj)=> obj.sortItems === params.sortItems )

         dispatch(
            ...params,
            sort
          )
      }
      
      isSearch.current = true;
    },[])

    useEffect(() => {
        if (!isSearch.current) {
          fetchPizzas();
        }
        isSearch.current = false;

    }, [ categotyID,sortType,changePage,searchValue]);
  
    
    useEffect(()=> {

    if(isMound.current){
       const qsString = qs.stringify({
        categotyID,
        changePage,
        sortType,
      })
    navigate(`?${qsString}`);
    }
    isMound.current = true
     
    }, [categotyID, sortType, changePage, navigate])


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


 