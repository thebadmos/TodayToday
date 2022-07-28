import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components';
import Logo from "../../home/Logo";

const NavbarContainer = styled.div`
 ${tw`shadow-md w-full fixed bottom-0 left-0`}
`;
const NavbarAlign = styled.div`
 ${tw`md:flex items-center justify-between bg-white md:px-10 px-7`}
`;


const DashFooter = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"Pricing",link:"/"},
      {name:"Help",link:"/"},
    ];
  return (
    <>
    <NavbarContainer>
      <NavbarAlign>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800 '>
        <span className='text-3xl text-indigo-600'>
       <Logo Link to='/'/>
        </span>
      </div>
      
      <ul className={`md:flex md:items-center  md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-20 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 font-semibold mr-8'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
      
       
      </ul>
      </NavbarAlign>
    </NavbarContainer>
    </>
  )
}

export default DashFooter
