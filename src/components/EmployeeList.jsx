import React, { useState } from "react";

const EmployeeList = ({ employees, deleteEmployee, editEmployee }) => {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ jobTitle: "", email: "" });

  const handleEdit = (employee) => {
    setEditId(employee.id);
    setEditData({ jobTitle: employee.jobTitle, email: employee.email });
  };

  const saveEdit = (id) => {
    editEmployee({ id, ...editData });
    setEditId(null);
  };

  return (
    <ul className="divide-y divide-gray-200">
      {employees.map((employee) => (
        <li key={employee.id} className="py-4 flex justify-between items-center">
          {editId === employee.id ? (
            <>
              <input
                type="text"
                value={editData.jobTitle}
                onChange={(e) =>
                  setEditData({ ...editData, jobTitle: e.target.value })
                }
                className="mr-2"
              />
              <input
                type="email"
                value={editData.email}
                onChange={(e) =>
                  setEditData({ ...editData, email: e.target.value })
                }
                className="mr-2"
              />
              <button
                className="bg-green-500 text-white px-2 py-1"
                onClick={() => saveEdit(employee.id)}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span>{employee.name} - {employee.jobTitle} - {employee.email}</span>
              <div>
                <button
                  className="bg-blue-500 text-white px-2 py-1 mr-2"
                  onClick={() => handleEdit(employee)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1"
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;