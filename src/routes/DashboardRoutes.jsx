import { Route, Routes } from "react-router-dom"
import { routeList } from "../components"
import { Navbar,Sitebar } from "../modules"

const DashboardRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        {routeList.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}
    </Routes>
    <Sitebar/>
    </>
    
  )
}

export default DashboardRoutes
