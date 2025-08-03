import { useCookies } from "react-cookie"
import { LoginRoutes } from "./routes"
import { DashboardRoutes } from "./routes"

const App = () => {
  const [cookies] = useCookies(['token']);
  
  return cookies?. token ? <DashboardRoutes/> : <LoginRoutes/>
}

export default App