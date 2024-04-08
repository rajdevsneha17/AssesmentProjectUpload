import React,{useState} from 'react'
import ass1 from "../assets/ass2.avif"
import { Link } from 'react-router-dom'

import dr1 from "../assets/drlogin.jpg"
const LoginPage = () => {

    const[values,setValues]=useState({
        name:'',
        username:'',
        email:'',
        password:'',
    })
    


    function handleInput(event){
        const newObj={...values,[event.target.name]:event.target.value}
        setValues(newObj)

    }



   
        const [username, setUsername] = useState('');
        const [isAvailable, setIsAvailable] = useState(null);
      
        const handleUsernameChange = async (event) => {
          const enteredUsername = event.target.value;
          setUsername(enteredUsername);
      
          // Simulate check without backend by comparing against a list of existing usernames
          const existingUsernames = ['John', 'doe', 'jane']; // Example list of existing usernames
          const usernameExists = existingUsernames.includes(enteredUsername);
          setIsAvailable(!usernameExists);

          setTimeout(() => {
            setIsAvailable(null);
          }, 2000);
        };
        
        
  return (
    <div className="w-screen h-screen xl:flex md:flex lg:flex-row items-start flex-col     ">
       
      <div className="relative w-1/2 lg:h-full h-[30rem] flex flex-col ">
      
        <div className="absolute  left-[10%] flex flex-col">
        <div >
            <img alt="photo" src={dr1} className='text-4xl h-16 w-32 text-pink-600 font-cursive font-bold m-4 bg-transparent'></img></div>
        <h1 className='text-4xl text-white font-bold mt-10 m-4'>Discover the world's top Designers and creatives</h1>
        
        </div>
        <img alt="photo" src={ass1}  className="w-full h-full lg:object-cover object-cover"/>
      </div>
      <div className="w-1/2 md:h-full bg-[#f5f5f5]  lg:p-20 pl-3 pt-14 xl:pt-28   sm:h-auto ">
       <p className='text-sm text-right text-[#060606] font-semibold left-10 -mt-6 sm:-mt-10'>already a member? Sign in</p>
        <div className="w-full flex flex-col">
            <h3 className="text-2xl font-semibold mb-4 ">Sign Up to Dribble</h3>
            
        </div>
        <form >
       <div className="flex flex-col lg:flex-row xl:flex-row  ">
       <div className="lg:w-5/6 w-6/6  flex-col text-black">
       <p className="text-xs font-bold ">Name</p>
        <input type="text"
        placeholder="John"
        required
        className="xl:w-[14rem] lg:w-[9rem] w-full  py-4    md:text-base  bg-gray-200 rounded-md focus:ring-blue-500 md:pl-5 mr-20 text-xs lg:text-xl sm:pl-2  xl-w-full md-w-full my-1"></input>
        </div>
        
        <div className='flex flex-col'>
        <p className="text-xs font-bold ">User Name</p> 
        <input type="text"
        placeholder=" "
        required
        className="xl:w-[13rem] lg:w-[9rem] w-full  py-4 my-4 md:text-base  bg-gray-200 rounded-md focus:ring-blue-500 pl-5 mr-20 sm:text-xs sm:my-1"
        value={username}
        onChange={handleUsernameChange}>


        </input>

        {isAvailable === true && <p className="text-green-500">Username is available!</p>}
        {isAvailable === false && <p className="text-red-500">Username is already taken.</p>}
        </div>
       
       </div>
       <div> 
        <p className="text-xs font-bold ">Email</p> 
        <input type="email"
        placeholder="account@refero.design"
        required
        name="email"
        className="xl:w-full lg:w-full w-full md:text-base py-4 my-4 bg-gray-200 rounded-md focus:ring-blue-500 pl-5 mr-20 sm:text-xs sm:my-1"></input>
        </div>

        <div> 
        <p className="text-xs font-bold ">Password</p> 
        <input type="password"
        required
        name='password'
        placeholder="6+ characters"
        className="xl:w-full lg:w-full w-full  py-4 md:text-base my-4 bg-gray-200 rounded-md focus:ring-blue-500 pl-5 mr-20 sm:my-1"></input>
        </div>
        
         <div className="xl:mt-4 mt-2 sm:mt-0" >
            <input type="checkbox"></input>
                <span className="text-xs "> Creating an account means you're okay with our <span className="text-[#3d3f8a] text-xs">Terms of<br/> Service.Privacy Policy</span> and our default<span className="text-[#3d3f8a] text-xs"> Notification <br/>Settings </span></span>
        </div>
         <Link to="/profilepage1"><button type='submit' className=" rounded-md bg-pink-600 py-3 w-36 lg:mt-5 mt-3 mb-3 ">Create Account</button></Link>
         </form>
        
        <div className="w-full items-end justify-center mb-0 ">
        <p className="text-xs font-normal text-[#060606] xl:mt-2">this site is protected by CAPTCHA and Google <br/><span className="text-xs font-normal text-[#3d3f8a]">Privacy Poilcy</span> and our default<span className="text-xs font-normal text-[#3d3f8a]"> Notification Settings</span></p>
      </div>
      </div>
      
    </div>
  )
}
export default LoginPage
