import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeModel } from "../model/EmployeeModel";
import { EmployeeService } from "../service/EmployeeService";

import Employee from "./Employee";

const EmployeeList = () => {
  const url = "http://localhost:8080/api/v1/employee";

  const employeeService = new EmployeeService();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState<EmployeeModel[]>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await employeeService.getEmployee();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const deleteEmployee = (e: any, id: any) => {
    e.preventDefault();
    employeeService.deleteEmployee(id)
    .then((res)=>{
        if(employees){
            setEmployees((prevElement)=>{
                return prevElement?.filter((employee)=> employee.id !== id)
            })
        }
    })
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          className="rounded bg-slate-600 text-white px-6 py-2 font-serif"
          onClick={() => navigate("/addEmployee")}
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email ID
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {employees?.map((employee) => (
                <Employee
                  key={employee.id?.toString()}
                  deleteEmployee={deleteEmployee}
                  employee={employee}
                ></Employee>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
