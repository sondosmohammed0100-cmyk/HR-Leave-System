import React, { createContext, useState } from 'react';


export const LeaveContext = createContext();

export function LeaveProvider({ children }) {

  const [requests, setRequests] = useState([
    // { id: 1, type: 'Sick Leave', start: '2026-04-14', end: '2026-04-15', duration: '2 days', status: 'Approved' },
    // { id: 2, type: 'Casual Leave', start: '2026-04-02', end: '2026-04-02', duration: '1 day', status: 'Approved' },
    // { id: 3, type: 'Annual Leave', start: '2026-03-10', end: '2026-03-13', duration: '4 days', status: 'Rejected' },
  ]);

  const addRequest = (newRequest) => {
    setRequests([newRequest, ...requests]);
  };





  

  return (
    <LeaveContext.Provider value={{ requests, addRequest }}>
      {children}
    </LeaveContext.Provider>
  );
}