import React from 'react'

const FilterBlog = () => {
  return (
    <div>
        <select name="category" id="" className='bg-green-500 p-2 rounded-md'>
            <option value="none" selected>Select a filter</option>
            <option value="technology">Technology</option>
            <option value="politics">Politics</option>
            <option value="crime">Crime</option>
        </select>
    </div>
  )
}

export default FilterBlog;