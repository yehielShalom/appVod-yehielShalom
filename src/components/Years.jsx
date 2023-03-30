import React from 'react'

const Years = () => {
    
  return (
    <div>
        <div className="flex justify-center border-t-[3px] mt-4 ">
          <select className="select select-ghost w-full max-w-xs mt-4">
            {/* לסדר את השגיאה ששורה 45 עושה */}
          <option disabled selected>Pick one</option>
            <option>1990</option>
            <option>2000</option>
            <option>2010</option>
            <option>2020</option>
          </select>
        </div>
    </div>
  )
}

export default Years