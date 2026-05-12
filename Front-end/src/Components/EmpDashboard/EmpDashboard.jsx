import style from "../EmpDashboard/EmpDashboard.module.css"
import React, { useContext, useState } from 'react'
import Sidebar from "../Sidebar/Sidebar.jsx"
import MyNavbar from "../MyNavbar/MyNavbar.jsx"
import { LeaveContext } from '../Context/LeaveContext.jsx';
import Footer from "../Footer/Footer.jsx"
import img1 from "../../assets/📅.png"
import img2 from "../../assets/✈.png"
import img3 from "../../assets/⏳.png"
import LeaveBalance from "../LeaveBalance/LeaveBalance.jsx";

 function EmpDashboard() {

const { requests } = useContext(LeaveContext);

const getStatusBadge = (status) => {
    switch(status) {
      case 'Approved': return 'badge bg-success bg-opacity-25 text-success';
      case 'Rejected': return 'badge bg-danger bg-opacity-25 text-danger';
      case 'Pending': return 'badge bg-warning bg-opacity-25 text-warning-emphasis';
      default: return 'badge bg-secondary';
    }
  };




  return <>





  <div className="d-flex" >
    <Sidebar/>

<div className='flex-grow-1 vh-100' >
<MyNavbar/>
<main  className="" >


  <div className={`${style.cards} row justify-content-around py-5 m-0 `}>



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








<div className= {`${style.card5} shadow-sm`}     >
      <div className="card-header rounded-4 bg-white p-4 border-bottom d-flex justify-content-between align-items-center">
        <h5 className="mb-0 fw-bold">My Recent Requests</h5>
        <small className="text-muted">Last 30 days</small>
      </div>
      <div className="table-responsive rounded-5">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-light text-muted small">
            <tr>
              <th className="fw-bold ps-4 py-3">LEAVE TYPE</th>
              <th className="fw-bold py-3">START DATE</th>
              <th className="fw-bold py-3">END DATE</th>
              <th className="fw-bold py-3">DURATION</th>
              <th className="fw-bold py-3">STATUS</th>
            </tr>
          </thead>
          <tbody>
     
            {requests?.map((req) => (
              <tr key={req.id}>
                <td className="ps-4 py-3">{req.type}</td>
                <td className="py-3">{req.start}</td>
                <td className="py-3">{req.end}</td>
                <td className="py-3">{req.duration}</td>
                <td className="py-3">
                  <span className={`px-3 py-2 rounded-pill ${getStatusBadge(req.status)}`}>
                    {req.status}
                  </span>
                </td>
              </tr>
            ))}
            
       
            {requests?.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-muted">
                  No leave requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>




<LeaveBalance/>

  



</main>





<Footer/>
  </div>


  </div>


   

  </>
  
}


export default EmpDashboard