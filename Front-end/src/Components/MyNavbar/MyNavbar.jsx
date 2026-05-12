import React from "react";
import { Link } from "react-router-dom";

export default function MyNavbar() {
  return (
    <>
      <div className=" border d-flex  justify-content-between align-items-center px-5">
        <div className="user p-2">
          <h4>Welcome back, Mostafa 👋</h4>
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
              <button className="bg-primary text-white border-0 px-3 py-1 rounded-4">
                + Request New Leave
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
