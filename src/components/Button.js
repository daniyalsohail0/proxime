import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-gradient-to-r from-[#051367] to-[#2D31FA] hover:bg-gradient-to-l text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button