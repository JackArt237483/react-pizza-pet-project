import React  from 'react'

function Categories({valueStateOne, clickCategory}) {


  const myCategoty = ['Все',"Мясные", "Вегатарианская", "Гриль", "Острые", "Закрытые "]


  return (
    <div className="categories">
            <ul>
              {
                myCategoty.map(( value,index)=> (
                  <li
                  key={value} 
                  onClick={()=> clickCategory(index)} 
                  className={valueStateOne === index ? 'active' : ''}>{value}</li>
                ))
              }
            </ul>
      </div>
  )
}

export default Categories
