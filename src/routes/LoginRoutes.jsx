import { Route, Routes } from 'react-router-dom'
import { PATH } from '../components'
import {Login} from "../pages/Dashboard"
import { Suspense } from 'react'
import PageLoading from '../components/PageLoading'

const LoginRoutes = () => {
  return (
    <Routes>
        <Route path={PATH.main} element={<Suspense fallback={<PageLoading/>}><Login/></Suspense> 
         }/>
    </Routes>
  )
}

export default LoginRoutes
