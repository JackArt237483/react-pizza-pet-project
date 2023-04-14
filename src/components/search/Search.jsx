import React from 'react'
import classes from "./search.module.scss"
import search from "..//..//assets/img/search_FILL0_wght400_GRAD0_opsz48 (1).svg"
import deleteValue from "..//..//assets/img/DELETE.svg"

function Search({searchValue, setSearchValue}) {
  return (
    <div className={classes.head}>
      <img  className={classes.icon}src={search} alt="Findpizzas" />
      <input 
      value={searchValue}
      onChange={(event)=> setSearchValue(event.target.value)}
      className={classes.root_input} 
      placeholder='Найди пиццы ....'/>
      {searchValue && <img  onClick={()=> setSearchValue('')} className={classes.delete_icon} src={deleteValue} alt="deleteValue" />}
    </div>
  )
}

export default Search
