
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Components/login/login'
import Layout from './Components/Layout/Layout'
import HrDashboard from "./Components/HrDashboard/HrDashboard.jsx"
import Empdashboard from "./Components/EmpDashboard/EmpDashboard.jsx"
import Register from './Components/Register/Register'
import  NotFound  from './Components/NotFound/NotFound'

function App() {


let y = createBrowserRouter([
  {path: "" , element: <Layout/> , children:[
    {path: "hrdashboard" , element: <HrDashboard/>},
    {path: "empdashboard" , element: <Empdashboard/>},
    {path: "login" , element: <Login/>},
    {path: "register" , element: <Register/>},
    {path: "*" , element: <NotFound/>},
  
  ]}
])

















  return (
    <>

 <RouterProvider router={y}></RouterProvider>
    </>
  )
}

export default App
