import React, { useContext, useState } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import MyNavbar from "../MyNavbar/MyNavbar.jsx";
import Footer from "../Footer/Footer.jsx";
import Style from "./HrDashboard.module.css";
function HrDashboard() {
  const [requests] = useState([
    {
      id: 1,
      employee: "Sama",
      department: "IT",
      leaveType: "Annual",
      dateRange: "1 May - 5 May",
      status: "Pending",
    },
    {
      id: 2,
      employee: "Ahmed",
      department: "HR",
      leaveType: "Sick",
      dateRange: "3 May - 4 May",
      status: "Approved",
    },
  ]);

  return (
    <>


      <div className="d-flex">
        <Sidebar />

        <div className="flex-grow-1 vh-100">
          <MyNavbar />

          <main className="">


            <section className="py-4">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <div className={`${Style.cardStatus}`}>
                      <div className={`${Style.icon} `}>
                        <i className="fa-solid text-primary fa-users"></i>
                      </div>

                      <h6 className={Style.title}>TOTAL EMPLOYEES</h6>

                      <h2 className={Style.number}>142</h2>
                    </div>
                  </div>

                  <div className="col-12 col-md-4 ">
                    <div className={`${Style.cardStatus}`}>
                      <div className={`${Style.icon} `}>
                        <i className="fa-solid text-warning fa-umbrella-beach"></i>
                      </div>

                      <h6 className={Style.title}>On Leave Today</h6>

                      <h2 className={Style.number}>11</h2>
                    </div>
                  </div>

                  <div className="col-12 col-md-4 ">
                    <div className={`${Style.cardStatus}`}>
                      <div className={`${Style.icon} `}>
                        <i className="fa-solid text-success fa-hourglass-half"></i>
                      </div>

                      <h6 className={Style.title}>Pending Requests</h6>

                      <h2 className={Style.number}>3</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${Style.card} mt-5 container`}>
                <div className=" p-4 d-flex justify-content-between text-center">
                  <div className="info">
                    <h5>Recent Leave Requests</h5>
                  </div>
                  <div className=" d-md-flex justify-content-md-end ">
                    <button
                      type="button"
                      className={`${Style.button} btn me-md-2 muted`}
                    >
                      {" "}
                      ALL{" "}
                    </button>
                    <button
                      type="button"
                      className={`${Style.button} btn me-md-2 muted`}
                    >
                      {" "}
                      Approved{" "}
                    </button>
                    <button
                      type="button"
                      className={`${Style.button} btn me-md-2 muted`}
                    >
                      {" "}
                      Pending{" "}
                    </button>
                  </div>
                </div>

                <table className="table  text-center">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Department</th>
                      <th>Leave Type</th>
                      <th>Date Range</th>
                      <th>Status</th>
                      <th>action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {requests.map((req) => (
                      <tr key={req.id}>
                        <td>{req.employee}</td>
                        <td>{req.department}</td>
                        <td>{req.leaveType}</td>
                        <td>{req.dateRange}</td>
                        <td>{req.status}</td>
                        <td>
                          <button
                            type="button"
                            className={`${Style.button1} text-white fw-bold btn me-md-2 muted`}
                          >
                            {" "}
                            Accept{" "}
                          </button>
                          <button
                            type="button"
                            className={`${Style.button2} text-white fw-bold btn me-md-2 muted`}
                          >
                            {" "}
                            Reject{" "}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>




          </main>

          <Footer />
        </div>
      </div>

      
    </>
  );
}

export default HrDashboard;
