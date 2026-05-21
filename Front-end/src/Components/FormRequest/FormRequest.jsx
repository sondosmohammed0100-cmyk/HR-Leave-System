import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import style from "../FormRequest/FormRequest.module.css"
import { LeaveContext } from "../Context/LeaveContext.jsx"
import Sidebar from '../Sidebar/Sidebar.jsx';
import MyNavbar from '../MyNavbar/MyNavbar.jsx';
import Footer from '../Footer/Footer.jsx';

export default function FormRequest() {

  const { addRequest } = useContext(LeaveContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    leaveType: 'Annual Leave',
    startDate: '',
    endDate: '',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

    const newRequest = {
      id: Date.now(), 
      type: formData.leaveType,
      start: formData.startDate,
      end: formData.endDate,
      duration: `${diffDays} days`,
      status: 'Pending'
    };


    addRequest(newRequest);
    
  
    navigate('/'); 
  };

 
  const handleCancel = () => {
    navigate('/');
  };

  return (


   



<div className="d-flex" >
    <Sidebar/>

<div className='flex-grow-1 vh-100  overflow-y-hidden overflow-x-hidden' >
<MyNavbar/>
<main className='' >


 


 

 <div className="row justify-content-center mt-5  align-items-center ">
      <div className="col-md-6">
        <div className="card shadow-lg border-0">
          <div className={ `${style.cardheader} text-white p-4` }>
            <p className='text-primary p-0 m-1' ><span>📋</span> Leave Management</p>
            <h4 className="mb-0">Request New Leave</h4>
            <small className="text-light">Fill in the details below and submit for HR approval</small>
          </div>
          <div className="card-body p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label text-muted small fw-bold">LEAVE TYPE</label>
                <select className="form-select" name="leaveType" value={formData.leaveType} onChange={handleChange} required>
                  <option value="Annual Leave">🌴 Annual Leave</option>
                  <option value="Sick Leave">🤒 Sick Leave</option>
                  <option value="Casual Leave">☕ Casual Leave</option>
                </select>
              </div>
              
              <div className="row mb-3">
                <div className="col">
                  <label className="form-label text-muted small fw-bold">START DATE</label>
                  <input type="date" className="form-control" name="startDate" value={formData.startDate} onChange={handleChange} required />
                </div>
                <div className="col">
                  <label className="form-label text-muted small fw-bold">END DATE</label>
                  <input type="date" className="form-control" name="endDate" value={formData.endDate} onChange={handleChange} required />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label text-muted small fw-bold">EMERGENCY NOTE / REASON</label>
                <textarea className="form-control" rows="3" name="reason" value={formData.reason} onChange={handleChange} required></textarea>
              </div>

              <div className="d-flex gap-2">
                <button type="submit" className= {`${style.btn5} w-100`} >Submit Request →</button>
              
                <button type="button" className="btn btn-outline-secondary w-50" onClick={handleCancel}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>













</main>





<Footer/>
  </div>



  </div>






  );
}