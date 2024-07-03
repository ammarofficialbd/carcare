import React from 'react'
import './layout.css'
function LayOut({children}) {
  return (
    <div className='layout'> 
       {children}
    </div>
  )
}

export default LayOut