import React,{useState} from 'react'
import drphoto from "../assets/drphoto.png"
import ass4 from "../assets/new.jpg"
import { Link } from 'react-router-dom'
const Profile2 = () => {
   
        const [isChecked, setIsChecked] = useState(false);
        const [isChecked1, setIsChecked1] = useState(false);
        const [isChecked2, setIsChecked2] = useState(false);
      
        const handleCheckboxChange = () => {
          setIsChecked(!isChecked);
          
        };
        const handleCheckboxChange1 = () => {
            setIsChecked1(!isChecked1);
            
          };
          const handleCheckboxChange2 = () => {
            setIsChecked2(!isChecked2);
            
          };
       
          

  
  const [showPara, setShowPara] = useState(false);
  const [showPara1, setShowPara1] = useState(false);
  const [showPara2, setShowPara2] = useState(false);
  const handleMouseEnter = () => {
    setShowPara(true);
  };

  const handleMouseLeave = () => {
    setShowPara(false);
  };

  const handleMouseEnter1 = () => {
    setShowPara1(true);
  };

  const handleMouseLeave1 = () => {
    setShowPara1(false);
  };

  const handleMouseEnter2 = () => {
    setShowPara2(true);
  };

  const handleMouseLeave2 = () => {
    setShowPara2(false);
  };

  return (
    <div className="w-11/12 h-screen ">
        <img src={drphoto} className='text-4xl h-20 w-40 text-pink-600 font-cursive font-bold m-4 lg:mt-5 lg:ml-10 bg-transparent'></img>
        <div>
        <div className="lg:flex flex-col justify-center items-center ml-7 ">
            <h1 className=" text-black font-bold text-4xl mt-2" >What brings you to dribbble ?</h1>
            <p className="  text-slate-500 text-sm mt-4">Select the color that best desribe you.Dont worry you can explore more options here. </p>
        </div>

        <div className="flex xl:flex-row lg:flex-row flex-col justify-center items-center mt-14 ml-20 pl-5 lg:gap-10 gap-20 relative   ">
            <div className='flex flex-col w-64 h-64 border-2 hover:border-pink-500 rounded-md justify-center items-center duration-100 hover:cursor-pointer   '
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <div className='hover:-mt-20 duration-300 lg:-mt-7'><img src={ass4} className='w-44  h-32 rounded-md '></img>
                <p className=' duration-100 font-bold'>I am designer looking <br></br> <span className=' duration-100 font-bold ml-3'>to share my work</span></p></div>
              

                
               
                {showPara && (
                <p className=" w-64 h-16 flex items-center justify-center mt-4 text-xs">
                With over 7 million shots of vast <br></br>community of designers,Dribble  <br></br>is the leading source of design<br></br> </p>
               
                  )}
           
              <div className='flex justify-center items-center -ml-44 '>
                <input type="checkbox" className="appearance-none w-6 h-6 rounded-full border border-gray-400 mt-2 checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 absolute ml-48 top-52 "
            checked={isChecked} 
            onChange={handleCheckboxChange }>
            </input>
            </div>
      

</div>


            
            
            <div>
            <div className='flex flex-col w-64 h-64 border-2 hover:border-pink-500 rounded-md justify-center items-center duration-100 hover:cursor-pointer'
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            >
                <div className='hover:-mt-20 duration-300 lg:-mt-7'><img src={ass4} className='w-44  h-32 rounded-md '></img>
                <p className=' duration-100 font-bold'>I am designer looking <br></br> <span className=' duration-100 font-bold ml-3'>to share my work</span></p></div>
              

                
               
                {showPara1 && (
                <p className=" w-64 h-16 flex items-center justify-center mt-4 text-xs">
                With over 7 million shots of vast <br></br>community of designers,Dribble  <br></br>is the leading source of design<br></br> </p>
               
                  )}
           
           <div className='flex justify-center items-center lg:-ml-44 mt-5'>
                <input type="checkbox" className="appearance-none w-6 h-6 rounded-full border border-gray-400 lg: mt-2 checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 absolute lg:ml-48 lg:top-52  "
            checked={isChecked1} 
            onChange={handleCheckboxChange1 }>
            </input>
            </div>
      

            </div>



            
            </div>
            
            <div>
            <div className='flex flex-col w-64 h-64  border-2 hover:border-pink-500 rounded-md justify-center items-center duration-100 hover:cursor-pointer'
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            >
                <div className='hover:-mt-20 duration-300 lg:-mt-10'><img src={ass4} className='w-44  h-32 rounded-md '></img>
                <p className=' duration-100 font-bold'>I am designer looking <br></br> <span className=' duration-100 font-bold ml-3'>to share my work</span></p></div>
              

                
               
                {showPara2 && (
                <p className=" w-64 h-16 flex items-center justify-center mt-4 text-xs">
                With over 7 million shots of vast <br></br>community of designers,Dribble  <br></br>is the leading source of design<br></br> </p>
               
                  )}
           
           <div className='flex justify-center items-center lg:-ml-44 '>
                <input type="checkbox" className="appearance-none w-6 h-6 rounded-full border border-gray-400 lg:mt-2 checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 absolute lg:ml-48 lg:top-52 mt-7 "
            checked={isChecked2} 
            onChange={handleCheckboxChange2 }>
            </input>
            </div>
      

</div>


           
            </div>
            
           
            
        </div>
        {isChecked &&(
<div><p className="flex justify-center items-center text-xl font-bold text-pink-500 mt-10 ml-10 sm:-ml-40 sm:text-sm">Anything Else! you can select multiple </p></div>
  )}
  {isChecked1 &&(
<div><p className="flex justify-center items-center text-xl font-bold text-pink-500 mt-10 ml-10 sm:-ml-40 sm:text-sm">Anything Else! you can select multiple </p></div>
  )}
  {isChecked2 &&(
<div><p className="flex justify-center items-center text-xl font-bold text-pink-500 mt-10 ml-10 sm:-ml-40 sm:text-sm">Anything Else! you can select multiple </p></div>
  )}
        <div className="flex justify-center items-center  lg:ml-20"><Link to="/fullpage"><button  className=" rounded-md   bg-pink-400 py-3 w-36 mt-14 mb-3   ml-24">Finish</button></Link></div>
        <p className='flex justify-center items-center lg:ml-44 ml-20 text-slate-500'>or press return</p>
        </div>
        </div>
    
  )

}
export default Profile2
