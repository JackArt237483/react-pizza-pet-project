import React, { useRef,useState,useCallback }  from 'react'
import debounce from "lodash.debounce"
import classes from "./search.module.scss"
import search from "..//..//assets/img/search_FILL0_wght400_GRAD0_opsz48 (1).svg"
import deleteValue from "..//..//assets/img/DELETE.svg"
import { AppHead } from '../../App'



function Search() {

  const [value, setValue] = useState("")
  const {setSearchValue} = React.useContext(AppHead)
  const myInputRef = useRef()

  const searchInput = () => {
    setValue("")
    setSearchValue("")
    myInputRef.current.focus()
  }

  const inputValue = useCallback(debounce((str)=>{
     setSearchValue(str)
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
