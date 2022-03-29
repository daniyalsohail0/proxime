import React, { useState } from 'react'
import { BsWallet, BsFillCartFill } from 'react-icons/bs'
import { RiLoginCircleFill } from 'react-icons/ri'

const Navbar = () => {
    let Links =[
      {name:"Explore",link:"/"},
      {name:"Leader Board",link:"/"},
      {name:"Resources",link:"/"},
      {name:"Blogs",link:"/"},
      {name:"Faqs",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='w-full sticky top-0 left-0'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center 
      text-black uppercase tracking-widest'>
        Designer
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 blue-glassmorphism':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <div className='flex gap-2 m-2 md:ml-4 cursor-pointer'>
         <BsFillCartFill />
         <RiLoginCircleFill />
        </div>
        <button className='flex text-white bg-gradient-to-r from-[#051367] to-[#2D31FA] hover:bg-gradient-to-l duration-500 ease-in rounded px-2 py-2 md:mx-10 my-2 md:my-0'>
            <div className='pt-1 px-2 items-center'><BsWallet /></div>
            <span className='px-2'>Connect Wallet</span>
        </button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar