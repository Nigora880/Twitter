import React from 'react'

const Input = ({classList, placeholder, type}) => {
  return <input type={type} className={`${classList} w-[450px] h-[70px] border-2 border-[#00000033] rounded-sm text-#00000099 px-[20px]`} placeholder={placeholder}/>
  
}

export default Input
