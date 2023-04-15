import React from 'react'
import ReactPaginate from 'react-paginate';
import classes from "./pagination.module.scss"

function Pagination({onChangePages}) {

 

  return (
    <div>
      <ReactPaginate
        className={classes.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event)=>onChangePages(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination
