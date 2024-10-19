import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"

export const uploadEmployeeAPI = async (detail)=>{
    return await commonAPI("POST",`${SERVER_URL}/allemployee`,detail)
}
export const getAllEmployeeDetailsAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allemployee`,"")
}
export const removeEmployeeDetailAPI = async(employeeid)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allemployee/${employeeid}`,{})
}
export const updateEmplyoyeeDetailsAPI = async(employeeid,employeeDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/allemployee/${employeeid}`,employeeDetails)
}
export const getEmployeeDetailsByidAPI = async(employeeid)=>{
    return await commonAPI("GET",`${SERVER_URL}/allemployee/${employeeid}`,"")
}