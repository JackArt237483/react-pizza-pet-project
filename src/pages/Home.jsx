import React, { useRef } from 'react'
import { useEffect } from "react";
import {useSelector,useDispatch} from "react-redux"
import {Link} from 'react-router-dom'
import qs from "qs"
import {setCategoryId,setChangePages} from '..//redux/slices/filterSlice'
import Categories from "../components/Categories"
import PizzaBlock from "../components/Pizzas/PizzaBlock"
import SkeletonPizza from "../components/Pizzas/SkeletonPizza";
import Sort, { typesSort } from "../components/Sort";
import Pagination from '../components/pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { FetchPizzas, selectedPizza} from '../redux/slices/pizzaSlice';


function Home() {

  const dispatch = useDispatch()
  const {items, status} = useSelector(selectedPizza)
  const navigate = useNavigate()
  const isSearch = useRef(false);
  const isMound =  useRef(false)
  const categotyID = useSelector((state)=> state.filter.categotyID)
  const sortType = useSelector((state)=> state.filter.sort.sortItems)
  const changePage = useSelector((state)=> state.filter.changePage)
  const searchValue = useSelector((state)=> state.filter.searchValue)

  

    const clickToValueCategory = (obj) => {
      dispatch(setCategoryId(obj))
    }

    const changesNumberPages = (num) => {
      dispatch(setChangePages(num))
    }

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
    },[dispatch])

    useEffect(() => {


      const fetchPizzas = async() => {
        dispatch(FetchPizzas({categotyID,sortType,changePage}));
      };

        if (!isSearch.current) {
          fetchPizzas();
        }
        isSearch.current = false;

    }, [categotyID, sortType, changePage,dispatch]);
  
    
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
        <h2 style={{marginTop: "40px"}} className="content__title">Все пиццы</h2>
        {
          status === "error" ?(  <div className="content__error-info">
                    <h2>Произошла ошибка 😕</h2>
                    <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
                </div>
          ) : (
            <div style={{marginTop: '25px'}} className="content__items">
            {
             status === "loanding"
              ? Array(9).fill().map((_,index)=><SkeletonPizza key={index}/>)
              :items.filter(obj => {
                if(obj.title.includes(searchValue)){
                   return true
                  }
                   return false
                 }).map((index,value) => ( <Link key={value} to={`/pizza/${index.id}`}>
                  <PizzaBlock  {... index}/>
                  </Link>
              ))
            }
          </div>
          )
        }

        <Pagination  changesPage={changePage} onChangePages={changesNumberPages}/>
      </div>
  )
}

export default Home




