import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { IoSearchOutline } from "react-icons/io5";
 import { IoBagCheckSharp } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
import tick from "../assets/tick.png"


const Mail = () => {
  return (
   <div className=''>
   <Navbar></Navbar>
    <div className='mt-8  '>
    <div className='flex justify-center items-center'><h1 className='lg:text-4xl font-semibold text-black p-0 '>Please Verify Your email...</h1></div>
     <div  className='flex justify-center items-center'><TbMailFilled className=' lg:w-40 lg:h-40 w-32 h-32 text-slate-400 relative'/></div>
     <div  className='flex justify-center items-center'><img alt="photo" src={tick} className='absolute xl:h-10 xl:w-10 h-10 w-10 lg:h-10 lg:w-10 xl:-mt-60 xl:ml-28 lg:ml-28 lg:-mt-60 rounded-full ml-24 -mt-48 '></img></div>
     <div className='flex flex-col justify-center items-center'>
     <p className='text-slate-400'>Please verify your email address .We've sent a confirmation mail to: </p>
      <p className='font-bold mt-3 text-lg'>account@refero.design</p>
      <div><p className='text-slate-400'>Click the confirmation link in that email to begin using Dribbble.</p></div>
     <div><p className='text-slate-400 max-w-[44rem] m-5'>Didn't receive the email? Check your Spam folder. it may have been caught by a filter .if you still dont see it  you can,<span className='text-pink-400'>resend the confirmation mail</span></p></div>
     <p >Wrong email address? <span className='text-pink-400'>Change it</span></p>
    </div>
    <Footer className="mt-20"></Footer>
    </div>
    </div>
    
  )
}

export default Mail
