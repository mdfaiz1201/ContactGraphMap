import React, { useEffect, useState } from 'react'

const Filter = ({defaultValue, filterData, setResetToggle}) => {
   const [selected, setSelected] = useState(defaultValue || '') 
   useEffect(() => {
     setSelected(defaultValue)
     filterData(null)
     setResetToggle(false)
   }, [defaultValue])
   
   const handleChange =(e) => {
      setSelected(e.target.value)
      filterData(e.target.value)
   }
   
   return (
   <div className=' self-start px-3 py-1'>
      <select title="Select data filter" value={selected} onChange={handleChange} className='px-3 py-1 bg-gray-200 border-0 cursor-pointer'>
         <option>All</option>
         <option>Active</option>
         <option>Total Cases</option>
         <option>Recover</option>
         <option>Death</option>
      </select>
   </div>
)
}

export default Filter