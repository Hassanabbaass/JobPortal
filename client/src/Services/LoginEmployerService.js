import axios from "axios";
// const apiUrl = "http://localhost:4444/employee";

export async function loginEmployer(Email,Password){
    return await axios.post("employer/loginEmployer", {Email,Password})
    .then(async (data) => {
        console.log('test')
        await console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
}
