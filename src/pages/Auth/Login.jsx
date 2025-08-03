import { useState } from 'react'
import { Button, Heading, Input, Text } from '../../components'
import { Logo, PageLoading } from '../../assets/img'
import { useCookies } from "react-cookie"

const Login = () => {

  const [_cookies, setCookie] = useCookies(['token']);
  const [loading, setLoading] = useState(false)

  function handleLogin(e){
    e.preventDefault()
    setLoading(true)
    const data = {
      email:e.target.email.value,
      password:e.target.password.value
    }
    setTimeout(() =>{
      setCookie("token",data)
    },1000)
  }
  return (

    <>
    <div className="!pt-[90px] w-[450px] h-[450px] text-start mx-auto flex flex-col justify-center">
        <img className='pb-[36px]' src={Logo} alt="img" width={50} height={41}/>
      <Heading type={"h1"} title={"Log in to Twitter"}/>
      <form onSubmit={handleLogin} autoComplete='off' className='pt-[36px] flex flex-col gap-[25px]'>
        <Input name={"email"} type={'text'} placeholder={'Login'}  />
        <Input name={"password"} type={'password'} placeholder={'Password'}  />
        <Button>
          {loading ? <img className='mx-auto scale-[2]' src={PageLoading} alt='loading...' width={25} height={25}/> : "Log in"}
        </Button>
        <div className="flex justify-between">
           <Text extraclass={"text-[#1DA1F2]"} title={"Forgot password?"}/>
           <Text extraclass={"text-[#1DA1F2]"} title={"Sign up to Twitter"}/>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login 