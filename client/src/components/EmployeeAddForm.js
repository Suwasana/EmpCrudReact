import React from 'react'
import Axios from 'axios';
import {useState} from 'react';
import GetEmployeeDetails from './GetEmployeeDetails';



const EmployeeAddForm = () => {

    const [name , setName] = useState("");
    const [age , setAge] = useState(0);
    const [address , setAddress] = useState("");
    const [position , setPosition] = useState("");
    const [salary , setSalary] = useState(0);
  
    const addEmployee = () => {
      Axios.post("http://localhost:3001/create" , {
        name:name,
        age : age,
        address : address,
        position : position,
        salary : salary,
      }).then(()=> {
        //console.log("Success");
       
      })
    }
  return (
    <div className="App">
      <h1>Add Employee Details</h1>

      <div className='inputFeilds'>
      <lable>Name:</lable>
      <input type="text" onChange={(event)=>{setName(event.target.value);}}></input>

      <lable>Age:</lable>
      <input type="number" onChange={(event)=>{setAge(event.target.value);}}></input>

      <lable>Address:</lable>
      <input type="text" onChange={(event)=>{setAddress(event.target.value)}}></input>

      <lable>Position:</lable>
      <input type="text" onChange={(event)=>{setPosition(event.target.value);}}></input>

      <lable>Salary (per Year):</lable>
      <input type="number" onChange={(event)=>{setSalary(event.target.value);}}></input>
      </div>
       <button className='AddEmployeebtn' onClick={addEmployee}>Add Emoployee</button>
    </div>
    
  )
}

export default EmployeeAddForm