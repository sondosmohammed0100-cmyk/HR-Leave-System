
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Components/login/login'
import Layout from './Components/Layout/Layout'
import HrDashboard from "./Components/HrDashboard/HrDashboard.jsx"
import Empdashboard from "./Components/EmpDashboard/EmpDashboard.jsx"
import Register from './Components/Register/Register'
import  NotFound  from './Components/NotFound/NotFound'
import ProtectedRout from './Components/ProtectedRout/ProtectedRout.jsx'
import FormRequest from './Components/FormRequest/FormRequest.jsx'
import { LeaveProvider } from './Components/Context/LeaveContext.jsx'
 import MyRequests from "../src/Components/MyRequests/MyRequests.jsx"
import LeaveHistory from "../src/Components/LeaveHistory/LeaveHistory.jsx"
import Profile from './Components/Profile/Profile.jsx'
import Settings from './Components/Settings/Settings.jsx'
import { UserContextProvider } from './Components/Context/UserContext.jsx'

function App() {

  

let y = createBrowserRouter([
  {path: "" , element: <Layout/> , children:[
    {path:"/" , element: <ProtectedRout><Empdashboard/></ProtectedRout> },   
    {path: "hrdashboard" , element: <ProtectedRout> <HrDashboard/> </ProtectedRout>},
    {path: "formrequest" , element: <ProtectedRout><FormRequest/></ProtectedRout> },  

    {path: "profile" , element: <ProtectedRout><Profile/></ProtectedRout> },   
    {path: "settings" , element: <ProtectedRout><Settings/></ProtectedRout> },   

    {path: "myrequests" , element: <ProtectedRout> <MyRequests/> </ProtectedRout> },   
     {path: "leavehistory" , element: <ProtectedRout><LeaveHistory/></ProtectedRout> },   
    

    {path: "login" , element: <Login/>},
    {path: "register" , element: <Register/>},
    {path: "*" , element: <NotFound/>},
  
  ]}
])


  return (
    <>
    <UserContextProvider>
<LeaveProvider>
 <RouterProvider router={y}></RouterProvider>
</LeaveProvider>
</UserContextProvider>

    </>
  )
}

export default App
