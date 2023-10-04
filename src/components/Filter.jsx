import React, { useState } from 'react'

const Filter = ({filterData}) => {
   const [selected, setSelected] = useState('')   

   const handleChange =(e) => {
      setSelected(e.target.value)
      filterData(e.target.value)
   }


   return (
   <div className='px-3 py-1'>
      <select value={selected} onChange={handleChange} className='px-3 py-1 bg-gray-200 border-0 cursor-pointer'>
         <option>All</option>
         <option>Active</option>
         <option>Total</option>
         <option>Recover</option>
         <option>Death</option>
      </select>
   </div>
)
}

export default Filter