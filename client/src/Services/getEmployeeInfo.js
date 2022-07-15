import axios from "axios";



export function EmployeeInfo(){
    return axios.get("employee/EmployeeInfo")
}

// async function getUserData() {
// 	try {
// 		const response = await axios.get(apiUrl + "/EmployeeInfo");
// 		console.log(response);
// 	}
// 	catch (error) {
// 		console.log(error);
// 	}
// }