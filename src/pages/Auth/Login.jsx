import React from 'react'
import { Button, Heading, Input, Text } from '../../components'
import { Logo } from '../../assets/img'

const Login = () => {
  return (
    <>
    <div className="!pt-[90px] w-[450px] h-[450px] text-start mx-auto flex flex-col justify-center">
        <img className='pb-[36px]' src={Logo} alt="img" width={50} height={41}/>
      <Heading type={"h1"} title={"Log in to Twitter"}/>
      <form className='pt-[36px] flex flex-col gap-[25px]'>
        <Input type={'text'} placeholder={'Login'}  />
        <Input type={'password'} placeholder={'Password'}  />
        <Button title={"Log in"}/>
        <div className="flex justify-between">
           <Text title={"Forgot password?"}/>
           <Text title={"Sign up to Twitter"}/>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login