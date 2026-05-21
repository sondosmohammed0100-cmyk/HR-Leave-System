import { Outlet } from "react-router-dom"


import React from 'react'
import Footer from "../Footer/Footer"
import MyNavbar from "../MyNavbar/MyNavbar.jsx"

export default function Layout() {
  return <>
  


<div className=" layer2">

 <div>

 <Outlet/>
</div>



 </div>



  </>
}

