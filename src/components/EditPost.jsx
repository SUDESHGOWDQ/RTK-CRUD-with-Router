import { useEffect, useState } from "react";
import { editPost, fetchPost } from "../app/EmpSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { showToast } from "../helpers/toastHelper";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newData, setNewData] = useState({ name: "", age: "", salary: "" });
  const empData = useSelector((state) => state.emp.emp);

  const specificData = empData.find((item) => item.id === id);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  useEffect(() => {
    if (specificData) {
      setNewData({
        name: specificData.name,
        age: specificData.age,
        salary: specificData.salary,
      });
    }
  }, [specificData]);

  const handleAddData = (e) => {
    e.preventDefault();
    dispatch(editPost({ id, newData }));
    setNewData({ name: "", age: "", salary: "" });
    showToast("Data updated successfully!");
    navigate("/");
  };

  return (
    <div className="AddPost">
      <form>
        <h1>Edit Post</h1>
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

        <button type="submit" onClick={handleAddData}>
          Update Data
        </button>
      </form>
    </div>
  );
};

export default EditPost;
