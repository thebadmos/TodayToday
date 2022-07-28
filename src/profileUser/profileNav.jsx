import React, { useState } from 'react'
import Button from '../Navbar/Button';
import tw from 'twin.macro'
import styled from 'styled-components';
import Logo from "../pages/Logo/Logo";
import UserProfile from '../pages/Logo/userprofile';

const NavbarContainer = styled.div`
 ${tw`shadow-md w-full fixed top-0 left-0`}
`;
const NavbarAlign = styled.div`
 ${tw`md:flex items-center justify-between bg-white md:px-10 px-7`}
`;


const ProfileNav = () => {
    let Links =[
      {name:"Notification",link:"/"},
      {name:"Premium Service",link:"/"},
      {name:"My Adverts",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <>
    <NavbarContainer>
      <NavbarAlign>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
       <Logo/>
        </span>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>
 
      <ul className={`md:flex md:items-center  md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <Button>
          Sell Products
        </Button>
        <UserProfile/>
        
      </ul>
      </NavbarAlign>
    </NavbarContainer>
    </>
  )
}

export default ProfileNav
