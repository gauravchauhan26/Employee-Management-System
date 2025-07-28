import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeDashBoard from './Components/DashBoard/EmployeeDashboard'
import AdminDashboard from './Components/DashBoard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './Context/AuthProvider'




const App = () => {

   const [user , setUser] = useState(null)
   const [loggedInUserData , setLoggedInUserData] = useState(null)
   const [userData, setUserData] = useContext(AuthContext)
   
   useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
   }, [])
  
   const handleLogin = (email,password)=>{
       if(email == 'admin@me.com' && password == '123'){
            setUser('admin')
            localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
       }else if(userData){
          const employee =  userData.find((e)=>email == e.email && e.password == password)
            if(employee){
                 setUser('employee')
                 setLoggedInUserData(employee)
            localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee }))
       }
    }
       else{
        alert("Invalid Credentials")
  }
}

   

  //  useEffect(() =>{
  //   //  setLocalStorage()
  //       getLocalStorage()
  //  },)

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : '' }
    {user == 'admin' ? <AdminDashboard changeUser={setUser} /> :( user == 'employee' ? <EmployeDashBoard changeUser={setUser} data={loggedInUserData} />: null )} 
    
    {/* <EmployeeDashBoard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App
