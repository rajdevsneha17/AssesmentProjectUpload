import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <div className="w-full">
      <footer className="bg-slate-200 w-full  lg:w-full mt-32">
        <div className="container mx-auto w-full   py-[1rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              
            <p className='text-4xl text-pink-600 font-bold font-roboto md:text-xl my-4'>dribbble</p>
            <p className="text-[15px] font-medium text-[#646464] max-w-52">
                Dribble is the world leading community for creatives to share grow and get hired
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              
                
            
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-5 relative">
              <p className="text-[22px] font-bold footer-main">Company</p>

            

              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                About 
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Career
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Support
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Media Kit
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
               Testimonials
              </p>
              
            </div>

            <div className="flex flex-col gap-5 relative">
              <p className="text-[22px] font-bold footer-main">Directories</p>

            

              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
               Design Jobs
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Designer for hire 
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Tags
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
               Places
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                FontSpring
              </p>
              <p className="text-[22px] font-bold footer-main">Brands</p>

            

<p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
  Advertise with us
</p>


            </div>

            <div className="flex flex-col gap-5 relative">
              <p className="text-[22px] font-bold -pl-2 footer-main">for designers</p>


              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Go pro
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Explore Design work
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                overlime podcast
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                weekly warm up
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
               Refer a friend
              </p>
            </div>

            

            {/* middle div */}
            <span></span>
          </div>
        </div>

        <div className="w-full h-16 border-slate-400 border-y flex lg:flex    ">
            <div className="xl:flex flex-col w-full">
            <p className="text-sm mt-5 font-normal text-[rgb(100,100,100)]">
                Privacy Policy | © 2023 DribbbleAll rights reserved <br />
                <p className="text-right bg-slate-200">20,501,853 shots dribbbled
               
                
                </p>
               
              </p>
              
            </div>
          
           
          </div>
        
      </footer>
    </div>
  );
}

export default Footer;