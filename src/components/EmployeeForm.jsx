import React, { useState } from "react";


const EmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: Date.now(),
      name,
      jobTitle,
      email,
    };
    addEmployee(newEmployee);
    setName("");
    setJobTitle("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
        required
      />

      <input
        type="text"
        placeholder="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        className="border p-2 mr-2"
        required
      />
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mr-2"
        required
      />
      
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Add Employee
      </button>
    </form>
  );
};

export default EmployeeForm;
