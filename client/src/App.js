import {useState} from 'react';
import './App.css';
import EmployeeAddForm from './components/EmployeeAddForm';
import GetEmployeeDetails from './components/GetEmployeeDetails';


function App() {


  return (
    <div>
    
    <EmployeeAddForm></EmployeeAddForm>
    <GetEmployeeDetails></GetEmployeeDetails>
    </div>
  );
}

export default App;
