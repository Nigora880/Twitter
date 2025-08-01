import { Route, Routes } from 'react-router-dom'
import { PATH } from '../components'
import {Login} from "../pages/Dashboard"

const LoginRoutes = () => {
  return (
    <Routes>
        <Route path={PATH.main} element={<Login/>}/>
    </Routes>
  )
}

export default LoginRoutes
