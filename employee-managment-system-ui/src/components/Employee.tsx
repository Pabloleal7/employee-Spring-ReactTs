import React from "react";
import { useNavigate } from "react-router-dom";

import { EmployeeModel } from "../model/EmployeeModel";

interface ComponentProps {
  employee: EmployeeModel;
  deleteEmployee: any;
}

export function Employee(props: ComponentProps) {
  const navigate = useNavigate();

  const deleteEmployee = (e: any) => {
    props.deleteEmployee(e, props.employee.id);
  };

  const editEmployee = (e: any) => {
    e.preventDefault();
    navigate(`/updateEmployee/${props.employee.id}`);
  };

  return (
    <tr>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{props.employee.firstName}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{props.employee.lastName}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{props.employee.emailId}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e) => editEmployee(e)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
        >
          Edit
        </a>
        <a
          onClick={(e) => deleteEmployee(e)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
}

export default Employee;
