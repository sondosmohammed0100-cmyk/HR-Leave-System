import React, { createContext, useState } from 'react';

export const UserContext = createContext();



export function UserContextProvider({ children }){

const [userLogin, setuserLogin] = useState(null)

localStorage.getItem("userToken")


const [userRole, setuserRole] = useState(null)

localStorage.getItem("role")

const [username, setusername] = useState(null)
localStorage.getItem("username")




     return (
        <UserContext.Provider value={{userLogin , setuserLogin  ,   userRole ,  setuserRole  ,  username  ,  setusername }}>
          {children}
        </UserContext.Provider>
      );



}