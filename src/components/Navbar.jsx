import React from 'react'
import ARC from '../assets/ARC.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll';


import { useState } from 'react'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick =()=>{
        setNav(!nav);
    }
  return (
    <div className=' w-full fixed bg-[#0a192f] items-center justify-between flex h-[80px] text-gray-50'>
        <div>
            <img src={ARC}  className=" ml-20 mt-4 hover:rotate-180 duration-700" alt='logo' style={{width: '50px'}}/>
        </div>
        <div>
            {/*menu */}
            
            <ul className=' hidden md:flex pr-8'>
                <li>
                <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
                </li>
                <li> <Link to='about' smooth={true} duration={500}>
            About
          </Link></li>
                <li> <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link></li>
          <li>
          <Link to='works' smooth={true} duration={500}>
            Work
          </Link>
          </li>
                 <li> <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link></li>
            </ul>
        </div>
            {/*hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
           {!nav ? <FaBars/> : <FaTimes/>} 
        </div>

        {/* Mobile view */}

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'> <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link></li>
                <li className='py-6 text-4xl'> <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link></li>
                <li className='py-6 text-4xl'> <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link></li>
          <li className='py-6 text-4xl'>
          <Link  onClick={handleClick} to='works' smooth={true} duration={500}>
            Work
          </Link>
          </li>
                 <li className='py-6 text-4xl'> <Link  onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>t</li>
        </ul>

        {/* social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[153px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
                    <a className='flex justify-between items-center w-full text-gray-300'href='/'>LinkedIn<FaLinkedin size={25}/></a>
                </li>
                <li className='w-[153px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'href='/'>Github<FaGithub size={25}/></a>
                </li>
                <li className='w-[153px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'href='/'>Email<HiOutlineMail size={25}/></a>
                </li>
                <li className='w-[153px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'href='/'>Resume<BsFillPersonLinesFill size={25}/></a>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar
