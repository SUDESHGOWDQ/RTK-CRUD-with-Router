import { useState } from "react";
import { addPost } from "../app/EmpSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showToast } from "../helpers/toastHelper";

const AddPost = () => {
  const naviagate = useNavigate();
  const dispatch = useDispatch();

  const [newData, setNewData] = useState({ name: "", age: "", salary: "" });

  const handleAddData = (e) => {
    e.preventDefault();
    dispatch(addPost(newData));
    setNewData({ name: "", age: "", salary: "" });
    showToast("Data added successfully!");
    naviagate("/");
  };

  return (
    <div className="AddPost">
      <form>
        <h1>Add Post</h1>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={newData.name}
          onChange={(e) => setNewData({ ...newData, name: e.target.value })}
        />
        <br />
        <label>Age</label>
        <input
          type="text"
          placeholder="Enter Age"
          name="age"
          value={newData.age}
          onChange={(e) => setNewData({ ...newData, age: e.target.value })}
        />
        <br />
        <label>Salary</label>
        <input
          type="text"
          placeholder="Enter Salary"
          name="salary"
          value={newData.salary}
          onChange={(e) => setNewData({ ...newData, salary: e.target.value })}
        />
        <br />
        <button onClick={handleAddData}>Add Data</button>
      </form>
    </div>
  );
};

export default AddPost;
