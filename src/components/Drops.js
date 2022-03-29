import React from 'react'

const Drops = () => {
  return (
    <div className='flex flex-col justify-center'>
        <div className='m-4 p-4 flex flex-col justify-center items-center'>
            <h1 className='text-black font-extrabold uppercase text-center'>
                Featured Drops
            </h1>
            <img src='./drops.jpg' alt='' className='rounded-xl w-3/4'/>
        </div>
    </div>
  )
}

export default Drops