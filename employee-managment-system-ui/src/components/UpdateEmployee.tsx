import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { EmployeeModel } from '../model/EmployeeModel';
import { EmployeeService } from '../service/EmployeeService';

const UpdateEmployee = () => {

    const employeeService = new EmployeeService()
    const navigate = useNavigate()

   

    const {id} = useParams()



    const [employee, setEmployee] = useState<EmployeeModel>(
        { emailId: "", firstName: "", id: id, lastName: "" }
    )
    const [loading, setLoading] = useState(true)

    const updateEmployee = (e:any) => {
        e.preventDefault()

        employeeService.updateEmployee(employee,id).then((response)=>{
            navigate('/employeeList')
        }).catch((error)=>{
            console.log(error)
        })
        
       
    }

    const handleChange = (e: any) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
      };

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
    
          try {
            const response = await employeeService.getEmployeeById(id);
            setEmployee(response.data);
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        };
    
        fetchData();
      }, []);


  return (
    <div className="flex max-w-2xl mx-auto shadow border-b ">
    <div className="px-8 py-8">
      <div className="font-thin text-2xl tracking-wider">
        <h1>Update Employee</h1>
      </div>
      <div className="items-center justify-center h-14 w-full my-4">
        <label className="block text-gray-600 text-sm font-normal">
          First Name
        </label>
        <input
          className="h-10 w-96 border mt-2 px-2 py-2"
          type="text"
          name="firstName"
          value={employee.firstName?.toString()}
          onChange={(e) => handleChange(e)}
          id=""
        />
      </div>
      <div className="items-center justify-center h-14 w-full my-4">
        <label className="block text-gray-600 text-sm font-normal">
          Last Name
        </label>
        <input
          className="h-10 w-96 border mt-2 px-2 py-2"
          type="text"
          name="lastName"
          value={employee.lastName?.toString()}
          onChange={(e) => handleChange(e)}
          id=""
        />
      </div>
      <div className="items-center justify-center h-14 w-full my-4">
        <label className="block text-gray-600 text-sm font-normal">
          Email
        </label>
        <input
          className="h-10 w-96 border mt-2 px-2 py-2"
          type="email"
          name="emailId"
          value={employee.emailId?.toString()}
          onChange={(e) => handleChange(e)}
          id=""
        />
      </div>
      <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
        <button
          onClick={(e) => updateEmployee(e)}
          className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700"
        >
          Update
        </button>
        <button onClick={()=> navigate("/employeeList")} className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700">
          Cancel
        </button>
      </div>
    </div>
  </div>
  )
}

export default UpdateEmployee