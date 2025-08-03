import React from 'react'

const Button = ({children,classList,type}) => {
  return (
    <button type={type} className={` w-[450px] h-[60px] bg-[#1DA1F2] text-[#FFFFFF] rounded-full hover:bg-blue-300 duration-150 cursor-pointer ${classList}`}>{children}</button>
  )
}

export default Button
