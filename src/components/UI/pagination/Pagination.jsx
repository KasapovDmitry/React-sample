import React from 'react'
import { getPagesArray } from '../../../utilits/pages';

export default function Pagination({totalPages, page, changePage}) {
    let pagesArray = getPagesArray(totalPages);
  
  return (
    <div className='pagin__wrapper'>
        {pagesArray.map(p => 
        <span 
        onClick={() => changePage(p)}
        key={p}
        className={page === p ? 'pagin__item_current' : 'pagin__item'}
        >
            {p}
        </span>
        )}
    </div>
    
    
  )
}

