import React from 'react'
import Axios from 'axios';
import { useState } from 'react';
import './EmployeeStyle.css'

const GetEmployeeDetails = () => {
    const[employeeData , setEmployeeData] = useState([]);
      

    const getEmployeeAll = () =>{
        Axios.get("http://localhost:3001/employeeData").then((response)=> {
           // console.log(response);
            setEmployeeData(response.data);
            console.log(employeeData);

        })
    }
  return (
    <div>
    <button onClick={getEmployeeAll}>Show Employees</button>

    {employeeData.map((val,key) => {
      return (
      <div className='detail-display'>
         <h2>Name: {val.name}</h2>  
         <h2>Age : {val.age}</h2> 
         <h2>Address : {val.address}</h2> 
         <h2>Position :{val.position}</h2> 
         <h2>Salary : {val.salary}</h2> 
         <br></br>
         
         </div>)

    })}

   
    </div>
  )
}

export default GetEmployeeDetails