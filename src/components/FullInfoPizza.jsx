import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function FullInfoPizza() {

  const [pizza, setPizza] = useState()
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect (()=> {
      async function ClickToPizzaPage () {
        try {
          const { data } = await axios.get(`https://642ea8662b883abc64138fa3.mockapi.io/items/${id}`)
          setPizza(data)
        } catch (error) {
          alert('произошла ошибка вернитесь на главную страницу')
          navigate('/')
        }
       }
       ClickToPizzaPage()
  },[id, navigate])

  if(!pizza) {
    return ".....ОЖИДАНИЕ ЗАГРУЗКИ"
  }

  return (
    <div>
      <div className="container">
      <img src={pizza.imageUrl}  alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
      </div>
    </div>
  )
}

export default FullInfoPizza
