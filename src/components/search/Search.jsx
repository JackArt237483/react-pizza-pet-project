import React, { useRef,useState,useCallback }  from 'react'
import debounce from "lodash.debounce"
import classes from "./search.module.scss"
import { useDispatch } from 'react-redux'
import {setSearchValue} from "../../redux/slices/filterSlice"
import search from "..//..//assets/img/search_FILL0_wght400_GRAD0_opsz48 (1).svg"
import deleteValue from "..//..//assets/img/DELETE.svg"



function Search() {

  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const myInputRef = useRef()

  const searchInput = () => {
    setValue("")
    dispatch(setSearchValue(""))
    myInputRef.current.focus()
  }

  const inputValue = useCallback(debounce
    ((str)=>{
    dispatch(setSearchValue(str))
  },1000),
    []
  )
  
  const changeInpuValue = (event) => {
     setValue(event.target.value)
     inputValue(event.target.value)
  }



  return (
    <div className={classes.head}>
      <img  className={classes.icon}src={search} alt="Findpizzas" />
      <input 
      ref={myInputRef}
      value={value}
      onChange={changeInpuValue}
      className={classes.root_input} 
      placeholder='Найди пиццы ....'/>
      {value && <img  onClick={searchInput} className={classes.delete_icon} src={deleteValue} alt="deleteValue" />}
    </div>
  )
}

export default Search
