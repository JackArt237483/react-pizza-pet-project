import React from 'react'
import classes from "./notFoundBlock.module.scss"

function NotFoundBlock() {
  return (
    <>
    <div className={classes.root}>
      <h1>
        <span>😕</span>
        <br />
         Ничего не найдено
      </h1>
      <p className={classes.description}>
         К сожалени данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
    </>
  )
}

export default NotFoundBlock
