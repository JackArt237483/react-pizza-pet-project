import React, { useState } from 'react'

function Categories() {

  const [indexCat, setIndex] = useState(0)

  const myCategoty = ['Все',"Мясные", "Вегатарианская", "Гриль", "Острые", "Закрытые "]

  const onClickCategory = (index) => {
    setIndex(index)
  }


  return (
    <div className="categories">
            <ul>
              {
                myCategoty.map(( value,index)=> (
                  <li
                  key={value} 
                  onClick={()=> onClickCategory(index)} 
                  className={indexCat === index ? 'active' : ''}>{value}</li>
                ))
              }
            </ul>
      </div>
  )
}

export default Categories
