import { Outlet, Route, Routes } from "react-router-dom"


import React from 'react'
import EmpDashboard from "../EmpDashboard/EmpDashboard.jsx"
import ProtectedRout from "../ProtectedRout/ProtectedRout.jsx"
import MyRequests from "../MyRequests/MyRequests.jsx"
import LeaveHistory from "../LeaveHistory/LeaveHistory.jsx"



export default function Layout() {
  return <>
  


<div className=" layer2">

 <div>

 


 <Outlet/>

</div>



 </div>



  </>
}

