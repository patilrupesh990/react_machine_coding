import React from 'react'

function Pagination({totalPages,currentPage,handleNext, handlePrev, handlePagination}) {
    
  return (
    <div className='pagination-container'>
        <button onClick={handlePrev} disabled={currentPage === 0} className='pagination-btn'>Prev</button>
        {
            [...new Array(totalPages).keys()].map((n)=>(
                <div key={n} onClick={() => handlePagination(n)} className={'pagination-btn'+((currentPage === n) ? ' active':'')}>
                    {n}
                </div>
            ))
        }
        <button disabled={currentPage === totalPages-1} onClick={handleNext} className='pagination-btn'>Next</button>
    </div>
  )
}

export default Pagination