import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

function Navbar({scrollToSubscribe}) {
    const [nav, setNav] = useState(false);
    const [showCategories, setShowCategories] = useState(false)
    const [selected, setSelected] = useState("Home")
    const navigate = useNavigate()
  return (
    <>
      <nav className='bg-black text-white p-4 w-full h-auto z-[999]'>
        <div className='flex items-center justify-between pb-4 w-full text-center'>
          <span
          className="fixed top-4 left-4 z-[999] cursor-pointer text-red-600 font-light"
          onClick={() => setNav(!nav)}
          >
            <AiOutlineMenu size={25} />
          </span>

          <h1 className='text-center text-[#fc444a] font-light sm:text-[23px] text-[19px] xxl:text-[40px] absolute left-1/2 transform -translate-x-1/2 text-xl cursor-pointer'
          onClick={()=>{navigate('/')}}>
            <span className='text-white'>Daily</span> Dispatch
          </h1>
          <button className='sm:text-md text-sm flex-1 text-end '>
            <span className='border p-1 rounded-md hover:bg-white hover:text-black cursor-pointer '>Subscribe</span>
          </button>
        </div>
        <hr className='w-[100%] mx-auto'/>
        <div className='pt-5 font-thin px-4 flex gap-4 items-center sm:justify-center sm:text-[20px] text-sm w-full overflow-x-auto whitespace-nowrap [scrollbar-width:none]'>
          <p onClick={() => { setSelected("Home"); navigate('/') }} 
          className={`min-w-max hover:text-red-500 cursor-pointer ${selected === "Home" ? "underline-offset-4 underline text-red-500" : ""}`}>
            Home
          </p>
          <p onClick={() => { setSelected("News"); navigate('/news') }} 
          className={`min-w-max hover:text-red-500 cursor-pointer ${selected === "News" ? "underline-offset-4 underline text-red-500" : ""}`}>
            News
          </p>
          <p onClick={() => { setSelected("Tech"); navigate('/tech') }} 
          className={`min-w-max hover:text-red-500 cursor-pointer ${selected === "Tech" ? "underline-offset-4 underline text-red-500" : ""}`}>
            Technology
          </p>
          <p onClick={() => { setSelected("Business"); navigate('/business') }} 
          className={`min-w-max hover:text-red-500 cursor-pointer ${selected === "Business" ? "underline-offset-4 underline text-red-500" : ""}`}>
            Business
          </p>
          <p onClick={() => { setSelected("Politics"); navigate('/politics') }} 
          className={`min-w-max hover:text-red-500 cursor-pointer ${selected === "Politics" ? "underline-offset-4 underline text-red-500" : ""}`}>
            Politics
          </p>
          <p onClick={() => { setSelected("World"); navigate('/world') }} 
          className={`min-w-max hover:text-red-500 cursor-pointer ${selected === "World" ? "underline-offset-4 underline text-red-500" : ""}`}>
            World
          </p>
          <p onClick={() => { setSelected("Sports"); navigate('/sports') }} 
          className={`min-w-max hover:text-red-500 cursor-pointer ${selected === "Sports" ? "underline-offset-4 underline text-red-500" : ""}`}>
            Sports
          </p>
          <p onClick={() => { setSelected("Entertainment"); navigate('/entertainment') }} 
          className={`min-w-max hover:text-red-500 cursor-pointer ${selected === "Entertainment" ? "underline-offset-4 underline text-red-500" : ""}`}>
            Entertainment
          </p>
          <p onClick={() => { setSelected("Fashion"); navigate('/fashion') }} 
          className={`min-w-max hover:text-red-500 cursor-pointer ${selected === "Fashion" ? "underline-offset-4 underline text-red-500" : ""}`}>
            Fashion
          </p>
          <p onClick={() => { setSelected("Health"); navigate('/health') }} 
          className={`min-w-max hover:text-red-500 cursor-pointer ${selected === "Health" ? "underline-offset-4 underline text-red-500" : ""}`}>
            Health
          </p>
        </div>
      </nav>
      <div className={`bg-gray-200 flex text-red-700 fixed sm:w-[30%] w-[75%] md:w-[40%] items-center justify-start h-full z-[1000] px-3 py-8 top-0 transition-transform transform ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
        <p
        onClick={() => setNav(!nav)}
        className={`cursor-pointer top-5 right-5 absolute`}
        >
          <AiOutlineClose size={30} />    
        </p>

        <ul className='flex flex-col gap-5 relative list-none w-full'>
          <li
          className='text-[18px] md:text-[20px] font-light cursor-pointer hover:text-white px-4'
          onClick={() => navigate('/')}
          >
            Home
          </li>
          <li
          className='text-[18px] md:text-[20px] font-light cursor-pointer hover:text-white px-4' 
          onClick={() => navigate('/news')}
          >
            News
          </li>
          <li
          className='text-[18px] md:text-[20px] font-light cursor-pointer hover:text-white px-4 flex justify-between items-center'
          onClick={() => setShowCategories(!showCategories)}
          >
            Categories {showCategories ? '▲' : '▼'}
          </li>
          {showCategories && (
            <ul className='flex flex-col gap-2 px-6 text-[16px] md:text-[18px] font-light text-[#fc444a]'>
              <li onClick={() => navigate('/tech')} className='hover:text-white cursor-pointer'>Technology</li>
              <li onClick={() => navigate('/business')} className='hover:text-white cursor-pointer'>Business</li>
              <li onClick={() => navigate('/politics')} className='hover:text-white cursor-pointer'>Politics</li>
              <li onClick={() => navigate('/world')} className='hover:text-white cursor-pointer'>World</li>
              <li onClick={() => navigate('/sports')} className='hover:text-[#fc444a] cursor-pointer'>Sports</li>
              <li onClick={() => navigate('/entertainment')} className='hover:text-white cursor-pointer'>Entertainment</li>
              <li onClick={() => navigate('/fashion')} className='hover:text-white cursor-pointer'>Fashion</li>
              <li onClick={() => navigate('/health')} className='hover:text-white cursor-pointer'>Health</li>         
            </ul>
          )}
          <li
          className='text-[18px] md:text-[20px] font-light cursor-pointer hover:text-white px-4'
          onClick={() => {
            setNav(false)
            scrollToSubscribe();
          }}
          >
            Subscribe
          </li>
        </ul>

        <div className='absolute bottom-8 left-5 flex gap-5 justify-center items-center px-4'>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className='cursor-pointer hover:text-[#fc444a] text-[20px] sm:text-[20px] hover:scale-[150%]' />
          </a>

          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className='cursor-pointer hover:text-[#fc444a] text-[20px] sm:text-[20px] hover:scale-[150%]' />
          </a>

          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <BsYoutube className='cursor-pointer hover:text-[#fc444a] text-[20px] sm:text-[20px] hover:scale-[150%]' />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className='cursor-pointer hover:text-[#fc444a] text-[20px] sm:text-[20px] hover:scale-[150%]' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
