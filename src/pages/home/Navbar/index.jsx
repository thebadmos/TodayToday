// import React, { useState } from 'react'
// import Button from './Button';
// import tw from 'twin.macro'
// import styled from 'styled-components';
// import Logo from "../Logo";

// const NavbarContainer = styled.div`
//  ${tw`shadow-md w-full fixed top-0 left-0`}
// `;
// const NavbarAlign = styled.div`
//  ${tw`md:flex items-center justify-between bg-white md:px-10 px-7`}
// `;

// const Nav = () => {
//     let Links =[
//       {name:"Home",link:"/"},
//       {name:"Pricing",link:"/"},
//       {name:"Help",link:"/"},
//     ];
//     let OtherLinks =[
//       {name:"Login",link:"/login"},
//       {name:"Sign Up",link:"/register"},

//     ];
//     let [open,setOpen]=useState(false);
//   return (
//     <>
//     <NavbarContainer>
//       <NavbarAlign>
//       <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
//       text-gray-800'>
//         <span className='text-3xl text-indigo-600 mr-1 pt-2 mt-4'>
//        <Logo Link to='/'/>
//         </span>
//       </div>

//       <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
//       <ion-icon name={open ? 'close':'menu'}></ion-icon>
//       </div>
    

//       <ul className={ `mt-4 md:flex md:items-center  md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>

//         {
//           Links.map((link)=>(
//             <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 font-semibold'>
//               <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
//             </li>
//           ))
//         }
//         {
//           OtherLinks.map((link)=>(
//             <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 font-semibold'  >
//               <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
//             </li>
//           ))
//         }
//         <Button>
//           Sell Products
//         </Button>
//       </ul>
//       </NavbarAlign>
//     </NavbarContainer>
//     </>
//   )
// }

// export default Nav

import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Logo from "../Logo";
import Button from './Button';
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  ${tw`shadow-md w-full fixed top-0 left-0`}
`;
const NavbarAlign = styled.div`
  ${tw`md:flex items-center justify-between bg-white md:px-10 px-7`}
`;
const SignBtn = styled.div`
  ${tw`text-black text-lg rounded-lg ml-4 w-28 p-1 border-2 
text-center justify-center`}
`;

const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Help", link: "/" },
  ];
  let OtherLinks = [
    { name: "Login", link: "/login" },
    { name: "Sign Up", link: "/register" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <>
      <NavbarContainer>
        <NavbarAlign>
          <div
            className="ml-12 mt-4 text-lg text-sm cursor-pointer flex items-center 
      text-BLACK-_100"
          >
           
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <Logo />
            </span>

            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>

            <ul
              className={`ml-[450px] mt-2 md:flex md:items-center  md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20 " : "top-[-490px]"
              }`}
            >
              {Links.map((link) => (
                <li key={link.name} className="md:ml-8 text-2xl md:my-0 my-7  ">
                  <a
                    href={link.link}
                    className=" hover:text-gray-400 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="ml-24">
              <ul className="mt-2 md:flex md:items-center  md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500">
                {OtherLinks.map((link) => (
                  <li
                    key={link.name}
                    className=" md:ml-8 text-md md:my-0 my-7"
                  >
                    <a
                      href={link.link}
                      className=" hover:text-gray-400 duration-500"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <Button>Sell Products</Button>
          </div>
        </NavbarAlign>
      </NavbarContainer>
    </>
  );
};

export default Nav;
