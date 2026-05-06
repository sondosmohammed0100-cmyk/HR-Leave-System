import React from 'react'
import styles from '../Sidebar/Sidebar.module.css'
 function Sidebar() {

    
 const links = [
{icon:"fa-chart-bar", title:"Dashboard"},
 {icon:"fa-rectangle-list", title:"My Requests"},
 {icon:"fa-address-book", title:"Leave History"},
 


 ]


const links2 = [
{icon:"fa-user", title:"Profile"},
 {icon:"fa-gears", title:"Settings"},
 
 ];
 
 
 
 return (
 <>

 <aside className={`${styles.sidebar}  min-vh-100 py-2`}>

    <div className='px-5 text-start'>
        <div>
<p className='text-primary m-0'><span className='text-white p-0'>HR</span>Flow</p>
<p className={`${styles.fstext} text-secondary p-0 m-0`}>Employee Portal</p>
        </div>
        
    </div>
    <hr className='text-secondary m-2 ' />






    <span className={`${styles.fstext} text-secondary px-2 `}>Main</span>
 <nav className='py-1'>
{links.map((item,index)=>( <div className="navItem text-secondary py-1 px-3 " key={index}>
 <i className={`fa-solid ${item.icon} me-1`}></i>

 <span className="title">{item.title}</span>
 </div>))}
 </nav>




     <span className={`${styles.fstext} text-secondary px-2 `}>Account</span>
 <nav className='py-1'>
{links2.map((item,index)=>( <div className="navItem text-secondary py-1 px-3 " key={index}>
 <i className={`fa-solid ${item.icon} me-1`}></i>

 <span className="title">{item.title}</span>
 </div>))}
 </nav>




 </aside>
 

 
 </>
 )
}
export default Sidebar