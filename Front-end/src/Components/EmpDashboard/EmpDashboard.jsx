import style from "../EmpDashboard/EmpDashboard.module.css"
import React from 'react'
import Sidebar from "../Sidebar/Sidebar.jsx"
import MyNavbar from "../MyNavbar/MyNavbar.jsx"
import Footer from "../Footer/Footer.jsx"
import img1 from "../../assets/📅.png"
import img2 from "../../assets/✈.png"
import img3 from "../../assets/⏳.png"

 function EmpDashboard() {
  return <>
  <div className="d-flex" >
    <Sidebar/>

<div className='flex-grow-1  '>
<MyNavbar/>
<main className="vh-100" >
  

 
  <div className={`${style.cards} row justify-content-around py-5 `}>






    <div className="col-3 pt-3  rounded-4 card1">
      <div>
        <div className="icont1">
          <img src={img1} className="py-3 " alt="" />
        </div>
        <p className="text-secondary m-0">Total Balance</p>
        <p className="fs-3 fw-bold m-0">21</p>
        <p className="text-secondary">days available this year</p>
      </div>

</div>








   <div className="col-3 pt-3   rounded-4 card2">
      <div>
        <div className="icont2">
          <img src={img2} className="py-3 "  alt="" />
        </div>
        <p className="text-secondary m-0">TAKEN LEAVES</p>
       <p className="fs-3 fw-bold m-0">0</p>
        <p className="text-secondary">days used far</p>
      </div>

</div>
    



   <div className="col-3 pt-3 rounded-4 card3">
      <div>
        <div className="icont3">
          <img src={img3} className="py-3" alt="" />
        </div>
        <p className="text-secondary m-0">PENDING REQUESTS</p>
        <p className="fs-3 fw-bold m-0">0</p>
        <p className="text-secondary">awaiting HR approval</p>
      </div>

</div>
     
    



  </div>






</main>


<Footer/>
  </div>


  </div>


   

  </>
  
}

export default EmpDashboard