import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";



export default function MyNavbar() {

const {setuserLogin , userLogin , setuserRole , userRole , setusername , username} = useContext(UserContext)
const navigat = useNavigate()


function Signout(){
  localStorage.removeItem("userToken")
  setuserLogin(null)
  setuserRole(null)

  navigat("/login")
}




  return (
    <>
      <div className=" border d-flex  justify-content-between align-items-center px-5">
        <div className="user p-2">
          <h4 className="text-primary fw-bold">Welcome back, <span className="text-black">{username}</span> 👋</h4>
          <p className="text-secondary">
            Thursday, 24 April 2026 · Engineering Department
          </p>
        </div>

        <div className="d-flex gap-5 align-items-center">
          <div>
            {" "}
            <button className="border-0 p-2 rounded-3">🔔</button>{" "}
          </div>
          <div>
            <Link to={"/formrequest"}>
              <button className="bg-primary me-5 text-white border-0 px-3 py-1 rounded-4">
                + Request New Leave
              </button>
            </Link>

            <span onClick={Signout} className="fw-bold signout"  >SignOut <i className="fa-solid fs-5  fa-arrow-right-from-bracket"></i></span>

          </div>
        </div>
      </div>
    </>
  );
}
