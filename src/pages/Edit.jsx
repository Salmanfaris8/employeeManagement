import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import { getEmployeeDetailsByidAPI, updateEmplyoyeeDetailsAPI } from "../services/allAPI"
import { useNavigate, useParams } from "react-router-dom"

const Edit = () => {

  const {id} = useParams()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('active');
  const navigate = useNavigate()

  useEffect(()=>{
    const fetchEmployee = async () => {
      const employee = await getEmployeeDetailsByidAPI(id)
      setName(employee?.data.name)
      setEmail(employee?.data.email)
      setStatus(employee?.data.status)
    }
    fetchEmployee()
  },[id])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedEmployee = { name, email, status };
    await updateEmplyoyeeDetailsAPI(id, updatedEmployee);
    navigate('/');
  };
  

  return (
    <>
      <div>
        <Header/>
        <div className='add-all'>
        <div className="form-container">
          <h2 className='h2'>Edit Employee Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="id">Employee ID</label>
              <input value={id} type="text" id="id" name="id" placeholder="Enter employee ID" required/>
            </div>
  
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input value={name} onChange={e=>setName(e.target.value)} type="text" id="username" name="username" placeholder="Enter username" required/>
            </div>
  
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input value={email} onChange={e=>setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Enter email" required/>
            </div>
  
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select value={status} onChange={e=>setStatus(e.target.value)} id="status" name="status">
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
    </>
  )
}

export default Edit