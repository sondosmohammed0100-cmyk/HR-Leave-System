import { Link, Navigate } from "react-router-dom";
import style from "../login/login.module.css"
import { useContext, useState } from 'react'
import { useFormik } from "formik";
import * as yup from "yup"
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { UserContext } from "../Context/UserContext.jsx";
import hrdashboard from "../HrDashboard/HrDashboard.jsx"





export default function Login() {
 
  const [ApiError, setApiError] = useState("")
  let navigate = useNavigate()

const {setuserLogin , userLogin , userRole , setuserRole , setusername , username} = useContext(UserContext)


 function handleLogin(values){

axios.post(`http://localhost:5000/api/login`,values)
.then((res)=>{
  console.log(res);

if(res.data.msg === "Login successful" && res.data.user.role === "HR" ){
    localStorage.setItem("userToken" ,res.data.token)
     localStorage.setItem("role" , res.data.user.role)
     localStorage.setItem("username" , res.data.user.username)
  setuserRole(res.data.user.role)
  setuserLogin(res.data.token)
  setusername(res.data.user.username)
  navigate("/hrdashboard") 


}

else{

res.data.msg === "Login successful" && res.data.user.role === "employee"
localStorage.setItem("userToken" ,res.data.token)
localStorage.setItem("role" , res.data.user.role)
 setuserRole(res.data.user.role)
   setuserLogin(res.data.token)
     navigate("/")
 
}









  
})
 
.catch((res)=>{
setApiError("User Invalid Email or Password")
  
})
    
  }




let myValidation = yup.object().shape({

  email: yup.string().email("Not Valid Email").required("Email is a Required"),
  password: yup.string().required("password is a Required").min(6, "password min length is a 6chr")
})





let formik = useFormik({
  initialValues: {


    email: "",
    password: ""
  },

   validationSchema: myValidation,
  onSubmit: handleLogin
})






  return (
<>





<div className="Login_page ">




<div className="lg:w-xl sm:w-md sm:p-2">



 {ApiError ? <div className='bg-danger rounded-3  w-50 mb-3  m-auto text-center text-white fw-bold  p-3 '> {ApiError} </div> : null}

</div>





      <div className="login container Login-bg py-4">
        <div className="bg-block text-center ">
          <h3>
           <span className="lon"> HR </span> <span className="color">Flow</span>
          </h3>
          <p className="color-p"> Human Resource Management System </p>
        </div>

        <div className="bg-white rounded-2 p-5">
          <div className="row justify-content-between">

            <div className="col-6 line1  border-3 p-3  border-success border-bottom ">
              <Link to={""} className="text-decoration-none fw-bold line11"> <span>Sign In</span></Link>
              {/* <hr class="mt-3  "/> */}
            </div>

                 {/* <hr class="text-dark"/> */}
            <div className="col-6 line2  p-3   border-3  border-bottom">
              <Link to={"/register"} className="text-decoration-none fw-bold"> <span>Create Account</span></Link>
                 {/* <hr class="mt-3 "/> */}
            </div>
          </div>

          <form onSubmit={formik.handleSubmit}>
            
            <div className="mb-3 mt-5">
          <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                Email address
              </label>
               {formik.errors.email && formik.touched.email ? (
                <div className=" mb-2 text-sm text-danger rounded-lg" role="alert">
                  <span className="fs-6">{formik.errors.email} </span>
                </div>
              ) : null}
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>







            <div className="mb-3">

  <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
                Password
              </label>
               {formik.errors.password && formik.touched.password ? (
                <div className=" mb-2 text-sm text-danger rounded-lg" role="alert">
                  <span className="fs-6">{formik.errors.password} </span>
                </div>
              ) : null}
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control"
                id="password"
              />

            </div>



            <div className="mb-3 form-check"></div>
            <button type="submit" className="btn btn-signin w-100 d-flex align-items-center justify-content-center">
                     Sign In to Dashboard
            </button>


              <div className="d-flex align-items-center my-4">
                  <hr className="flex-grow-1"/>
          <span className="mx-2 text-muted small">or continue with</span>
          <hr className="flex-grow-1"/>
          </div>


<div className="row g-3">
  <div className="col-6">
    <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center py-2">

      <span className="small text-dark">Google</span>
    </button>
  </div>
  
  <div className="col-6">
    <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center py-2">
      <span className="small text-dark">Microsoft</span>
    </button>
  </div>
</div>
          </form>
        </div>
      </div>
    </div>

</>








    
    
  );


 

  
}

