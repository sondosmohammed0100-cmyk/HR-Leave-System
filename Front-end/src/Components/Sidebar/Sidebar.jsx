import React from 'react'
import styles from '../Sidebar/Sidebar.module.css'
import { NavLink } from 'react-router-dom';




 function Sidebar() {










    
 const links = [
{icon:"fa-chart-bar", title:"Dashboard", path:"/"},
 {icon:"fa-rectangle-list", title:"My Requests" , path:"/myrequests"},
 {icon:"fa-address-book", title:"Leave History" , path:"/leavehistory"},
 


 ]


const links2 = [
{icon:"fa-user", title:"Profile" , path:"/profile"},
 {icon:"fa-gears", title:"Settings" , path:"/settings"},
 
 ];
 


 














 
 
 return (
 <>

 <aside className={`${styles.sidebar}   py-2 `}>

    <div className='px-5  text-start'>
        <div>
<p className='text-primary m-0'><span className='text-white p-0'>HR</span>Flow</p>
<p className={`${styles.fstext} text-secondary p-0 m-0`}>Employee Portal</p>
        </div>
        
    </div>
    <hr className='text-secondary m-2 ' />






    <span className={`${styles.fstext} text-secondary px-2 `}>Main</span>
 <nav className='py-1'>
{links.map((item,index)=>(





   
    
    

<NavLink 


key={index}
  to={item.path} 
  end={item.path === "/"} 
  className={({ isActive }) => 
    isActive ? `${styles.NavLink} active` : `${styles.NavLink}`}>


<div className='py-1 px-3 py-3 navItem1  ' >
  <i className={`fa-solid ${item.icon} me-1`}></i>
  <span className="title">{item.title}</span>
</div>






</NavLink>
))}







 </nav>




     <span className={`${styles.fstext} text-secondary px-2 `}>Account</span>





 <nav className='py-1'>
{links2.map((item,index)=>(
    
   

<NavLink 

key={index}
  to={item.path} 
  end={item.path === "/"} 
  className={({ isActive }) => 
    isActive ? `${styles.NavLink} active` : `${styles.NavLink}`
  }
>

  <div className='py-1 px-3 py-3 navItem1  ' >
  <i className={`fa-solid ${item.icon} me-1`}></i>
  <span className="title">{item.title}</span>
</div>


</NavLink>


 ))}
 </nav>




 </aside>
 

 
 </>
 )
}
export default Sidebar