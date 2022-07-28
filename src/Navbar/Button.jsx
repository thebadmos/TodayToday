import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-green-900 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-green-800 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button