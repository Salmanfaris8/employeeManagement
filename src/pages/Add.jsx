import React, { useState } from 'react'
import './Add.css'
import Header from '../components/Header'
import { uploadEmployeeAPI } from '../services/allAPI'
import { useNavigate } from 'react-router-dom'

const Add = () => {

  const navigate = useNavigate()
  const [employeeDetails,setEmployeeDetails] = useState({
    name:"",email:"",status:""
  })

  console.log(employeeDetails);
  
  const handleUploadEmployeeDetails = async (e)=>{
    e.preventDefault()
    const {name,email,status} = employeeDetails
    if(name && email && status){
      try{
        const response = await uploadEmployeeAPI(employeeDetails)
          console.log(response);
          setEmployeeDetails(response.data)
        if(response.status>=200 && response.status<300){
          alert("Employee details added successfully!!!")
          navigate('/')
        }
      }
      catch(err){
        // console.log(err);
      }
    }
    else{
      alert("Please fill the form completely!!!")
    }
  }

  return (
    <div>
        <Header/>
        <div className='add-all'>
        <div className="form-container">
          <h2 className='h2'>Add Employee Details</h2>
          <form onSubmit={handleUploadEmployeeDetails}>
            <div className="form-group">
              <label>Username</label>
              <input onChange={e=>setEmployeeDetails({...employeeDetails,name:e.target.value})} type="text" id="username" name="username" placeholder="Enter username" required/>
            </div>
  
            <div className="form-group">
              <label>Email</label>
              <input onChange={e=>setEmployeeDetails({...employeeDetails,email:e.target.value})} type="email" id="email" name="email" placeholder="Enter email" required/>
            </div>
  
            <div className="form-group">
              <label>Status</label>
              <select onChange={e=>setEmployeeDetails({...employeeDetails,status:e.target.value})} id="status" name="status">
                <option value="">Choose your status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
  
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Add