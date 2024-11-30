import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import Navbar from "./components/Navbar";
import EditPost from "./components/EditPost";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addPost" element={<AddPost />} />
          <Route path="/editPost/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
