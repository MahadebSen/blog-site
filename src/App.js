import { Route, Routes } from "react-router-dom";
import "./App.css";
import EachBlogDetails from "./Components/BlogsComponents/EachBlogDetails";
import Community from "./Components/Community/Community";
import Entertainment from "./Components/Entertainment/Entertainment";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Technology from "./Components/Technology/Technology";

function App() {
  return (
    <div className="App text-white">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/technology" element={<Technology></Technology>}></Route>
        <Route
          path="/entertainment"
          element={<Entertainment></Entertainment>}
        ></Route>
        <Route path="/community" element={<Community></Community>}></Route>
        <Route
          path="/:id"
          element={<EachBlogDetails></EachBlogDetails>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
