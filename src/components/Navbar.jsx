import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="Navbar navbar-header">
      <h1>Create Crud</h1>
      <button onClick={() => navigate("/addPost")}>Add Data</button>
    </div>
  );
};

export default Navbar;
