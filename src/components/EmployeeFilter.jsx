import React from "react";

const EmployeeFilter = ({ setFilter }) => {
  return (
    <input
      type="text"
      placeholder="Filter by name"
      onChange={(e) => setFilter(e.target.value)}
      className="border p-2 mb-4"
    />
  );
};

export default EmployeeFilter;