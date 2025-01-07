import React from 'react'

function Butt({color}) {
  return (
   <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg"' style={{backgroundColor: color}}>
    {color}
   </button>
  )
}

export default Butt