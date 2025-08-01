import React from 'react'

const Button = ({title,extraclass}) => {
  return (
    <button className={` w-[450px] h-[60px] bg-[#1DA1F2] text-[#FFFFFF] rounded-full hover:bg-blue-300 duration-150 cursor-pointer ${extraclass}`}>{title}</button>

  )
}

export default Button
