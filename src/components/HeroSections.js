import React,{useEffect, useState} from 'react'
import { fetchJsonUser } from '../features/Users/userSlice'
import { useSelector, useDispatch } from 'react-redux';
import  allUsers  from '../features/Users/userSlice';


const HeroSections = () => {
const dispatch = useDispatch()
const users = useSelector(state=>state.user.users)
console.log("allUsers==============", users)

const callNow = ()=>{
    console.log("calling now")
    dispatch(fetchJsonUser())
}


  return (
    <section id='hero'>
        {/* flex container */}
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
            <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
                <h1 className='max-w-md text-4xl text-gray-600 subpixel-antialiased font-bold text-center md:text-5xl md:text-left'>
                    Bring Everyone together to build better products.
                </h1>
                <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
                    Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view
                </p>
                <div className='flex justify-center md:justify-start'>
            <a href="#" onClick={()=>callNow()} className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight baseline">Know More</a>
            </div>
            </div>
            <div></div>
            
        </div>
    </section>
  )
}

export default HeroSections