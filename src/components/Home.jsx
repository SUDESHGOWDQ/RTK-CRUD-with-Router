import { useDispatch, useSelector } from "react-redux";
import { fetchPost, deletePost } from "../app/EmpSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const empData = useSelector((state) => state.emp.emp);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <div className="Home">
      <table width={"100%"} border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {empData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.salary}</td>
                <td>
                  <Link to={`/editPost/${item.id}`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
