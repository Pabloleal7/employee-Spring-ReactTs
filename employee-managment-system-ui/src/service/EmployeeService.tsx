import axios from "axios";
import { EmployeeModel } from "../model/EmployeeModel";


export class EmployeeService {
  EMPLOYEE_API_BASE_URL: string = "http://localhost:8080/api/v1/employees";

  saveEmployeee(employee: EmployeeModel): any {
   return axios.post<EmployeeModel>(this.EMPLOYEE_API_BASE_URL, employee).then(
       (data)=> { console.log(data.data)}
   ).catch((error)=>{ console.log(error +" deu merda")})


    /* .then((i) => {
        return i.data;
      }); */

  }

 getEmployee(){
return axios.get<EmployeeModel[]>(this.EMPLOYEE_API_BASE_URL)
 

  }

  deleteEmployee(id:any){
    return axios.delete(this.EMPLOYEE_API_BASE_URL+"/"+id);
  }

  getEmployeeById(id:any){
    return axios.get(this.EMPLOYEE_API_BASE_URL+"/"+id);
  }

  updateEmployee(employeeModel:EmployeeModel, id:any){
    return axios.put(this.EMPLOYEE_API_BASE_URL + "/"+ id,employeeModel)
  }
}
