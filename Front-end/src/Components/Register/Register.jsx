import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import axios from "axios";
import { useFormik } from 'formik';
import * as yup from "yup"

export default function Register() {
 
  
const [ApiError, setApiError] = useState("")
let navigate = useNavigate()

 function handleRegister(values){

   console.log(values);

axios.post(`http://localhost:8000/api/register`,values)
.then((res)=>{
 console.log(res);
 
  // navigate("/login")
  
})
 
.catch((res)=>{
setApiError("User Already exist")
  
})
    
 }








let myValidation = yup.object().shape({
  username: yup.string().min(3, "min Length is a 3chr").max(15 , "max Length is a 15chr").required("name is a Required"),
  email: yup.string().email("Not Valid Email").required("Email is a Required"),
  password: yup.string().required("password is a Required").min(6, "password min length is a 6chr"),
  confirmPassword: yup.string().required("Confirmpassword is a Required").oneOf([yup.ref("password")] , "Not Mached With Password"),
  department: yup.string().required("department is a Required")


})



let formik = useFormik({
  initialValues: {

    username: "",
    email: "",
    password: "",
    confirmPassword:"",
    department:""
  },




   validationSchema: myValidation,
  onSubmit: handleRegister
})
















  return (

<>

<div className="lg:w-xl sm:w-md sm:p-2">



 {ApiError ? <div className='w-full  bg-danger text-white fw-bold rounded-lg p-3 '> {ApiError} </div> : null}

</div>




 <div className="Login_page p-5 ">


      <div className="login container Login-bg py-4">
        <div className="bg-block  text-center ">
          <h3>
           <span className="lon"> HR </span> <span className="color">Flow</span>
          </h3>
          <p className="color-p"> Human Resource Management System </p>
        </div>

        <div className="bg-white rounded-2 p-5">
          <div className="row justify-content-between">

            <div className="col-6 line1  border-3 p-3   border-bottom ">
              <Link to={"/Login"} className="text-decoration-none fw-bold line11"> <span>Sign In</span></Link>
              {/* <hr class="mt-3  "/> */}
            </div>

                 {/* <hr class="text-dark"/> */}
            <div className="col-6 line2  p-3   border-3 border-success border-bottom border-bottom">
              <Link to={""} className="text-decoration-none fw-bold"> <span>Create Account</span></Link>
                 {/* <hr class="mt-3 "/> */}
            </div>
          </div>




          <form onSubmit={formik.handleSubmit} >


                 <div className=" mt-5">
              <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                Enter Your Name
              </label>
              {formik.errors.username && formik.touched.username ? (
                <div className=" mb-2 text-sm text-danger rounded-lg" role="alert">
                  <span className="fs-6">{formik.errors.username} </span>
                </div>
              ) : null}
              <input
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
              />
            </div>


            <div className="mb-3 mt-3">
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
              <div id="email" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3 mt-3">
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

            <div className="mb-3 mt-3">
              <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
                Confirm-Password
              </label>
               {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                <div className=" mb-2 text-sm text-danger rounded-lg" role="alert">
                  <span className="fs-6">{formik.errors.confirmPassword} </span>
                </div>
              ) : null}
              <input
                type="password"
                name="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

               <div className="mb-3 mt-3 ">
              <label htmlFor="exampleInputPassword1"  className=" fw-bold form-label">
                Department
              </label>
               {formik.errors.department && formik.touched.department ? (
                <div className=" mb-2 text-sm text-danger rounded-lg" role="alert">
                  <span className="fs-6">{formik.errors.department} </span>
                </div>
              ) : null}
              <input
                type="text"
                name="department"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>


          



            <div className="mb-1 form-check"></div>

            <button type="submit" className="btn btn-signin w-100 d-flex align-items-center justify-content-center">
                     Submit
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
