import axios from "axios";
// const apiUrl = "http://localhost:4444/employee";



export function registerEmployee(Fname,Lname,Email,Password,PhoneNumber,Gender,Age){
    return axios.post("employee/registerEmployee", {Fname,Lname,Email,Password,PhoneNumber,Gender,Age})
}