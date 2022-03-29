import React from 'react'
import { BsFillCollectionFill } from 'react-icons/bs'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { RiCommunityFill } from 'react-icons/ri'


const Roadmap = () => {
  return (
    <div className='flex flex-col justify-center'>
        <div>
            <h1 className='text-black font-extrabold uppercase text-center'>
                Roadmap
            </h1>
            <p className='text-black text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
        </div>
        <div className='flex justify-center items-center'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-20'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex gap-2 m-2'>
                        <h1 className='md:text-9xl text-3xl text-black'>1.</h1>
                        <BsFillCollectionFill className='text-[#000D6B] md:text-6xl text-3xl'/>
                    </div>
                    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded w-60 h-68 m-2'>
                        <h2 className='text-center text-black text-xl'>
                            Grab Iconic Collectibles
                        </h2>
                        <p className='text-sm text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex gap-2 m-2'>
                        <h1 className='md:text-9xl text-3xl text-black'>2.</h1>
                        <AiFillSafetyCertificate className='text-[#000D6B] md:text-6xl text-3xl'/>
                    </div>
                    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded w-60 h-68 m-2'>
                        <h2 className='text-center text-black text-xl'>
                            Unlock A-List Experiences
                        </h2>
                        <p className='text-sm text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex gap-2 m-2'>
                        <h1 className='md:text-9xl text-3xl text-black'>3.</h1>
                        <RiCommunityFill className='text-[#000D6B] md:text-6xl text-3xl'/>
                    </div>
                    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded w-60 h-68 m-2'>
                        <h2 className='text-center text-black text-xl'>
                            Join The Community
                        </h2>
                        <p className='text-sm text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Roadmap