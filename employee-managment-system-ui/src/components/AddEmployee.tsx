import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeModel } from "../model/EmployeeModel";
import { EmployeeService } from "../service/EmployeeService";

export function AddEmployee() {
  const [employee, setEmployee] = useState<EmployeeModel>({});

  const handleChange = (e: any) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const navigate = useNavigate();

  function saveEmployee(e: any) {
    e.preventDefault();

    new EmployeeService()
      .saveEmployeee(employee)
      .then((response: any) => {
        console.log(response);
        navigate("/");
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  function reset(e: any) {
    e.preventDefault();
    setEmployee({ emailId: "", firstName: "", id: "", lastName: "" });
  }

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b ">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
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
            onClick={(e) => saveEmployee(e)}
            className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700"
          >
            Save
          </button>
          <button onClick={(e) =>reset(e)} className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
