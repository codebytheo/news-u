import React from 'react'

const Tag = ({data}:{data:string}) => {
  return (
    <div className='bg-black rounded-md px-2 py-1 shadow-md text-xs text-white'>{data}</div>
  )
}

export default Tag