import Header from '../components/Header'
import './Home.css'
import React, { useEffect, useState } from 'react'
import { getAllEmployeeDetailsAPI, removeEmployeeDetailAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'

const Home = () => {

  const [allEmployee,setAllEmployee] = useState([])

  useEffect(()=>{
    getAllEmployeeDetails()
  },[])

  const getAllEmployeeDetails = async()=>{
    try{
      const response = await getAllEmployeeDetailsAPI()
      // console.log(response);
      setAllEmployee(response.data)
    }
    catch(err){
      console.log(err);
      
    }
  }
  // console.log(allEmployee);

  const deleteEmployeeDetails = async(employeeid)=>{
    try{
      await removeEmployeeDetailAPI(employeeid)
      getAllEmployeeDetails()
    }
    catch(err){

    }
  }

  return (
    <>
      <Header insideHome={true}/>
      <div className="list-container">
      <h2>Employee Details List</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
            {
              allEmployee.length>0?
               allEmployee.map((employee)=>(
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.status}</td>
                  <td>
                    <Link className='btn btn-success' to={`/${employee?.id}/edit`}>Edit</Link>
                  </td>
                  <td>
                  <button onClick={()=>deleteEmployeeDetails(employee.id)} className="trash"><i className='fa-solid fa-trash'></i></button>
                  </td>
                </tr>
               ))
            :
            <div className='text-danger fw-bolder p-4'>No employee details added yet!!</div>
            }
        </tbody>
      </table>
    </div>

    </>
  )
}

export default Home