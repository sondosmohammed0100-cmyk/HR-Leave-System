import React, { useState, useEffect } from 'react';

function LeaveBalance() {

  const staticData = [
    { id: 1, type: "ANNUAL LEAVE", used: 3, total: 7, theme: "primary" },
    { id: 2, type: "SICK LEAVE", used: 5, total: 7, theme: "warning" },
    { id: 3, type: "CASUAL LEAVE", used: 2, total: 7, theme: "success" }
  ];

  const [balances, setBalances] = useState(staticData);

 
  useEffect(() => {
  
  }, []);

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-header bg-white p-4 border-bottom">
        <h5 className="mb-0 fw-bold">Leave Balance Breakdown</h5>
      </div>
      
      <div className="card-body p-4">
        <div className="row g-3">
 
          {balances.map((item) => {
      
            const progress = (item.used / item.total) * 100;
            
            return (
              <div className="col-md-4" key={item.id}>
             
                <div className={`p-4 rounded-3 bg-${item.theme} bg-opacity-10 h-100`}>
                  <div className={`text-${item.theme} fw-bold small mb-2`}>
                    {item.type}
                  </div>
                  
                  <div className="d-flex align-items-baseline mb-3">
                    <span className="fs-3 fw-bold me-1 text-dark">{item.used}</span>
                    <span className="text-muted small">/{item.total} days</span>
                  </div>
                  
                  
                  <div className="progress" style={{ height: '6px', backgroundColor: 'rgba(0,0,0,0.05)' }}>
                    <div 
                      className={`progress-bar bg-${item.theme}`} 
                      role="progressbar" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LeaveBalance;