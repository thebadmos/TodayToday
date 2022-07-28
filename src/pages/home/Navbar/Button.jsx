import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-BACKGROUND_GREEN text-white text-sm py-2 px-8 rounded md:ml-8 hover:bg-BACKGROUND_GREEN 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button
