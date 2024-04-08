import React from 'react'
import { Link } from 'react-router-dom'
import drphoto from "../assets/drphoto.png"
import ImageUpload from './ImageUpload'
const Profile1 = () => {
  return (
    <div className="lg:w-11/12 h-screen mx-auto  flex">
       <div className=''>
       <img alt="photo" src={drphoto} className='text-4xl h-20 w-40 text-pink-600 font-cursive font-bold m-3 bg-transparent'></img>

       </div>
      
      <div className=" lg:ml-20 ml-0 ">
      <div className="flex justify-start items-start flex-col mt-20  ">
      <h1 className="text-4xl font-bold text-black justify-center items-center p-0   ">WELCOME! Let's Create Your Profile</h1>
      <p className="text-base text-slate-500 mt-5">Let others get to know you better! You can do these later</p>
      </div>
      <div>
      {/* <h3 className=" justify-start items-start mt-5 font-bold text-xl">Add an Avatar</h3> */}
      <h1 className="text-3xl font-bold mb-4 mt-4 ">Add an Avatar</h1>
      <div className="flex w-1/2 -ml-6">
      
        
        
      
      
        <div className="container mx-auto p-4 w-32 h-32 ml-0 mb-10 lg:mt-3 rounded-full border-2 border-dotted border-blue-200  -mt-5 ">
      
      <div className=''><ImageUpload /></div>
    </div>
      
    </div>
    
        </div>
        <p className="text-sm lg:ml-40 lg:flex hidden lg:-mt-24">or choose one our files</p>  
        <div className='lg:mt-28 mt-5 '>
            <h2 className="font-bold text-xl lg:mt-7 ">Add your Location</h2>
            <input className="border-b-4 border-slate-300 w-8/12 mt-5" type="text" value="Enter a location "></input>
        </div>
        <Link to="/profilepage2"><button  className=" rounded-md text-white bg-pink-600 py-3 w-36 mt-10 mb-3 ">Next</button></Link>
      </div>
     
      </div>
    
  
  )
}

export default Profile1
