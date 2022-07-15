import axios from "axios";
// const apiUrl = "http://localhost:4444/employee";

export async function loginEmployee(Email,Password){
    return await axios.post("employee/loginEmployee", {Email,Password})
    .then(async (data) => {
        console.log('test')
        await console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })



    // return await fetch('http://localhost:4444/employee/loginEmployee',{
    //         // credentials: 'same-origin',
    //         // mode: 'cors',
    //         method : "POST",
    //         body : JSON.stringify({Email,Password}),
    //         headers : {
    //             'Content-Type' : 'application/json',
    //             // 'Access-Control-Allow-Origin' : '*'

    //         }
    //     }).then(res => {
    //         if(res.status !== 401)
    //             return res.json().then(data => data);
    //         else
    //             return { isAuthenticated : false, user : {username : "",role : ""}};
    //     })
    
}