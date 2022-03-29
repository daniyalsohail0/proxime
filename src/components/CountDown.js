import React from 'react'

const CountDown = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center'>
        <div className='flex flex-col justify-center items-center m-4 p-4'>
            <h1 className='text-black font-extrabold uppercase text-center'>
                Release in: 6 hrs 20 mins
            </h1>
            <div className='rounded m-4'>
                <img src='./hero1.jpg' alt='' className='w-64 h-96'/>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center m-4 p-4'>
            <h1 className='text-black font-extrabold uppercase text-center'>
                Live in: 6 hrs 20 mins
            </h1>
            <div className='rounded m-4'>
            <img src='./hero3.jpg' alt='' className='w-64 h-96'/>
            </div>
        </div>
    </div>
  )
}

export default CountDown