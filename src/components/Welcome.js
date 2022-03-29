import React from 'react'
import { Carousel } from 'react-bootstrap'

const Welcome = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1'>
        <div className='m-4 p-4 md:my-24'>
            <h1 className='md:text-7xl text-3xl text-black uppercase font-extrabold tracking-wide'>
                revolutionizing the world of NFT.
            </h1>
            <p className='text-black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className='flex md:flex-row flex-col md:gap-4'>
                <button className='flex text-white bg-gradient-to-r from-[#051367] to-[#2D31FA] hover:bg-gradient-to-l duration-500 ease-in rounded px-2 py-2 my-2 md:my-0'>
                    <span>Marketplace</span>
                </button>
                <button className='flex text-white bg-gradient-to-l from-[#051367] to-[#2D31FA] hover:bg-gradient-to-r duration-500 ease-in rounded px-2 py-2 my-2 md:my-0'>
                    <span>Connect Wallet</span>
                </button>
            </div>
        </div>
        <div className='mx-4 md:m-4 md:p-4 px-4 md:px-0'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="./hero2.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="./hero2.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./hero2.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </div>
  )
}

export default Welcome